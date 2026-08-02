# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, single-page marketing site for AII (Artificial Intelligence Integration) — a business offering website development, AI chatbots/assistants, AI agents, and automation/integration services to companies. No build step, no framework, no package.json: it's plain HTML/CSS/JS meant to be served as-is (e.g. GitHub Pages or any static host).

## Running locally

There is no dev server or build tooling. Serve the directory with any static file server, e.g.:

```bash
python3 -m http.server 8199
```

Then open `http://localhost:8199/index.html`. There are no tests, linters, or build commands in this repo.

## Architecture

- `index.html` — the entire page content, single file, all sections (hero, services/`#leistungen`, process/`#ablauf`, `#warum`, `#kontakt`). Section IDs are the anchors used by the nav in the header.
- `css/style.css` — all styling, using CSS custom properties defined in `:root` (colors, radius, max-width) for the dark navy/blue theme. Mobile breakpoints at 900px and 640px.
- `js/background.js` — a Three.js particle network animated across the *entire page* as a fixed background (`#bg-canvas`), independent of the hero visual.
- `js/hero-orb.js` — the interactive 3D "neural core" in the hero (`#hero-canvas`): a wireframe icosahedron with orbiting nodes, draggable via mouse/touch, auto-rotates when idle. This is the standalone focal 3D element; changes to the 3D visuals almost always belong in one of these two files, not both.
- `js/main.js` — non-3D page behavior: mobile nav toggle, scroll-reveal via `IntersectionObserver`, and the contact form handler (submits via a pre-filled `mailto:` link — there is no backend/API).
- `vendor/three.min.js` — Three.js r0.160.0, vendored locally on purpose so the page has zero runtime CDN/third-party dependency. If upgrading, replace this file rather than pointing `index.html` at a CDN URL.

## Customer delivery templates (`templates/`)

Separate from the marketing site above: `templates/` holds reusable starter kits for the services AII sells to clients (currently `templates/chatbot` — a Claude-API-backed chat widget, and `templates/website` — a genericized, `{{PLACEHOLDER}}`-driven copy of this same site). See `templates/README.md` for the per-client workflow: copy a template folder, fill in `CUSTOMER_BRIEF.md` with the client's requirements in free text, then have Claude Code fill in the template's placeholders/config from that brief. Keep the two concerns separate — don't fold template code into the root site or vice versa.

## Internal tools (`tools/`)

Neither the marketing site nor a customer deliverable: `tools/` holds standalone apps AII uses internally (currently `tools/atlas` — a session/task-log tracker with an end-of-session analysis). `tools/atlas` is a single static HTML file like the root site, with no backend and no API key: the analysis step has the user copy a generated prompt into their own free claude.ai chat and paste the reply back in, rather than calling the Anthropic API directly (which would require a server to keep a key off the client). See each tool's own README for details.

## Conventions to preserve

- Site copy is in German; keep new copy consistent with that.
- Both 3D scripts respect `prefers-reduced-motion` — replicate that check when adding new animated/3D elements.
- No external network calls at runtime (fonts, scripts, images should stay self-hosted/inline) to keep the zero-dependency property intact.
