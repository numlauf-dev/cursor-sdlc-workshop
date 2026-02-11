# Step 1 move this file to your desktop and run the following command:
# Step 2 open terminal (either in cursor or cmd + space and type terminal)
# Step 3 paste the following command and press enter: cd ~/Desktop && bash setup-cursor-agent.sh

#!/bin/bash
set -e

echo "🚀 Cursor Agent - Complete Setup"
echo "================================="

# 1. Install Homebrew if not present
if ! command -v brew &>/dev/null; then
  echo "📦 Installing Homebrew..."
  echo ""
  echo "\033[1;31m⬇️  IF ASKED, TYPE YOUR PASSWORD BELOW (it won't show as you type — that's normal, just type and press Enter)\033[0m"
  echo ""
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # Add brew to PATH for this session (macOS Apple Silicon vs Intel)
  if [[ -f /opt/homebrew/bin/brew ]]; then
    eval "$(/opt/homebrew/bin/brew shellenv)"
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
  elif [[ -f /usr/local/bin/brew ]]; then
    eval "$(/usr/local/bin/brew shellenv)"
  fi
else
  echo "✅ Homebrew already installed"
fi

# 2. Install Git if not present
if ! command -v git &>/dev/null; then
  echo "📦 Installing Git..."
  brew install git
else
  echo "✅ Git already installed"
fi

# 3. Install GitHub CLI (gh) if not present
if ! command -v gh &>/dev/null; then
  echo "📦 Installing GitHub CLI (gh)..."
  brew install gh
else
  echo "✅ GitHub CLI (gh) already installed"
fi

# 4. Install Node.js (includes npm) if not present
if ! command -v node &>/dev/null; then
  echo "📦 Installing Node.js..."
  brew install node
else
  echo "✅ Node.js already installed ($(node -v))"
fi

# 5. Install Cursor CLI
echo "📦 Installing Cursor CLI..."
curl -sSf https://cursor.com/install | bash

# 6. Ensure ~/.local/bin is in PATH
grep -q '.local/bin' ~/.zshrc 2>/dev/null || echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
export PATH="$HOME/.local/bin:$PATH"

echo ""
echo "✅ Setup complete!"
echo "   Run 'source ~/.zshrc' or open a new terminal, then run: agent"
