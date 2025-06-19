#!/bin/bash

# system_update.sh - Update system and log output

LOG_FILE="/var/log/eds_system_update.log"

echo "📦 Updating system..."
sudo apt update && sudo apt upgrade -y | tee -a "$LOG_FILE"

echo "✅ System update complete."
echo "📘 Log saved to: $LOG_FILE"
