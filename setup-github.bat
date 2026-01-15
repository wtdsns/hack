@echo off
REM Groq Hackathon Landing Page - Quick Setup Script for Windows
REM This script helps you push your project to GitHub quickly

echo ========================================
echo Groq Hackathon Landing Page - GitHub Setup
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed.
    echo Please install Git from: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo [OK] Git is installed
git --version
echo.

REM Get GitHub username
set /p github_username="Enter your GitHub username: "

if "%github_username%"=="" (
    echo [ERROR] GitHub username is required!
    pause
    exit /b 1
)

REM Get repository name
set /p repo_name="Enter repository name [groq-hackathon-landing]: "
if "%repo_name%"=="" set repo_name=groq-hackathon-landing

echo.
echo Configuration:
echo    Username: %github_username%
echo    Repository: %repo_name%
echo.

set /p confirm="Continue? (y/n): "
if /i not "%confirm%"=="y" (
    echo [CANCELLED] Setup cancelled.
    pause
    exit /b 0
)

echo.
echo Setting up Git repository...

REM Initialize git if not already initialized
if not exist ".git" (
    git init
    echo [OK] Git repository initialized
) else (
    echo [OK] Git repository already exists
)

REM Create .gitignore if it doesn't exist
if not exist ".gitignore" (
    echo Creating .gitignore...
    (
        echo .DS_Store
        echo .vscode/
        echo .idea/
        echo *.log
        echo node_modules/
        echo .env
    ) > .gitignore
    echo [OK] .gitignore created
)

REM Stage all files
echo.
echo Staging files...
git add .

REM Commit
echo.
echo Creating initial commit...
git commit -m "Initial commit: Groq Hackathon Landing Page"

echo [OK] Initial commit created

REM Add remote
echo.
echo Adding remote repository...
git remote add origin "https://github.com/%github_username%/%repo_name%.git" 2>nul
if errorlevel 1 (
    git remote set-url origin "https://github.com/%github_username%/%repo_name%.git"
)

echo [OK] Remote added: https://github.com/%github_username%/%repo_name%.git

REM Rename branch to main
echo.
echo Setting default branch to 'main'...
git branch -M main
echo [OK] Branch renamed to main

REM Push to GitHub
echo.
echo Pushing to GitHub...
echo.
echo [WARNING] You'll need to authenticate with GitHub
echo    If you haven't created the repository yet:
echo    1. Go to: https://github.com/new
echo    2. Repository name: %repo_name%
echo    3. Choose Public/Private
echo    4. Don't initialize with README
echo    5. Click 'Create repository'
echo.
pause

git push -u origin main

if errorlevel 1 (
    echo.
    echo [ERROR] Push failed!
    echo.
    echo Manual steps:
    echo    1. Create repository at: https://github.com/new
    echo    2. Run: git push -u origin main
    echo.
    echo Common issues:
    echo    - Repository doesn't exist on GitHub yet
    echo    - Authentication failed (use personal access token)
    echo    - Check: https://docs.github.com/en/authentication
    echo.
) else (
    echo.
    echo [SUCCESS] Your project is now on GitHub!
    echo.
    echo Repository URL:
    echo    https://github.com/%github_username%/%repo_name%
    echo.
    echo To enable GitHub Pages:
    echo    1. Go to: https://github.com/%github_username%/%repo_name%/settings/pages
    echo    2. Source: Deploy from branch 'main' / folder 'root'
    echo    3. Click Save
    echo    4. Your site will be live at:
    echo       https://%github_username%.github.io/%repo_name%/
    echo.
    echo Next steps:
    echo    - Add repository description
    echo    - Add topics: hackathon, groq, ai, landing-page
    echo    - Update links in index.html with your URLs
    echo.
)

echo For more help, see GITHUB_SETUP_GUIDE.md
echo.
pause
