# Henry Lee — The Lab (Portfolio V2)

Personal project (github.com/henrylee94). A gallery of interactive showcases —
the "experience weapon" that complements the main portfolio (V1). Pure static:
no backend, no build step, no server. Content reused from V1, zero rewrite.

## Pages
- `index.html` — the gallery / landing (deploy root)
- `showcase-homelab.html` — **henry.home**: boot a 3D UM890 mini-PC (Three.js +
  bloom); it projects a holographic terminal you can actually type in
  (`help ls cat ps top ping hermes rules ai …`). Explores the real home lab.
- `showcase-scalp.html` — **scalp-analyzer**: a live scalping desk on 2D canvas —
  animated candles, EMA/VWAP/RSI, a confluence checklist and a 0–10 safety
  score. Type `check NVDA` for the entry/target/stop card.

## Run locally
Just open `index.html` in a browser (needs internet — Three.js/fonts via CDN).

## Deploy (all static, free)
- **GitHub Pages**: push to `github.com/henrylee94/<repo>`, Settings → Pages →
  deploy from branch. `index.html` is the entry.
- **Netlify / Vercel**: drag-and-drop this folder, or connect the repo. No build
  command, publish directory = repo root.

## Not yet wired
- Reverse link from V1 (`portfolio-website/lab.html` → this gallery). Held until
  both are deployed so the live link can't 404. Insertion point in V1's
  `#ai-home-server` card is ready (`demo-links` + `btn btn-ghost`).
- `stock-sentry` showcase — pending desensitization (leaked private files in the
  old public repo must be cleaned first).
