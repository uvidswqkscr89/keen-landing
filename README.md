# Keen Landing Page

Landing page and waitlist signup flow for **Keen** — AI note-taking app.

## Stack
- **HTML/CSS/JS** — Vanilla (no framework)
- **Hosting** — Netlify (via `netlify.toml`)
- **Serverless** — Netlify Functions for waitlist form

## Deploy
1. Push this repo to Netlify via Git
2. Set build command: none (static site)
3. Set publish directory: `.`
4. Set functions directory: `netlify/functions`
5. Configure custom domain: `keen.so`
6. Enable automatic HTTPS

## Brand
- Colors: Indigo `#3730A3`, Coral `#F43F5E`
- Font: DM Sans (Google Fonts)
- Logo: Keen Diamond (tilted ~15deg)

## File Structure
- `index.html` — Landing page
- `assets/css/styles.css` — Styles
- `assets/js/main.js` — Form validation + submission
- `assets/img/favicon.svg` — Favicon
- `netlify/functions/waitlist.js` — Form handler
- `netlify.toml` — Deploy config