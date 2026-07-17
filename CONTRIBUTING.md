# Contributing

This is a personal portfolio project, so it's not looking for feature
contributions — but bug reports, accessibility feedback, and small fixes are
welcome.

## Ground rules

- **No build step.** Pure static HTML/CSS/JS; each showcase is one self-contained
  file. Please don't add a bundler, framework, or `node_modules`.
- **Keep libraries pinned** (Three.js is loaded from a pinned CDN via importmap).
- **Match the surrounding style** of the file you edit.
- **Accessibility matters:** honor `prefers-reduced-motion`, keep keyboard actions
  reachable by a tappable alternative, degrade gracefully if a CDN is blocked.

## Before you open a PR

Run the checks locally — they're the same ones CI runs:

```bash
node scripts/check.mjs      # inline-script syntax + local link integrity
npx serve .                 # then click through the showcases in a real browser
```

See [`SKILL.md`](SKILL.md) for the full project guide.
