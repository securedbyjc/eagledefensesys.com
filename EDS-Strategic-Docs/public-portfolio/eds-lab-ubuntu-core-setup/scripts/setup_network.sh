#!/bin/bash

# setup_network.sh - Configure static IP for eth0 using Netplan

CONFIG_FILE="/etc/netplan/00-installer-config.yaml"
BACKUP_FILE="/etc/netplan/00-installer-config.yaml.bak"

# Static IP Details
IP_ADDR="192.168.1.120/24"
GATEWAY="192.168.1.254"
DNS1="8.8.8.8"
DNS2="1.1.1.1"

echo "🔧 Setting up static IP..."

# Backup current config
if [ -f "$CONFIG_FILE" ]; then
    sudo cp "$CONFIG_FILE" "$BACKUP_FILE"
    echo "✅ Backed up existing config to $BACKUP_FILE"
fi

# Write new config
sudo tee "$CONFIG_FILE" > /dev/null <<EOF
network:
  version: 2
  ethernets:
    eth0:
      addresses:
        - $IP_ADDR
      routes:
        - to: 0.0.0.0/0
          via: $GATEWAY
      nameservers:
        addresses:
          - $DNS1
          - $DNS2
EOF

# Apply changes
sudo netplan generate && sudo netplan apply
echo "✅ Static network configuration applied."

# Show result
ip a | grep eth0
ip route | grep default
