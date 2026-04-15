# Science League Competition

Bare **Vite + Tailwind CSS** starter for a simple HTML/CSS website.

## Stack

- Vite (vanilla)
- Tailwind CSS v4

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Notes

- `preview.fschr.me` is allowed in `vite.config.js`
- dev server is intended to run on port `5173`
- main page markup lives in `index.html`
- Tailwind entry is `src/style.css`
- GitHub Actions automatically builds `dist/` on pushes to `main` and commits the built output back into the repo
- This means other machines can `git pull` the ready-built static files without needing npm installed
