# Case Study: St. Margaret's Health Ransomware Attack

## 🗓 Year
2021

## 🎯 Summary
St. Margaret’s Health, a hospital in Illinois, was impacted by a ransomware attack that disrupted systems critical to Medicare, Medicaid, and insurance billing. The attack contributed to severe financial loss and operational paralysis, ultimately leading to the hospital's closure in 2023.

## 🔍 Threat Type
- [ ] Malicious Insider
- [x] Unwitting Insider
- [ ] Compromised Credentials
- [ ] Third-Party Vendor

## 🛠 Attack Vector
Phishing email opened by an internal staff member introduced malware into the network. The ransomware spread laterally, encrypting billing and operational systems.

## ⚠️ What Went Wrong
- No real-time UEBA or anomaly detection to detect suspicious login or process execution
- Lack of segmentation allowed ransomware to propagate rapidly
- No defined insider threat awareness or incident escalation training for staff

## 🧠 How SwiftEagle AI Could Have Helped
- **UEBA Engine** would detect unusual access patterns, login anomalies, or abnormal file access
- **ITP Training + Playbooks** could help prevent social engineering by raising awareness
- **GRC Integration** would allow automated mapping of noncompliance with NIST/ISO policies, improving response readiness

## 🧩 Mapped Controls
- ISO/IEC 27001: A.12.2.1, A.16.1.4, A.7.2.2
- NIST 800-53: SI-4, IR-6, AT-2
- CMMC 2.0: IR.L2-3.6.1, SI.L2-3.14.1, AT.L2-3.2.1

## 📚 References
- [Avertium Threat Report](https://www.avertium.com/resources/threat-reports/how-ransomware-has-caused-patient-deaths)
- [Local News Coverage](https://www.25newsnow.com/2023/06/16/st-margarets-health-spring-valley-close-june-16/)
