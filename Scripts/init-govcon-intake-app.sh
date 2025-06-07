#!/bin/bash

# Usage: ./init-govcon-intake-app.sh /full/path/to/project

if [ -z "$1" ]; then
  echo "❌ Usage: $0 /path/to/your-project-folder"
  exit 1
fi

PROJECT_PATH="$1"
PROJECT_NAME=$(basename "$PROJECT_PATH")

# Navigate to the project directory
cd "$PROJECT_PATH" || { echo "❌ Directory not found: $PROJECT_PATH"; exit 1; }

# Initialize Git
echo "🌀 Initializing Git for $PROJECT_NAME..."
git init

# Add files
echo "➕ Adding files..."
git add .

# Commit
echo "📦 Making initial commit..."
git commit -m "Initial commit: Scaffolded $PROJECT_NAME"

# Optional: Prompt to add remote
read -p "Do you want to add a GitHub remote now? (y/N): " answer

if [[ "$answer" =~ ^[Yy]$ ]]; then
  read -p "Enter the GitHub remote URL (e.g., git@github.com:user/repo.git): " remote_url
  git remote add origin "$remote_url"
  git branch -M main
  git push -u origin main
  echo "✅ Code pushed to GitHub."
else
  echo "📝 Remote not added. You can add it later using:"
  echo "  git remote add origin <your-repo-url>"
  echo "  git push -u origin main"
fi
