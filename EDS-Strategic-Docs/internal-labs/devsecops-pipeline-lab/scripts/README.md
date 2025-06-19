# 🔹 EDS DevSecOps Pipeline Lab — Scripts Documentation

This directory stores helper shell scripts developed to support the automation of setup tasks, configuration processes, maintenance, and operational checks within the DevSecOps Pipeline Lab.

Scripts enable reproducibility, rapid setup, and reduce human error during deployments.

---

## 🔢 Planned Scripts

| Script Filename | Description |
|:---|:---|
| `jenkins-setup.sh` | Automates Jenkins installation and plugin setup |
| `docker-cleanup.sh` | Prunes unused Docker containers, images, and volumes |
| `gitlab-runner-register.sh` | Registers a GitLab runner automatically |
| `sonarqube-init.sh` | Prepares SonarQube server and imports quality profiles |

---

## 🔹 Script Guidelines

- Save scripts using `.sh` file extensions.
- Include shebang line `#!/bin/bash` at the top of each script.
- Comment scripts clearly to explain each major step.
- Test scripts thoroughly in isolated lab environments before use.

---

## 🔒 Internal Use Only

Scripts are intended for internal automation only and must be security-audited before being reused in external environments.

Use scripts responsibly to avoid unintended infrastructure changes.

---

> **Maintained by Eagle Defense Systems (EDS) Labs Team**
