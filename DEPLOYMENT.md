# GitHub Pages Deployment Guide

This guide will help you deploy your iOS portfolio to GitHub Pages.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `ios-portfolio` (or your preferred name)
3. **Don't** initialize it with a README, .gitignore, or license (we already have these)

## Step 2: Initialize Git and Push to GitHub

Run these commands in your terminal:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: iOS Portfolio"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ios-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

## Step 4: Deploy

The GitHub Actions workflow will automatically deploy your site when you push to the `main` branch.

1. After pushing, go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your site will be available at:
   ```
   https://YOUR_USERNAME.github.io/ios-portfolio/
   ```

## Important: Update Base Path

If your repository name is different from `ios-portfolio`, update the `base` path in `vite.config.js`:

```javascript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

If you want to deploy to `username.github.io` (root URL), create a repository named `username.github.io` and set:

```javascript
base: '/',
```

## Future Updates

Every time you push changes to the `main` branch, GitHub Actions will automatically rebuild and deploy your site.

## Troubleshooting

- **404 errors**: Make sure the `base` path in `vite.config.js` matches your repository name
- **Build fails**: Check the Actions tab for error messages
- **Site not updating**: Wait a few minutes and refresh, or check the Actions tab for deployment status
