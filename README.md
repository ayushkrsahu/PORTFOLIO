# Ayush Kumar Sahu — Portfolio

Data Engineer portfolio site built with React + Vite and deployed to GitHub Pages.

## Quick Start

### Local Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

### Build for Production
```bash
npm run build
# → static files in dist/
```

## Deployment to GitHub Pages

1. Build the project: `npm run build`
2. Copy `dist/` contents to repo root
3. Ensure CNAME is set to your domain
4. Push to GitHub

GitHub Pages will automatically serve the static files at `ayushkusahu.in`.

## Settings

- **GitHub Pages**: Deploy from `main` branch, folder `/ (root)`
- **Custom Domain**: `ayushkusahu.in`
- **.nojekyll**: Present to serve all assets verbatim

## DNS Configuration (GoDaddy)

| Type  | Name  | Value |
|-------|-------|-------|
| A     | `@`   | `185.199.108.153` |
| A     | `@`   | `185.199.109.153` |
| A     | `@`   | `185.199.110.153` |
| A     | `@`   | `185.199.111.153` |
| CNAME | `www` | `ayushkrsahu.github.io` |

Remove any GoDaddy parking/forwarding records first.
