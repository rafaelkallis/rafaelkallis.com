# rafaelkallis.com

Personal website for Rafael Kallis, hosted on GitHub Pages.

## Deployment

This repository is configured to automatically deploy to GitHub Pages at [rafaelkallis.github.io](https://rafaelkallis.github.io).

### How it works

The website is deployed using GitHub Actions:
- The workflow (`.github/workflows/deploy.yml`) triggers on every push to the `main` branch
- It deploys the contents of the `public` folder to GitHub Pages
- The site becomes available at https://rafaelkallis.github.io

### Setup

After the first deployment, ensure that:
1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**

### Manual Deployment

You can manually trigger a deployment by:
1. Going to the **Actions** tab
2. Selecting the "Deploy to GitHub Pages" workflow
3. Clicking "Run workflow"

## Local Development

The website is a static HTML site. To view it locally:
1. Open `public/index.html` in your browser, or
2. Use any static file server, e.g., `python -m http.server 8000` from the `public` directory
