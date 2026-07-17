# AGENTS.md

Guidance for AI coding agents working in this repository.

**Read [`SKILL.md`](SKILL.md) first** — it is the authoritative project guide
(structure, conventions, deploy, and the do-not-publish rule).

## Quick facts

- Static site, **no build step**. Edit HTML/CSS/JS and push; GitHub Pages redeploys.
- Each showcase is **one self-contained file** (inline styles + scripts). Don't add
  a bundler, framework, or `node_modules`.
- Three.js is loaded from a **pinned** CDN via importmap. Keep versions pinned.
- **Verify:** after editing an inline `<script>`, extract it and `node --check` it.
  Prefer real-browser verification for anything visual.

## Do-not-publish (non-negotiable)

Never commit real names, employer/industry, internal project names, IPs, phone
numbers, API keys, or trading positions. This is a public personal site. Grep for
these before pushing.

## Conventions

- Match the existing style of the file you're editing.
- Keep it accessible: `prefers-reduced-motion` aware, CDN-failure tolerant,
  tappable alternatives for keyboard-only interactions.
- Personal GitHub account `henrylee94` owns this repo — operate as that account.
