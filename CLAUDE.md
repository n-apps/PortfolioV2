# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm type-check   # TypeScript type checking (no emit)
```

No lint or test scripts are configured.

## Architecture

**Stack:** React 18 + React Router 7 + TypeScript + Vite + Tailwind CSS v4 + Motion (Framer Motion port). Icons via `@remixicon/react`.

**Entry point flow:** `index.html` → `src/main.tsx` → `src/app/App.tsx` (GoatCounter analytics injected here; renders `PageTransitionOverlay` alongside the router) → `RouterProvider` → `Layout` + nested routes.

**Routing:** Centralized in `src/app/routes.ts`. All pages except `HomePage` and `NotFoundPage` are loaded with `React.lazy()`; `Layout` wraps `<Outlet>` in `<Suspense fallback={null}>`, so new lazy routes work without extra wiring. Case studies live under `/work/`. Sub-routes (e.g. `/work/score-counter/reviews`, `/work/white-label-esim/demo`) use their own layout outside the main `Layout`. A standalone full-bleed experience like `/missing-tracks-project` renders entirely outside `Layout` via its own `MissingTracksLayout` (shared nav + self-scoped theme `src/styles/missing-tracks-theme.css`), hosting child routes for the watchlist app (index) and an About page (`/missing-tracks-project/about`) — the pattern for pages that break the 576px shell. `Layout` auto-scrolls to top on route change.

**Page transitions:** `src/lib/page-transition.ts` exposes `navigateWithTransition(to, preload?)` — an imperative store that drives `PageTransitionOverlay`. Use it (not `router.navigate`/`<Link>`) when a navigation should fade through the overlay; otherwise plain React Router links are fine.

**Layout shell:** `Layout` renders a single 576px-max-width CSS grid (`nav` / `main` / `footer`) centered on the page.

**Folders:**
- `src/app/` — app shell (`App.tsx`, `routes.ts`)
- `src/pages/<name>/index.tsx` — route entries. Case studies live under `/work/` and map to their own page folders. Sub-routes get their own subfolder (e.g. `pages/score-counter/reviews/`, `pages/white-label-esim/demo/`).
- `src/components/layout/` — app-wide shell (nav, footer, theme toggle)
- `src/components/ui/` — reusable primitives (dividers, animators, image fallback, masonry, page-transition overlay)
- `src/components/case-study/` — components shared across case-study pages
- `src/lib/` — generic helpers (`nbsp.ts` glues short words to the next word with non-breaking spaces; `typography.ts` exports fluid type tokens; `page-transition.ts` handles overlay transitions)
- `src/data/` — static JSON consumed by pages (e.g. `reviews.json`)
- `case-studies/` (repo root) — markdown source for case-study copy, kept separate from `src/pages/`

Pages should compose sections/features; generic UI goes in `components/ui/`. Local helpers stay colocated with their page (see `pages/white-label-esim/demo/components/` and `pages/white-label-esim/demo/ui/`).

## Styling

- Tailwind v4 via `@tailwindcss/vite` plugin — PostCSS config is intentionally empty
- CSS entry: `src/styles/index.css` imports `fonts.css` → `tailwind.css` → `theme.css` → `demo-theme.css` → `missing-tracks-theme.css`
- `theme.css` defines 40+ CSS custom properties for colors, typography, spacing, and the `card-shadow` utility. All color/spacing tokens live here.
- `demo-theme.css` (white-label eSIM demo) and `missing-tracks-theme.css` (the missing-tracks page) are separate token sets, each scoped to one surface — keep them out of `theme.css`.
- Dark mode: `.dark` class on `<html>`. Theme toggled by `ThemeToggle` component and persisted in `localStorage` under key `"theme"`.
- Fluid typography uses `clamp()` throughout; shared tokens live in `src/lib/typography.ts`. Content is constrained to 576px max-width.

## Analytics

GoatCounter tracking is injected in `App.tsx`. Interactive elements across pages use `data-goatcounter-click="<identifier>"` attributes to track clicks.

## Path Alias

`@/*` maps to `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`).

## AGENTS.md

`AGENTS.md` at the repo root is a near-verbatim copy of this file for Codex. When you change one, mirror the change in the other so the two stay in sync.
