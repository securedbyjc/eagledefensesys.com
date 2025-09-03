# Narrative – Access Control (CMMC AC Focus)

This demo shows IAM role reviews, public-bucket prevention, MFA enforcement, and idle-timeout monitoring.

**Excel Tabs & Example Findings:**

- Findings_Detail → `EXCESSIVE_IAM_ROLES`, `PUBLIC_GCS_BUCKET`, `DORMANT_USER_ACCOUNT`  
- SIEM_Incidents → `REMOTE_LOGIN_NO_MFA`, `SESSION_IDLE_TIMEOUT`  

**How this meets CMMC AC requirements:**  

- AC.L2-3.1.1 → IAM roles enforce authorized user access.  
- AC.L2-3.1.3 → Flow of CUI controlled by restricting public bucket access.  
- AC.L2-3.1.6 → Session lock settings protect unattended systems.  
- AC.L2-3.1.12 → SIEM monitors/alerts on remote access attempts.  
- AC.L2-3.1.20 → External connections limited & logged.  
