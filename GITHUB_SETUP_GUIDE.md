# 🚀 Quick Setup Guide for GitHub

This guide will help you push this project to GitHub in just a few minutes!

## 📋 Prerequisites

Before you start, make sure you have:
- ✅ A GitHub account ([Sign up here](https://github.com/join) if you don't have one)
- ✅ Git installed on your computer ([Download Git](https://git-scm.com/downloads))

Check if Git is installed:
```bash
git --version
```

## 🎯 Method 1: Using GitHub Desktop (Easiest)

### Step 1: Download Files
1. Download all project files to a folder on your computer
2. Keep the folder structure intact

### Step 2: Install GitHub Desktop
- Download from [desktop.github.com](https://desktop.github.com)
- Install and sign in with your GitHub account

### Step 3: Create Repository
1. Click "Add" → "Add Existing Repository"
2. Choose your project folder
3. Click "Create Repository"
4. Name it: `groq-hackathon-landing`
5. Add description: "Landing page for Groq Real-time AI Agent Hackathon"
6. Click "Create Repository"

### Step 4: Publish
1. Click "Publish repository"
2. Uncheck "Keep this code private" if you want it public
3. Click "Publish repository"

✅ **Done!** Your project is now on GitHub!

---

## 🎯 Method 2: Using Command Line (Recommended for Developers)

### Step 1: Prepare the Project

1. **Download/Copy all files** to a new folder:
```bash
mkdir groq-hackathon-landing
cd groq-hackathon-landing
```

2. **Rename README** (optional):
```bash
# If you want to use the GitHub-optimized README
mv README_GITHUB.md README.md
```

### Step 2: Initialize Git Repository

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Groq Hackathon Landing Page"
```

### Step 3: Create Repository on GitHub

**Option A: Using GitHub CLI (Easiest)**
```bash
# Install GitHub CLI first: https://cli.github.com
gh auth login
gh repo create groq-hackathon-landing --public --source=. --remote=origin --push
```

**Option B: Using GitHub Website**
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `groq-hackathon-landing`
3. Description: "Landing page for Groq Real-time AI Agent Hackathon"
4. Choose Public or Private
5. **Don't** initialize with README, .gitignore, or license (we already have them)
6. Click "Create repository"

### Step 4: Connect and Push

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/groq-hackathon-landing.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

✅ **Done!** Your code is now on GitHub!

---

## 🎯 Method 3: Using GitHub Web Interface (No Git Required)

### Step 1: Create New Repository
1. Go to [github.com/new](https://github.com/new)
2. Name: `groq-hackathon-landing`
3. Description: "Landing page for Groq Real-time AI Agent Hackathon"
4. Choose Public
5. Click "Create repository"

### Step 2: Upload Files
1. On the new repository page, click "uploading an existing file"
2. Drag and drop all your project files
3. Or click "choose your files" and select all files
4. Commit message: "Initial commit"
5. Click "Commit changes"

✅ **Done!** Files uploaded to GitHub!

---

## 🌐 Deploy to GitHub Pages

Once your code is on GitHub:

### Step 1: Enable GitHub Pages
1. Go to your repository
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/` (root)
5. Click **Save**

### Step 2: Wait for Deployment
- GitHub will take 1-2 minutes to deploy
- You'll see a green checkmark when ready

### Step 3: Get Your Live URL
Your site will be available at:
```
https://YOUR_USERNAME.github.io/groq-hackathon-landing/
```

---

## 📝 Quick Commands Reference

### Daily Workflow

```bash
# Check status
git status

# Add new/modified files
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes (if working with others)
git pull
```

### Common Tasks

```bash
# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD
```

---

## 🔧 Troubleshooting

### Problem: "Permission denied"
**Solution:** 
```bash
# Use personal access token instead of password
# Generate one at: https://github.com/settings/tokens
```

### Problem: "Remote already exists"
**Solution:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/groq-hackathon-landing.git
```

### Problem: "Failed to push"
**Solution:**
```bash
# Pull first, then push
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Problem: "Large files"
**Solution:** GitHub has a 100MB file limit. Remove large files:
```bash
# Find large files
find . -size +50M

# Remove from git
git rm --cached large-file.ext
```

---

## 📚 Additional Resources

### Learn Git & GitHub
- [GitHub Guides](https://guides.github.com)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Learning Lab](https://lab.github.com)

### Video Tutorials
- [Git & GitHub for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk)
- [GitHub Pages Tutorial](https://www.youtube.com/watch?v=2MsN8gpT6jY)

### Documentation
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)

---

## 🎉 Next Steps After Pushing

1. **Add Repository Description**
   - Go to your repo on GitHub
   - Click the ⚙️ gear icon
   - Add description and website URL

2. **Add Topics**
   - Click "Add topics"
   - Suggested: `hackathon`, `groq`, `ai`, `landing-page`, `multi-agent`, `mcp`

3. **Create a Nice README Badge**
   - Add badges for license, stars, etc.
   - Use [shields.io](https://shields.io)

4. **Set Up GitHub Actions** (Optional)
   - Automate deployments
   - Run tests on push

5. **Invite Collaborators** (If needed)
   - Settings → Collaborators
   - Add team members

---

## ✅ Checklist

Before pushing to GitHub, make sure:

- [ ] All files are in the project folder
- [ ] `.gitignore` is configured
- [ ] `LICENSE` file is included
- [ ] `README.md` is complete
- [ ] No sensitive information (API keys, passwords) in code
- [ ] Large files removed or added to `.gitignore`
- [ ] Links updated with your information
- [ ] Test the site locally first

---

## 🆘 Need Help?

If you get stuck:

1. **GitHub Support:** [support.github.com](https://support.github.com)
2. **Stack Overflow:** Search for your error message
3. **GitHub Community:** [github.community](https://github.community)

---

<div align="center">

**Ready to share your amazing landing page with the world!** 🚀

Good luck with the hackathon! ⚡

</div>
