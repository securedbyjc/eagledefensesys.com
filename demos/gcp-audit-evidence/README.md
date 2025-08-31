# GCP Audit Evidence Demo (EDS)

**Author:** Eagle Defense Systems, LLC (EDS)  
**Purpose:** This demo showcases how Google Cloud Platform (GCP) security data can be transformed into **audit-ready evidence** for compliance frameworks such as **CMMC, NIST 800-53, and FedRAMP**.  

It bridges the common gap in GRC programs:  
- **Engineers** prefer API-driven findings (JSON, BigQuery).  
- **Auditors** prefer human-readable artifacts (Excel).  

This demo demonstrates how to unify those worlds.

---

## ✨ Contribution to GRC/CMMC Tradecraft

Compliance professionals in the GovCon space face three recurring challenges:
1. **Data Overload** – Security tools generate millions of findings, but auditors need concise evidence.  
2. **Framework Mapping** – CMMC, NIST, FedRAMP, and ISO overlap, but evidence must map correctly.  
3. **Audit Readiness** – Evidence must be presented in auditor-friendly formats.  

**This project contributes tradecraft by providing:**
- A reusable **framework mapping file (`framework_map.csv`)** that links findings to NIST AC controls, CMMC practices, and FedRAMP baselines.  
- A **Python exporter** that merges raw findings with mappings and outputs a **structured Excel workbook**.  
- A **mock SIEM data source** to simulate real-time events mapped to compliance controls.  
- A **repeatable demo** that practitioners can extend into production GCP workflows.

---

## 📂 Project Structure
```text
demos/gcp-audit-evidence/
├── exporter/           # Python exporter code
│   ├── main.py
│   ├── requirements.txt
├── mock_data/          # Sample inputs
│   ├── findings.json   # Simulated SCC findings
│   ├── siem_events.json# Synthetic SIEM incidents
├── framework_map.csv   # Control mapping (NIST/CMMC/FedRAMP)
└── output/
    └── audit_report.xlsx  # Generated Excel (ignored in Git)

▶️ Usage

Run the exporter to generate the Excel report:
python exporter/main.py

Output will be written to:
output/audit_report.xlsx

📊 Excel Workbook Contents

Exec_Summary → Posture score, finding counts, top risks.

Findings_Detail → All SCC/Mock findings with mapped controls.

SIEM_Incidents → Mock SIEM events aligned to MITRE ATT&CK & CMMC.

Framework_Mapping → Rule → NIST 800-53 → CMMC → FedRAMP.

Crypto_Strategy (planned) → Current FIPS crypto + roadmap for Confidential Computing & Homomorphic Encryption (future tradecraft).

🚀 Roadmap

1. Integrate with Google Cloud Security Command Center (SCC) APIs.

2. Stream mock SIEM events via Pub/Sub → BigQuery.

3. Automate scheduling/export with Cloud Workflows + Cloud Run.

4. Extend framework mappings (ISO 27001, SOC 2).

5. Publish as part of EDS GRC/CMMC tradecraft toolkit. 

📜 License

This demo is provided as a contribution to the GRC / GovCon community.
Not production-ready. No warranty of security or compliance is expressed or implied.
EOF