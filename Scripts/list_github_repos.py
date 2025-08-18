import os
import sys
import argparse
import requests

# Optional: load .env if present (pip install python-dotenv)
try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    pass

API_URL = "https://api.github.com"

def get_token() -> str:
    token = os.getenv("GITHUB_TOKEN")
    if not token:
        print("ERROR: GITHUB_TOKEN is not set. Set it as an env var or in a .env file.", file=sys.stderr)
        sys.exit(1)
    return token

def list_user_repos(token: str, visibility: str = "all") -> list[dict]:
    """
    visibility: 'all' | 'public' | 'private'
    """
    headers = {"Authorization": f"token {token}", "Accept": "application/vnd.github+json"}
    repos = []
    page = 1

    while True:
        resp = requests.get(
            f"{API_URL}/user/repos",
            headers=headers,
            params={"per_page": 100, "page": page, "visibility": visibility},
            timeout=30,
        )
        if resp.status_code != 200:
            print(f"GitHub API error {resp.status_code}: {resp.text}", file=sys.stderr)
            sys.exit(1)

        chunk = resp.json()
        if not chunk:
            break

        repos.extend(chunk)
        page += 1

    return repos

def print_repos(repos: list[dict]):
    if not repos:
        print("No repositories found.")
        return
    for r in repos:
        name = r.get("full_name") or r.get("name")
        desc = (r.get("description") or "").strip()
        vis = "private" if r.get("private") else "public"
        print(f"- {name} [{vis}]")
        if desc:
            print(f"  {desc}")

def main():
    parser = argparse.ArgumentParser(description="List your GitHub repositories using a PAT.")
    parser.add_argument("--visibility", choices=["all", "public", "private"], default="all",
                        help="Filter by visibility (default: all)")
    args = parser.parse_args()

    token = get_token()
    repos = list_user_repos(token, visibility=args.visibility)
    print_repos(repos)

if __name__ == "__main__":
    main()
# This script lists GitHub repositories for the authenticated user.
# It requires a GitHub Personal Access Token (PAT) set in the GITHUB_TOKEN environment variable.