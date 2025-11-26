# rafaelkallis.com

Personal portfolio and consulting website for Rafael Kallis.

🌐 **Live Site:** [https://rafaelkallis.com](https://rafaelkallis.com)

## About

This website serves as a professional portfolio showcasing my work as a software engineer and consultant specializing in financial technology, blockchain development, and data science. It highlights client projects, academic research, and professional experience.

## Tech Stack

- **HTML5** - Semantic markup
- **[Bulma CSS](https://bulma.io/)** - Modern CSS framework
- **Vanilla JavaScript** - Minimal JS for dynamic elements
- **Google Analytics** - Site analytics

## Project Structure

```
rafaelkallis.com/
├── public/
│   ├── images/          # Logos, covers, and visual assets
│   ├── index.html       # Main website file
│   ├── manifest.json    # Web app manifest
│   └── favicon.ico      # Site favicon
├── .devcontainer.json   # Development container configuration
├── .gitignore
├── static.json          # Legacy configuration file
└── README.md
```

## Development

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rafaelkallis/rafaelkallis.com.git
   cd rafaelkallis.com
   ```

2. **Serve locally:**
   
   Using Python:
   ```bash
   cd public
   python -m http.server 8000
   ```
   
   Or using Node.js:
   ```bash
   npx serve public
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### Using Dev Container

This project includes a dev container configuration for consistent development environments:

```bash
# Open in VS Code with Remote Containers extension
code .
# VS Code will prompt to reopen in container
```

## Deployment

The site is deployed using **Cloudflare Pages**, which automatically builds and deploys from the main branch. Cloudflare Pages serves the static content from the `public/` directory with global CDN distribution, automatic HTTPS, and edge caching.

---

*Website design inspired by [Jonny](https://jonny.io) and [Valentino](https://www.valentino.io).*
