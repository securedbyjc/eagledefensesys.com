# 🛡️ EDS Cybersecurity Lab Core Setup
<p align="left">
  <img src="https://img.shields.io/badge/Ubuntu-22.04%20LTS-orange?logo=ubuntu" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
  <img src="https://img.shields.io/badge/status-in--progress-yellow" />
</p>

This repository contains the foundational scripts and configurations used to build and maintain the **Eagle Defense Systems (EDS) internal cybersecurity lab**. The lab environment runs on Ubuntu Server and supports virtualization-based testing, secure configuration automation, and Red/Blue Team analysis training environments.

## 🔧 Purpose
This lab serves as the baseline OS environment for:
- Network simulation and penetration testing (Kali, Parrot)
- Host hardening and compliance checks (CIS Benchmark, STIG, etc.)
- GRC tool development and testing
- Defensive engineering, logging, and threat detection exercises

## 📂 Project Structure

`EDS-CYBERSECURITY-LAB-CORE/`<br>
├── `scripts/` &nbsp;&nbsp;&nbsp;&nbsp;# Shell automation for provisioning <br>
│ ├── `setup_network.sh` &nbsp;&nbsp;&nbsp;&nbsp;# Netplan static IP configuration <br>
│ └── `system_update.sh` &nbsp;&nbsp;&nbsp;&nbsp;# Package updates & security patches <br>
├── `netplan/` &nbsp;&nbsp;&nbsp;&nbsp;# YAML snapshots of system network settings <br>
├── `snapshots/` &nbsp;&nbsp;&nbsp;&nbsp;# VM snapshot notes (manual or automated) <br>
├── `docs/` &nbsp;&nbsp;&nbsp;&nbsp;# Architecture, diagrams, future additions <br>
├── `logs/` &nbsp;&nbsp;&nbsp;&nbsp;# Runtime logs for troubleshooting <br>
├── `.gitignore` <br>
├── `LICENSE` <br>
└── `README.md`

## 🚀 Getting Started

> 🛑 **Warning**: These scripts are intended for isolated lab environments only. Do not run on production systems.

```bash
chmod +x scripts/*.sh
sudo ./scripts/setup_network.sh
sudo ./scripts/system_update.sh

## 📦 Tech Stack

- Ubuntu Server 24.04.2 LTS
- Hyper-V (Windows 11)
- Netplan for static IP config
- OpenSSH Server
- Static bridging with Realtek GbE

## ✅ Setup Highlights

- Manual IP assignment with proper gateway and DNS resolution
- Bridging with external switch to avoid Wi-Fi limitations
- OpenSSH setup and verification
- Network troubleshooting (route conflicts, eth0 down state, adapter rebinding)

🔮 Coming Soon
 Kali Linux and Parrot OS deployment scripts

 Weekly snapshot automation

 IDS/IPS integration (Suricata)

 GRC tool sandboxing (LexSentinel, UEBA, CMF)

## 🧠 Lessons Learned

> YAML spacing matters. Bridging Wi-Fi in Hyper-V is pain. `eth0` is both your friend and your enemy.

---

*“Secure by configuration, scalable by design.” — Eagle Defense Systems*
