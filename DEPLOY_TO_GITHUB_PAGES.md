# Deploying Baseline Academy to GitHub Pages

This project is a React application built with Vite. To deploy it to GitHub Pages, follow these steps.

## Prerequisites

1.  A GitHub account.
2.  A new GitHub repository for this project.

## Step 1: Push Code to GitHub

1.  Initialize git (if not already done) and push your code to your new repository.

## Step 2: Configure for GitHub Pages

Since this is a single-page application (SPA), we need to handle routing and assets correctly.

### 2.1 Update `vite.config.ts` (Important!)

GitHub Pages usually serves your site from a subdirectory (e.g., `https://username.github.io/repo-name/`). You need to tell Vite about this base URL.

1.  Open `vite.config.ts`.
2.  Add the `base` property to the config object.

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'repo-name' with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/repo-name/', 
})
```

*If you are using a custom domain (e.g., `www.baselineacademy.com`), you can skip setting the `base` or set it to `'/'`.*

## Step 3: Build the Static Site

In the Replit Shell (or your local terminal), run:

```bash
npm run build
```

This will create a `dist` folder containing the static HTML, CSS, and JavaScript files.

## Step 4: Deploy

The easiest way to deploy is using the `gh-pages` package.

1.  Install the package:
    ```bash
    npm install gh-pages --save-dev
    ```

2.  Add a deploy script to `package.json`:
    ```json
    "scripts": {
      // ... other scripts
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

3.  Run the deploy command:
    ```bash
    npm run deploy
    ```

## Step 5: Configure GitHub Repo

1.  Go to your GitHub repository settings.
2.  Navigate to "Pages".
3.  Under "Build and deployment", select "Deploy from a branch".
4.  Select the `gh-pages` branch (this was created by the command above).
5.  Save.

Your site should be live in a few minutes!

## Using a Custom Domain

1.  Buy your domain (e.g., from Namecheap, GoDaddy).
2.  In your GitHub Repository > Settings > Pages > Custom domain, enter your domain name.
3.  GitHub will create a `CNAME` file in your repository.
4.  Update your DNS settings with your domain registrar as per GitHub's instructions (usually adding A records or a CNAME record).
5.  **Note:** DNS propagation can take 24-48 hours.

## Notes

- **Client-Side Routing:** GitHub Pages doesn't support SPA routing natively (refreshing a sub-page might give 404). To fix this, you can copy `index.html` to `404.html` in the `public` folder before building, or use a hash router.
- **Contact Form:** The contact form in this app uses a backend API which **will not work** on static GitHub Pages. You should replace the API call with a service like [Formspree](https://formspree.io/) or use a `mailto:` link for a purely static site.
