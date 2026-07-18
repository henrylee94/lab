# Henry Lee — The Lab

[![Live](https://img.shields.io/badge/live-henrylee94.github.io%2Flab-4de3ff?style=flat)](https://henrylee94.github.io/lab/)
[![Made with Three.js](https://img.shields.io/badge/three.js-r161-000?style=flat&logo=three.js)](https://threejs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-f0a63c?style=flat)](LICENSE)
![No build step](<https://img.shields.io/badge/build-none%20(static)-26d07c?style=flat>)

> Interactive things I build when nobody's paying me to.

**The Lab** is the experience side of my portfolio — the companion to the main,
scannable site at **[henrylee94.github.io/portfolio](https://henrylee94.github.io/portfolio/)**.
Boot a 3D home lab, poke around a live terminal, run a live scalping desk. Every
piece is real, self-contained, and runs entirely in your browser.

**▶ Live: https://henrylee94.github.io/lab/**

---

## What's inside

| Showcase                                   | What it is                                                                                                                                                                                                                                                       | Tech                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **henry.home** (`index.html`)              | Boot a 3D UM890 mini-PC — it projects a holographic terminal you can actually type in (`help`, `memory`, `mnemosyne`, `backtest`, `gaps`, `rules`, `ai`, …). It surfaces my real home lab: a self-hosted agent, a six-layer memory stack, a tiered model router. | Three.js + UnrealBloom, CanvasTexture terminal, Web Audio |
| **scalp-analyzer** (`showcase-scalp.html`) | A live US-stock scalping desk: animated candles, EMA / VWAP / RSI, a confluence checklist and a 0–10 safety score. Type `check NVDA` for the entry / target / stop card.                                                                                         | 2D Canvas, custom indicators                              |
| **the grid** (`lab.html`)                  | A visual gallery of every showcase — the fallback for non-typers and mobile.                                                                                                                                                                                     | Canvas thumbnails                                         |

## Highlights

- **Zero backend, zero build.** Pure static HTML/CSS/JS. Deploys to any static host.
- **Real content, honestly told.** The home lab data (73 skills, 3,474 memories,
  the "local models lost" postmortem, the known-gaps list) is real — no filler.
- **Works for everyone.** Tappable command chips for mobile / non-typers; keyboard
  power-users get Tab-completion and command history.
- **Reduced-motion & CDN-failure aware.** Degrades gracefully.

## Tech stack

- **3D:** [Three.js](https://threejs.org) r161 + EffectComposer / UnrealBloomPass
- **2D:** Canvas 2D (candles, indicators, live thumbnails)
- **Audio:** Web Audio API (synthesized boot chime, no assets)
- **Hosting:** GitHub Pages (static)
- Libraries loaded from jsDelivr CDN — no bundler, no `node_modules`.

## Project structure

```
.
├── index.html            # henry.home — the 3D boot + terminal (the landing)
├── showcase-scalp.html   # scalp-analyzer — the live trading desk
├── lab.html              # the visual grid of showcases
├── 404.html              # custom GitHub Pages 404
├── favicon.svg
├── robots.txt · sitemap.xml
├── scripts/check.mjs     # inline-script syntax + local-link checker (CI runs it)
├── .github/              # CI workflow, issue + PR templates
├── README.md · CHANGELOG.md · LICENSE
├── SKILL.md · AGENTS.md  # project guides for AI coding agents
├── CONTRIBUTING.md · CODE_OF_CONDUCT.md · SECURITY.md
├── .editorconfig · package.json
└── .nojekyll             # tell GitHub Pages to serve files as-is
```

## Run locally

No build required — just serve the folder over HTTP (needed for ES modules):

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the printed URL. (Opening `index.html` via `file://` won't work — ES
module imports need `http://`.)

## Deploy

Any static host. This repo ships on **GitHub Pages** (`main` branch, root).
`.nojekyll` keeps Pages from touching the files. Netlify / Vercel / Cloudflare
Pages all work with **no build command** and publish directory = repo root.

## Credits

Built by **Henry Lee** — Backend Team Lead. Content mirrored from the main
portfolio, zero rewrite. Co-developed with Claude Code.

## License

[MIT](LICENSE) © 2026 Henry Lee — code is free to learn from; the personal
content and branding are mine.
