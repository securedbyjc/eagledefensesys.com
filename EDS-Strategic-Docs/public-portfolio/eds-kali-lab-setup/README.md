# 🛡️ EDS Kali Linux Lab – Installation and Lab Overview

This directory documents the setup, configuration, and baseline installation of the EDS Kali Linux Lab environment under Hyper-V.

## 📋 Lab Overview

- **Base OS:** Kali Linux 2025.1a (XFCE Desktop Environment)
- **Installation Method:** Full graphical installer (Secure Boot disabled)
- **Hyper-V Generation:** Gen 2 Virtual Machine
- **Initial Memory:** 4 GB
- **Processors:** 2 vCPUs
- **Disk Size:** 60 GB (virtual)

---

## 📸 Snapshot Strategy

Snapshots are captured immediately after:
- Baseline installation
- Full system updates

Snapshots enable rapid rollback, disaster recovery, and staging for future system hardening.

---

## 📂 Subdirectories

| Folder | Purpose |
|:---|:---|
| `snapshots/` | Contains Hyper-V checkpoint screenshots and logs for baseline and future changes. |
| `scripts/` | (Planned) Custom scripts for Kali lab post-setup tasks. |
| `docs/` | (Planned) Configuration notes and troubleshooting records. |

---

## ✍️ Notes

- Baseline installation checkpoint created on 2025-04-26.
- Full `apt update && apt upgrade` executed post-baseline checkpoint.
- XFCE lightweight desktop confirmed post-install.

---

> Maintained by **Eagle Defense Systems (EDS) Labs Team** 🦅
