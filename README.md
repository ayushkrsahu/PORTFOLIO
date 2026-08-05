# ayushkusahu.in — Portfolio

Personal portfolio site for **Ayush Kumar Sahu**, Data Engineer.

Static HTML/CSS/JS. No framework, no build step, no dependencies — open `index.html`
in a browser and it works.

## Structure

```
index.html              # the whole page
assets/css/styles.css   # hand-rolled CSS, light + dark themes
assets/js/main.js       # theme toggle, scroll-spy, reveal, hero canvas
assets/files/           # downloadable CV
assets/favicon.svg
CNAME                   # ayushkusahu.in
.nojekyll               # serve assets/ verbatim on GitHub Pages
robots.txt, sitemap.xml
```

## Local preview

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploying to GitHub Pages

1. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
2. Settings → Pages → Custom domain: `ayushkusahu.in`, then tick **Enforce HTTPS**
   once the certificate is issued (can take up to an hour).
3. At the GoDaddy DNS panel:

   | Type  | Name  | Value |
   |-------|-------|-------|
   | A     | `@`   | `185.199.108.153` |
   | A     | `@`   | `185.199.109.153` |
   | A     | `@`   | `185.199.110.153` |
   | A     | `@`   | `185.199.111.153` |
   | CNAME | `www` | `ayushkrsahu.github.io` |

   Remove any GoDaddy parking/forwarding records for `@` first, or they will
   shadow the A records.

## Editing content

Everything is inline in `index.html` under commented section markers
(`<!-- ── Experience ── -->` and so on). Content is plain HTML — no templating.
