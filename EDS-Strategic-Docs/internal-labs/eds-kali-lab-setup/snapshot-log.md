🖼️ Snapshot Log — EDS Kali 2025 Lab
Lab Environment: EDS-KALI-2025-LAB
Virtualization: Hyper-V
Primary OS: Kali Linux 2025.1a (Xfce Desktop)

📆 Snapshot Tracking Table

#	Date	VM Name	Purpose	Notes
1	2025-04-26	EDS-KALI-2025-Initial-BaseInstall	Post-base OS install	After first full Kali 2025.1a installation, XFCE Desktop selected, default tools only

🌟 Notable Changes - Snapshot #1

Changes Made:

Installed Kali Linux 2025.1a using XFCE desktop environment (lightweight setup).

Selected "default tools" installation for minimum bloat.

Updated system post-install using:

sudo apt update && sudo apt upgrade -y
sudo apt autoremove -y && sudo apt autoclean

Known Issues:

None at this stage.

Rollback Instruction:

Revert to "EDS-KALI-2025-Initial-BaseInstall" if future updates/tools cause system instability.

📜 General Notes:

Secure Boot was disabled in Hyper-V to allow installation.

Snapshot captured immediately after successful base install and first full system update.

Ready to proceed with network, tooling, and testing configuration.

