# Dropbox Data Engineering Interview Gym

This is a static LeetCode-style practice site for Dropbox Data Engineering prep.

## What is included

- `index.html` - the app shell
- `style.css` - styling
- `app.js` - progress tracking, filtering, runners
- `problems.js` - question bank (145 questions)

## Running locally

Open `index.html` in a browser. For runnable SQL/Python tests, the browser needs internet access to load:

- sql.js from cdnjs
- Pyodide from jsDelivr

Progress and notes are stored in browser localStorage.

## Hosting

### Netlify
1. Drag the `dropbox_de_prep_site` folder into Netlify's deploy UI.
2. Netlify will host it as a static site.

### Vercel
1. Create a new project.
2. Upload this folder or push it to GitHub.
3. Choose static/no framework.

### GitHub Pages
1. Create a repository.
2. Commit these files to the root.
3. Enable Pages for the main branch.

## Extending to more companies

Add new objects to `problems.js` with a different company/category tag. The current app is intentionally company-neutral in code, so it can host Dropbox now and add Meta, Airbnb, Stripe, etc. later.


## IDE-style editor upgrade
This version uses CodeMirror in the browser for line numbers, SQL/Python syntax highlighting, bracket matching, tab indentation, Ctrl/Cmd+Enter to run tests, and a Format / indent button. It still runs entirely as static hosting on GitHub Pages/Netlify/Cloudflare Pages.
