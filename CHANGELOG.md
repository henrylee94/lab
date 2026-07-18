# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> **Version sync rule:** `package.json` is the single source of truth for the
> version. The visible in-site badge reads `js/version.js` — bump both (plus the
> "What's new" list on `lab.html`) in the same commit as the release.

## [Unreleased]

## [1.2.0] — 2026-07-19

Three new interactive showcases, a richer grid page, and visible versioning.

### Added

- **Retry Storm** (`showcase-idempotency.html`) — an interactive idempotency
  playground: mash RETRY / enable chaos mode against a create→review→approve→execute
  pipeline; with the workflow-ID-as-creation-key guard on, retries return the same
  record and the ledger stays clean. Live integrity score and counters.
- **Dispatch Floor** (`showcase-router.html`) — a live weighted-scoring queue-routing
  sim: agents with status/load/idle time, players (incl. VIPs) arriving, one
  sorted-set score picking the winner — status ▸ free slots ▸ waited-longest.
  Add agents, cycle status by clicking, spawn waves.
- **Live from GitHub** (`showcase-github.html`) — client-side fetch of the GitHub
  API: live repo cards, language mix bar, latest pushes; graceful fallback when
  rate-limited or offline. Zero backend.
- Three new cards with animated canvas mini-thumbnails on `lab.html`; terminal
  `showcases` / `open` entries on `index.html`; `sitemap.xml` entries.
- **Grid enrichment on `lab.html`** — three new sections: _Under the hood_ (how
  the site is built: hand-rolled terminal engine, Three.js + bloom, one file per
  page, CI guard), a _try the terminal_ teaser card, and a _from the workbench_
  link row (ai-native-sdlc, portfolio, this repo's source).
- **Visible versioning** — a muted `v1.2.0` badge in the `lab.html` footer and the
  `index.html` corner tag, both reading one source: `js/version.js`
  (`window.LAB_VERSION`). New `version` and `changelog` terminal commands on
  `index.html`, and a compact **"What's new"** section on `lab.html` listing the
  latest releases with links to each showcase.
- **Tooling:** Prettier config + `format` / `format:check` / `lint-check` scripts,
  and a `lint-check` job in CI alongside the existing link/syntax check.

### Changed

- Landing copy on `lab.html` reframed to foreground engineering discipline.
- **Repo structure standardized** — `favicon.svg` moved to `assets/`, community
  health files consolidated under `.github/`, plus repo hygiene: Dependabot,
  `CODEOWNERS`, `.gitattributes`.

### Fixed

- **Accessibility — `prefers-reduced-motion` on `lab.html`:** the ambient particle
  background and the card mini-thumbnails now render a single static frame instead
  of animating; hover transforms and smooth scrolling are disabled.

## [1.1.0] — 2026-07-17

Standards, accessibility, and repo-hygiene pass.

### Added

- **SEO / social:** per-page `<meta name="description">`, Open Graph + Twitter card
  tags, `favicon.svg`, `theme-color`, `robots.txt`, `sitemap.xml`.
- **Custom `404.html`** for GitHub Pages (terminal-themed).
- **CI** (`.github/workflows/ci.yml`) — runs `scripts/check.mjs` on push/PR to
  validate every inline script's syntax and every local link target.
- Community health files: `SECURITY.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`,
  issue + pull-request templates, `.editorconfig`.

### Fixed

- **Accessibility — `prefers-reduced-motion`:** the 3D scene now skips the camera
  dolly, ambient particles, mesh rotation, and holo drift; the scalp desk renders a
  static snapshot instead of a live tape. (Previously ignored — docs had over-claimed
  this; now the code matches.)
- **Graceful degradation:** if the Three.js CDN is blocked/offline, `index.html` now
  shows a fallback with links to the grid and the portfolio instead of a blank page.
  Added a `<noscript>` fallback.

## [1.0.0] — 2026-07-17

First public release. The Lab goes live at https://henrylee94.github.io/lab/.

### Added

- **henry.home** — a 3D UM890 mini-PC (Three.js) that boots on click/keypress and
  projects a holographic terminal.
  - Cinematic dolly-in intro, UnrealBloom glow, labeled Tailscale mesh with data
    pulses, rising ambient particles, synthesized power-on chime (toggleable).
  - Boot ceremony: char-by-char typewriter, screen power-on flash, holographic
    unfold + flicker.
  - Real, typeable terminal: `help`, `neofetch`, `ls`, `cat`, `ps`, `top`, `ping`,
    `hermes`, `memory`, `mnemosyne`, `skills`, `models`, `cron`, `gaps`,
    `integrations`, `backtest`, `timeline`, `rules`, `ai`, `whoami`, `contact`,
    `uptime`, `showcases`, `open`, `menu`, `clear` — plus Tab-completion, command
    history, and easter eggs (`sudo`, `coffee`, `sl`).
  - Tappable command chips for mobile / non-typers.
- **scalp-analyzer** — a live 2D-canvas scalping desk: animated candles, EMA / VWAP
  / RSI, a 7-setup detector, a confluence checklist, a 0–10 safety score, and a
  `check <TICKER>` entry/target/stop card drawn on the chart. Backtested-edge badge.
- **lab.html** — a visual gallery with live mini-thumbnails as a fallback menu.
- Cross-links to the main portfolio at henrylee94.github.io/portfolio.
- Standard repo scaffolding: README, LICENSE (MIT), this changelog, `package.json`,
  `SKILL.md` / `AGENTS.md`, `.nojekyll`.

### Notes

- All content honors an internal do-not-publish list — no real names, employers,
  IPs, phone numbers, or trading positions appear anywhere.

[Unreleased]: https://github.com/henrylee94/lab/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/henrylee94/lab/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/henrylee94/lab/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/henrylee94/lab/releases/tag/v1.0.0
