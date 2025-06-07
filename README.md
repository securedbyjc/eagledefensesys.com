# SwiftEagle AI

## 🔐 Overview
**SwiftEagle AI** is a student-built, cloud-native application designed to detect and mitigate insider threats through the integration of **User and Entity Behavior Analytics (UEBA)**, **AI-driven anomaly detection**, and **GRC policy mapping**. Built for educational, demonstrative, and training purposes, this project showcases how behavioral analytics can enhance cybersecurity posture in real-world scenarios such as ransomware prevention.

---

## 🎯 Purpose
To develop a functional prototype of a GRC application that integrates:
- AI/ML-based anomaly detection (UEBA)
- Insider Threat Program (ITP) policy management
- ISO 27001 / NIST 800-53 / CMMC 2.0 control mapping
- Real-world case study integration

---

## 💻 Tech Stack
| Layer | Technology |
|-------|------------|
| **Cloud Platform** | Microsoft Azure (Student Subscription) |
| **AI Model** | Isolation Forest (via Azure ML Studio) |
| **Data** | CSV log data (simulated Sentinel exports) |
| **Frontend** | Streamlit (MVP UI) |
| **Backend** | Python / Azure Functions (planned) |
| **Storage** | Azure Blob Storage or Cosmos DB |

---

## 📂 Repo Structure
```
/project-root
│
├── /data/              # Sample log datasets for UEBA training
├── /scripts/           # Training scripts, ETL, anomaly detection
├── /notebooks/         # Jupyter notebooks for experimentation
├── /app/               # Streamlit-based dashboard (MVP)
├── /case_studies/      # Real-world ransomware/insider threat cases
├── /docs/              # GRC mappings, policy samples, diagrams
├── requirements.txt    # Python dependencies
└── README.md           # You're here!
```

---

## 🧪 Case Study Integration
This project includes real-world ransomware incidents caused by insider threats. Each case study includes:
- Attack vector and root cause
- Policy/control failures
- How SwiftEagle AI’s detection, analytics, or policy layers could have helped

📁 See: [`/case_studies/`](./case_studies)

---

## 📊 Key Features
- UEBA engine powered by **Isolation Forest** trained on user logins
- Behavior anomaly scoring dashboard
- GRC policy mappings to controls in ISO/NIST/CMMC
- Insider Threat escalation simulation (future)
- Integration with Azure Sentinel (optional/future)

---

## 🚧 Roadmap
- [ ] Deploy UEBA model as Azure Function API
- [ ] Build Streamlit-based Admin Dashboard
- [ ] Add sample policies for ISO/NIST Insider Threat Program
- [ ] Connect real-time logs via Log Analytics Workspace
- [ ] Add GitHub Actions CI/CD for model updates

---

## 📚 Learning Objectives
- Learn how to build behavioral anomaly detection from logs
- Connect AI/ML with cybersecurity governance frameworks
- Understand real-world applications of Zero Trust & Insider Risk

---

## 📜 License
MIT License

---

## 🤝 Contributing
This is a solo student project but open to feedback, ideas, and use-case suggestions. If you'd like to contribute a case study or tool integration, feel free to fork and submit a pull request.

---

## 🧠 Author
**Jeffrey L. Collins** – Aspiring Cybersecurity Architect & GRC Consultant  
Eagle Defense Systems LLC  

---

## 🌐 Connect
- LinkedIn: [www.linkedin.com/in/securedbyjc]  
- GitHub: (https://github.com/securedbyjc/)
- Website: (https://eagledefensesys.com/)
