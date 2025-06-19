# Parrot Lab Setup

## Overview
Welcome to the EDS Parrot Lab!  
This lab environment is designed to support [brief purpose: e.g., cybersecurity testing, penetration testing, compliance simulations].  
Built on [Ubuntu Server/Kali Linux/Parrot OS] and running on Hyper-V virtualization, this lab provides a modular platform for cybersecurity research, training, and tool development.

---

## 🏗️ Architecture Diagram

```plaintext
+-------------------+
|    Hyper-V Host   |
|-------------------|
|                   |
| +---------------+ |
| |  Ubuntu Core  | |  (EDS Core Server)
| +---------------+ |
| +---------------+ |
| |  Kali VM      | |  (Penetration Testing)
| +---------------+ |
| +---------------+ |
| |  Parrot VM    | |  (Advanced Red Teaming)
| +---------------+ |
|                   |
+-------------------+
