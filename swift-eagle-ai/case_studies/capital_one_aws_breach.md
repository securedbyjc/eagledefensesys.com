# Case Study: Capital One AWS Data Breach

## 🗓 Year
2019

## 🎯 Summary
A former AWS employee exploited a misconfigured firewall on Capital One’s cloud infrastructure to access personal data of over 100 million customers. While technically external, the attacker's insider knowledge of AWS architecture was the key to executing the breach.

## 🔍 Threat Type
- [ ] Malicious Insider
- [ ] Unwitting Insider
- [x] Compromised Credentials
- [x] Third-Party Vendor (former employee with insider-level knowledge)

## 🛠 Attack Vector
The attacker used a Server Side Request Forgery (SSRF) vulnerability and gained access to an AWS EC2 instance with sensitive S3 bucket credentials.

## ⚠️ What Went Wrong
- Misconfigured IAM roles and S3 bucket permissions
- Lack of UEBA to detect abnormal API calls or privilege use
- No continuous monitoring of cross-account activity or insider-external transitions

## 🧠 How SwiftEagle AI Could Have Helped
- **UEBA Engine** would have flagged the attacker’s unauthorized data exfiltration behavior
- **GRC Mapping Module** would have linked control gaps in identity and privilege management
- **Insider Threat Risk Scoring** could flag former insiders or vendors accessing data via atypical methods

## 🧩 Mapped Controls
- ISO/IEC 27001: A.9.2.6, A.12.4.1, A.13.1.1
- NIST 800-53: AC-6(10), AU-12, SI-4(5)
- CMMC 2.0: AC.L2-3.1.5, AU.L2-3.3.1, SI.L2-3.14.6

## 📚 References
- [Capital One Official Statement](https://www.capitalone.com/facts2019/)
- [CNN Business Coverage](https://www.cnn.com/2019/07/30/tech/capital-one-data-breach/index.html)
