# Access Control Policy (Demo)

**Scope:** GCP tenant and connected services.  
**Applies to:** Workforce users, service accounts, and devices.  

**Mapped controls:**

- CMMC: AC.L2-3.1.1, AC.L2-3.1.3, AC.L2-3.1.20  
- NIST 800-53: AC-2, AC-4, AC-20  
- SOC 2: CC6.1, CC6.6, CC6.7  
- ISO/IEC 27001: A.5.15, A.8.16  

**Policy Statements:**

1. Access is provisioned via IAM roles; least privilege enforced.  
2. External connections are restricted and logged.  
3. Remote access requires MFA and is monitored.  

**Evidence References:**  
Excel → `Findings_Detail` & `SIEM_Incidents` sheets (`EXCESSIVE_IAM_ROLES`, `PUBLIC_GCS_BUCKET`, `REMOTE_LOGIN_NO_MFA`).
