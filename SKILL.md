---
name: henry-lab
description: Guide for working on Henry Lee's Lab — an interactive, static, no-build showcase site (Three.js + Canvas). Covers structure, conventions, deploy, and the do-not-publish rule.
---

# henry-lab — project guide for AI coding agents

## What this is

Henry Lee's **Lab**: a static, no-build showcase site deployed to GitHub Pages.
Pure HTML/CSS/JS. Libraries come from a CDN (jsDelivr) — there is **no bundler,
no `node_modules`, no build step**. Editing a file and pushing is the whole loop.

Live: https://henrylee94.github.io/lab/ · Companion content site:
https://henrylee94.github.io/portfolio/

## Files

- `index.html` — **henry.home**: the 3D boot experience + holographic terminal.
  This is the landing page and the hub. Three.js (ES modules via importmap) +
  EffectComposer/UnrealBloomPass. The terminal is a `CanvasTexture` driven by a
  small command engine (`CMDS` object) and a `FS` virtual filesystem.
- `showcase-scalp.html` — **scalp-analyzer**: a 2D-canvas trading desk. Self-
  contained; indicators (EMA/VWAP/RSI/ATR) computed in-file.
- `lab.html` — visual grid gallery + live canvas thumbnails (fallback menu).

## Conventions

- **One file per showcase, self-contained.** Styles and scripts live inline. Don't
  introduce a build tool or split into modules/bundles.
- **CDN, pinned.** Three.js is pinned (`three@0.161.0`). Keep versions pinned.
- **Accessibility & resilience:** honor `prefers-reduced-motion`; the site must not
  break if a CDN fails. Provide tappable chips for anything keyboard-driven.
- **Navigation:** showcases link to each other with relative paths; links to the
  main portfolio use the absolute `https://henrylee94.github.io/portfolio/` URL.
- **Verify before claiming done:** after editing an inline script, extract it and
  run `node --check`. Never rely on headless-only checks for render bugs — the
  gradient-text-in-a-transform bug proved that. Real-browser verification wins.

## Do-not-publish (hard rule)

This is a public, personal site. **Never** add: real names, employer/company name,
industry specifics, internal project/platform names, IP addresses, phone numbers,
API keys, or trading positions/financials. Content is sourced from Henry's private
reports but is filtered through this list. Run a grep sweep for these before every
push.

## Deploy

GitHub Pages, `main` branch, root. `.nojekyll` disables Jekyll processing.
Push to `main` → Pages rebuilds automatically (~1–2 min).

Repo lives under Henry's **personal** account `henrylee94` (not the company
account). Operate git/GitHub for this repo as `henrylee94`.
