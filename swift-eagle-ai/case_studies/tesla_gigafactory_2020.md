# Case Study: Tesla Gigafactory Insider Threat Attempt

## 🗓 Year
2020

## 🎯 Summary
A Russian national attempted to recruit an employee at Tesla's Gigafactory in Nevada to install ransomware on the company’s internal systems. The employee reported the incident to Tesla and worked with the FBI to capture the perpetrator before the attack was executed.

## 🔍 Threat Type
- [x] Malicious Insider
- [ ] Unwitting Insider
- [ ] Compromised Credentials
- [ ] Third-Party Vendor

## 🛠 Attack Vector
Social engineering and bribery: The attacker offered $1 million to a Tesla employee to introduce malware into the internal network. The ransomware was intended to exfiltrate sensitive data before encryption.

## ⚠️ What Went Wrong
- No formal insider threat escalation system in place at the point of contact
- Risk relied on employee integrity instead of policy/process
- No UEBA in place to detect post-infection behavior had the malware been planted

## 🧠 How SwiftEagle AI Could Have Helped
- **ITP Module** would provide a clear pathway to report suspicious contact and automate escalation
- **UEBA Engine** would monitor for unusual access or lateral movement during the malware staging process
- **GRC Mapping** would flag policy violations and align reporting to CMMC and NIST guidelines

## 🧩 Mapped Controls
- ISO/IEC 27001: A.6.1.2, A.7.2.2, A.12.6.2
- NIST 800-53: IR-4, PS-6, AC-2(4)
- CMMC 2.0: AC.L2-3.1.5, IR.L2-3.6.1

## 📚 References
- [DOJ Press Release](https://www.justice.gov/opa/pr/russian-national-arrested-conspiracy-introduce-malware-nevada-companys-computer-network)
- [Forbes Coverage](https://www.forbes.com/sites/daveywinder/2020/08/28/tesla-fbi-ransomware-plot-russian-employee-million-dollar-insider-threat/)
