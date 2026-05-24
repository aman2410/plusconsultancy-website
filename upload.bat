@echo off
echo ===================================================
echo   Uploading Plus Consultancy Website to GitHub...
echo ===================================================
echo.

:: Initialize git repository if not already done
if not exist .git (
    echo Initializing git...
    git init
    git remote add origin https://github.com/aman2410/plusconsultancy-website.git
    git branch -M main
) else (
    echo Git repository already initialized. Checking remote configuration...
    git remote remove origin >nul 2>&1
    git remote add origin https://github.com/aman2410/plusconsultancy-website.git
    git branch -M main
)

echo.
echo Adding files to commit (ignoring node_modules and builds)...
git add .

echo.
echo Creating commit...
git commit -m "feat: Upload complete project source and assets"

echo.
echo Pushing to GitHub (aman2410/plusconsultancy-website)...
echo (A browser window may open to ask you to authenticate/log in to GitHub)
git push -u origin main --force

echo.
echo ===================================================
echo   Upload completed! Check your GitHub repository.
echo ===================================================
echo.
pause
