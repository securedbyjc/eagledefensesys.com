#!/usr/bin/env python3
"""
Normalize a Scuba Goggles / IAM export (JSON) into demo findings.json rows.

Input formats tolerated:
- A single JSON object with {"resources":[ ... ]} where each resource has "name", "type", "project_id", "iam": {"bindings":[...]}, etc.
- A list of resource objects
- A folder of *.json files each containing a resource object

Output:
- Appends or writes demo-style findings to mock_data/findings.json, where each finding has:
  rule_id, severity, description, resource, project, event_time (UTC ISO), extras (dict)

Usage:
  python exporter/import_scuba.py --in scuba_dump.json --out mock_data/findings.json --append
  python exporter/import_scuba.py --in scans/ --out mock_data/findings.json

Notes:
- This is intentionally minimal and safe for demos. It flags:
  * Public access (allUsers/allAuthenticatedUsers) on any role
  * High-privilege roles (owner/editor/admin-like) granted to user/groups/SAs
  * Service accounts with broad roles
  * Storage buckets with public viewers (if present in bindings)
- You can extend DETECTORS to cover more cases.
"""

from __future__ import annotations
import argparse
import json
import sys
from pathlib import Path
from datetime import datetime, timezone

# ---------- demo schema helpers ----------

def utcnow_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

def new_finding(rule_id: str, severity: str, description: str, resource: str, project: str, extras: dict | None = None) -> dict:
    return {
        "rule_id": rule_id,
        "severity": severity,
        "description": description,
        "resource": resource,
        "project": project,
        "event_time": utcnow_iso(),
        "extras": extras or {}
    }

# ---------- detectors (tweak freely) ----------

HIGH_PRIV_PATTERNS = (
    "roles/owner",
    "roles/editor",
    "roles/resourcemanager.projectIamAdmin",
    "roles/iam.securityAdmin",
    "roles/iam.serviceAccountAdmin",
    "roles/iam.roleAdmin",
)

PUBLIC_MEMBERS = ("allUsers", "allAuthenticatedUsers")

def is_public_member(member: str) -> bool:
    # member formats like: "user:alice@x", "group:sec@x", "serviceAccount:...", or "allUsers"
    if member in PUBLIC_MEMBERS:
        return True
    # also tolerate a possible "principal://allUsers" style if upstream changes
    return member.lower().endswith("/allusers") or member.lower().endswith("/allauthenticatedusers")

def is_high_priv_role(role: str) -> bool:
    role = role.lower()
    return any(role == p or role.endswith(p) for p in HIGH_PRIV_PATTERNS)

def member_kind(member: str) -> str:
    # quick classifier for narratives
    if ":" in member:
        return member.split(":", 1)[0]
    return member

# ---------- input loading ----------

def load_resources(input_path: Path) -> list[dict]:
    """
    Accept:
      - file.json containing {"resources":[...]} OR a list of resources OR a single resource
      - a directory of *.json files each containing one resource object
    A 'resource' is expected to have keys like:
      name, type, project_id, iam: {bindings: [{role, members: [...], condition?}, ...]}
    """
    resources: list[dict] = []

    def load_one_file(p: Path):
        try:
            with p.open("r", encoding="utf-8") as f:
                data = json.load(f)
        except Exception as e:
            print(f"[WARN] Skipping {p}: {e}", file=sys.stderr)
            return
        if isinstance(data, dict) and "resources" in data and isinstance(data["resources"], list):
            resources.extend(data["resources"])
        elif isinstance(data, list):
            resources.extend(data)
        elif isinstance(data, dict):
            resources.append(data)
        else:
            print(f"[WARN] Unrecognized JSON shape in {p}", file=sys.stderr)

    if input_path.is_dir():
        for p in input_path.glob("*.json"):
            load_one_file(p)
    else:
        load_one_file(input_path)

    return resources

# ---------- analysis ----------

def analyze_resources(resources: list[dict]) -> list[dict]:
    findings: list[dict] = []
    for r in resources:
        name = r.get("name") or r.get("full_name") or r.get("resource") or "unknown"
        rtype = r.get("type") or r.get("asset_type") or ""
        project = r.get("project_id") or r.get("project") or ""
        iam = (r.get("iam") or {})
        bindings = iam.get("bindings") or r.get("bindings") or []

        # Normalize bindings to {role, members, condition?}
        for b in bindings:
            role = b.get("role", "")
            members = b.get("members", []) or []
            condition = b.get("condition") or {}

            # Public access
            pub_members = [m for m in members if is_public_member(m)]
            if pub_members:
                # If storage bucket / object viewer => map to bucket-public
                if "storage" in rtype.lower() or "bucket" in name.lower():
                    findings.append(
                        new_finding(
                            rule_id="GCS.BUCKET.PUBLIC_ACCESS",
                            severity="HIGH",
                            description=f"Public principal(s) {pub_members} bound to {role}",
                            resource=name,
                            project=project,
                            extras={"type": rtype, "role": role, "members": pub_members, "condition": condition}
                        )
                    )
                else:
                    findings.append(
                        new_finding(
                            rule_id="GCP.IAM.PUBLIC_BINDING",
                            severity="HIGH",
                            description=f"Public principal(s) {pub_members} bound to {role}",
                            resource=name,
                            project=project,
                            extras={"type": rtype, "role": role, "members": pub_members, "condition": condition}
                        )
                    )

            # High-privilege role assignments
            if is_high_priv_role(role):
                for m in members:
                    if is_public_member(m):
                        # already handled as public; keep severe
                        continue
                    sev = "HIGH" if member_kind(m) in ("user", "group", "serviceAccount") else "MEDIUM"
                    findings.append(
                        new_finding(
                            rule_id="GCP.IAM.HIGH_PRIV_ROLE_ASSIGNED",
                            severity=sev,
                            description=f"{m} has high-privilege role {role}",
                            resource=name,
                            project=project,
                            extras={"type": rtype, "role": role, "member": m, "condition": condition}
                        )
                    )

    return findings

# ---------- IO for demo findings.json ----------

def read_existing(out_path: Path) -> list[dict]:
    if out_path.exists():
        try:
            with out_path.open("r", encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, list):
                return data
        except Exception:
            pass
    return []

def write_findings(findings: list[dict], out_path: Path, append: bool):
    if append:
        existing = read_existing(out_path)
        payload = existing + findings
    else:
        payload = findings
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open("w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2)

# ---------- CLI ----------

def main():
    ap = argparse.ArgumentParser(description="Normalize Scuba Goggles/IAM export into demo findings.json")
    ap.add_argument("--in", dest="in_path", required=True, help="Input file or directory containing JSON")
    ap.add_argument("--out", dest="out_path", default=str(Path(__file__).resolve().parents[1] / "mock_data" / "findings.json"),
                    help="Output findings.json path (default: mock_data/findings.json)")
    ap.add_argument("--append", action="store_true", help="Append to existing findings.json (default: overwrite)")
    args = ap.parse_args()

    in_path = Path(args.in_path)
    out_path = Path(args.out_path)

    resources = load_resources(in_path)
    if not resources:
        print("[INFO] No resources loaded. Nothing to do.", file=sys.stderr)
        sys.exit(0)

    findings = analyze_resources(resources)
    if not findings:
        print("[INFO] No issues detected by detectors; writing empty/unchanged findings.", file=sys.stderr)

    write_findings(findings, out_path, append=args.append)
    print(f"[OK] Wrote {len(findings)} finding(s) to: {out_path}")

if __name__ == "__main__":
    main()
