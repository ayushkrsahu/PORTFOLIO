# ayushkusahu.in — Portfolio

Personal portfolio for **Ayush Kumar Sahu** — Agentic AI Systems Engineer & Enterprise
Data Architect. React + Vite + Tailwind, built to fully static files and served from
GitHub Pages.

## Layout

```
index.html      # built site — this is what GitHub Pages serves
assets/         # built CSS + JS bundles
favicon.svg
CNAME           # ayushkusahu.in
.nojekyll       # serve assets/ verbatim (no Jekyll processing)
app/            # the React source project
```

The repository root holds the **build output**. The source lives in `app/`.
Editing the source alone does not change the live site — you have to rebuild
and copy the output to the root (see below).

## Working on it

```bash
cd app
npm install
npm run dev          # http://localhost:3000
```

Content (profile, experience, projects, skills, certifications, dashboards) is all in
`app/src/data/portfolioData.ts` — edit there rather than in the components.

## Publishing a change

```bash
cd app
npm run build                 # → app/dist
cp -r dist/. ..               # copy build output to the repo root
cd .. && git add -A && git commit -m "Rebuild site" && git push origin main
```

GitHub Pages redeploys automatically within a minute or two of the push.

## GitHub Pages settings

- **Settings → Pages → Source:** Deploy from a branch — `main`, folder `/ (root)`
- **Settings → Pages → Custom domain:** `ayushkusahu.in`, then tick **Enforce HTTPS**
  once the certificate is issued (can take up to an hour)

## DNS (GoDaddy)

| Type  | Name  | Value             |
|-------|-------|-------------------|
| A     | `@`   | `185.199.108.153` |
| A     | `@`   | `185.199.109.153` |
| A     | `@`   | `185.199.110.153` |
| A     | `@`   | `185.199.111.153` |
| CNAME | `www` | `ayushkrsahu.github.io` |

Delete any GoDaddy parking or forwarding records for `@` first — they shadow the
A records and the domain will never resolve to Pages.
