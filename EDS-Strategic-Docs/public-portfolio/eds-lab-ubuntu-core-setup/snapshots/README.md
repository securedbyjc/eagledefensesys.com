# 📸 EDS Lab - Snapshot and Checkpoint Log

This directory contains important system snapshots and Hyper-V checkpoints taken during major setup milestones of the Eagle Defense Systems (EDS) internal cybersecurity lab environments.

Snapshot tracking ensures forensic visibility of system states, supports recovery planning, and maintains configuration integrity.

---

| Snapshot Title                               | Date Created    | Filename                                              | Notes                                          |
|:---------------------------------------------|:----------------|:------------------------------------------------------|:-----------------------------------------------|
| EDS-Ubuntu-Server-Initial-BaseInstall-Ap24    | 2025-04-24       | eds-ubuntu-server-2025-initial-baseinstall-checkpoint.png | Initial Ubuntu Server 24.04.2 installation and network configuration checkpoint. |


---

## 🛠️ Snapshot Management Guidelines

- 📌 **Naming Convention:** `[System]-[Purpose]-[Timestamp if needed]`
- 📸 **Screenshots:** Save clear screenshots after major milestones (network, updates, new installs).
- 🕓 **Checkpoints:** Create Hyper-V checkpoints before any system-critical operation or major update.
- 🗂️ **File Placement:** All images and logs must be saved inside this `snapshots/` folder.
- 🛡️ **Retention:** Keep at least the last two "clean install" states and last stable configuration state.
- 🛠️ **Optional:** Replace or update missing screenshots when convenient, but do not slow down operational progress.

---

## 📋 Example Future Snapshots to Capture

- Post-Parrot OS installation checkpoint
- Network bridge troubleshooting (if needed)
- DevSecOps tooling installs (Docker, Jenkins, etc.)
- CTF/pen-testing environment setups

---
## 📜 Special Notes

- ⚡ Live troubleshooting and CLI-based network configuration were successfully performed.
- 📸 Screenshots were **not captured** during the live troubleshooting sessions.
- 🛠️ CLI commands (`ip a`, `ping`, `netplan apply`) validated successful network setup.
- 📦 Static IP, default gateway, and SSH services operational post-configuration.
- 🛡️ Future snapshots and visual logs will be captured systematically moving forward.

---

> Maintained by **Eagle Defense Systems (EDS) Labs Team**