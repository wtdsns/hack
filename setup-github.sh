#!/bin/bash

# Groq Hackathon Landing Page - Quick Setup Script
# This script helps you push your project to GitHub quickly

echo "🚀 Groq Hackathon Landing Page - GitHub Setup"
echo "=============================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null
then
    echo "❌ Git is not installed."
    echo "📥 Please install Git from: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed: $(git --version)"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required!"
    exit 1
fi

# Get repository name (default: groq-hackathon-landing)
read -p "Enter repository name [groq-hackathon-landing]: " repo_name
repo_name=${repo_name:-groq-hackathon-landing}

echo ""
echo "📋 Configuration:"
echo "   Username: $github_username"
echo "   Repository: $repo_name"
echo ""

# Confirm
read -p "Continue? (y/n): " confirm
if [ "$confirm" != "y" ]; then
    echo "❌ Setup cancelled."
    exit 0
fi

echo ""
echo "🔧 Setting up Git repository..."

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "Creating .gitignore..."
    cat > .gitignore << 'EOF'
.DS_Store
.vscode/
.idea/
*.log
node_modules/
.env
EOF
    echo "✅ .gitignore created"
fi

# Stage all files
echo ""
echo "📦 Staging files..."
git add .

# Commit
echo ""
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Groq Hackathon Landing Page

- Modern responsive design
- Complete hackathon information
- Developer resources and guides
- Challenge tracks and timeline
- Submission guidelines
- Community links"

echo "✅ Initial commit created"

# Add remote
echo ""
echo "🔗 Adding remote repository..."
git remote add origin "https://github.com/$github_username/$repo_name.git" 2>/dev/null || \
git remote set-url origin "https://github.com/$github_username/$repo_name.git"

echo "✅ Remote added: https://github.com/$github_username/$repo_name.git"

# Rename branch to main
echo ""
echo "🌿 Setting default branch to 'main'..."
git branch -M main
echo "✅ Branch renamed to main"

# Push to GitHub
echo ""
echo "⬆️  Pushing to GitHub..."
echo ""
echo "⚠️  You'll need to authenticate with GitHub"
echo "   If you haven't created the repository yet:"
echo "   1. Go to: https://github.com/new"
echo "   2. Repository name: $repo_name"
echo "   3. Choose Public/Private"
echo "   4. Don't initialize with README"
echo "   5. Click 'Create repository'"
echo ""
read -p "Press Enter when ready to push..."

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Your project is now on GitHub!"
    echo ""
    echo "📍 Repository URL:"
    echo "   https://github.com/$github_username/$repo_name"
    echo ""
    echo "🌐 To enable GitHub Pages:"
    echo "   1. Go to: https://github.com/$github_username/$repo_name/settings/pages"
    echo "   2. Source: Deploy from branch 'main' / folder 'root'"
    echo "   3. Click Save"
    echo "   4. Your site will be live at:"
    echo "      https://$github_username.github.io/$repo_name/"
    echo ""
    echo "✨ Next steps:"
    echo "   • Add repository description"
    echo "   • Add topics: hackathon, groq, ai, landing-page"
    echo "   • Update links in index.html with your URLs"
    echo ""
else
    echo ""
    echo "❌ Push failed!"
    echo ""
    echo "📝 Manual steps:"
    echo "   1. Create repository at: https://github.com/new"
    echo "   2. Run: git push -u origin main"
    echo ""
    echo "💡 Common issues:"
    echo "   • Repository doesn't exist on GitHub yet"
    echo "   • Authentication failed (use personal access token)"
    echo "   • Check: https://docs.github.com/en/authentication"
    echo ""
fi

echo "📚 For more help, see GITHUB_SETUP_GUIDE.md"
echo ""
