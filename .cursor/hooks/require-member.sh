#!/bin/bash
# Hook: require-member
# Blocks git commits that include changes to linkedout/ if the user
# hasn't added their member file to any linkedout team's members/ folder.
# Changes outside of linkedout/ are always allowed.

# Read stdin (required by hooks protocol)
cat > /dev/null

PROJECT_DIR="${CURSOR_PROJECT_DIR:-$(pwd)}"

# Exceptions list — these users bypass the check
EXCEPTIONS="rperry2174"

# Get the user's GitHub username
USERNAME=$(gh api user --jq .login 2>/dev/null)

# Check if user is in exceptions list
for EXCEPTION in $EXCEPTIONS; do
  if [ "$USERNAME" = "$EXCEPTION" ]; then
    echo '{"permission":"allow"}'
    exit 0
  fi
done

# Check if any staged files are inside linkedout/
LINKEDOUT_CHANGES=$(cd "$PROJECT_DIR" && git diff --cached --name-only 2>/dev/null | grep "^linkedout/" || true)

if [ -z "$LINKEDOUT_CHANGES" ]; then
  # No linkedout changes — allow the commit
  echo '{"permission":"allow"}'
  exit 0
fi

# There are linkedout changes — now check for member file

if [ -z "$USERNAME" ]; then
  # gh not authenticated — block and explain
  echo '{"permission":"deny","user_message":"⛔ You need to authenticate with GitHub first. Run: gh auth login","agent_message":"The user needs to run gh auth login before they can commit changes to linkedout/."}'
  exit 2
fi

# Check if their member file exists in any linkedout team folder
FOUND=false
for TEAM_DIR in "$PROJECT_DIR"/linkedout/team_*/members/; do
  if [ -f "${TEAM_DIR}${USERNAME}.md" ]; then
    FOUND=true
    break
  fi
done

if [ "$FOUND" = true ]; then
  echo '{"permission":"allow"}'
  exit 0
else
  echo "{\"permission\":\"deny\",\"user_message\":\"⛔ You need to join a team first! Add your member file to linkedout/team_X/members/${USERNAME}.md before committing any code to linkedout/. If you think this is an error, message Ryan Perry.\",\"agent_message\":\"The user (${USERNAME}) has not added their member file to any linkedout team. They need to create linkedout/team_X/members/${USERNAME}.md first. Tell them to pick a team and add their file.\"}"
  exit 2
fi
