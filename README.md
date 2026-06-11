# Michigan Fishing Resources

A practical, real-time reference for fishing in Michigan — species, places to fish,
gear, techniques, and rules — built for beginners and pros, with a Kids Mode toggle
for younger anglers.

Built with Next.js (App Router) + TypeScript + Tailwind CSS. All content is static
(no database, no CMS) so it's fast, free to host, and easy to extend.

## Site map

- `/` — Home, overview and quick links
- `/species` — Searchable/filterable fish species database (38 species)
- `/species/[id]` — Individual species detail pages
- `/places` — Searchable/filterable places-to-fish database (lakes, rivers, streams,
  Great Lakes)
- `/places/[id]` — Individual location detail pages
- `/guides/[id]` — Article-style guides: Foundations, Gear, Line & Tackle, Techniques,
  Strategies, Regulations, Ice Fishing, Boat Safety, Cleaning & Cooking, Tips
- **Kids Mode** — toggle in the header. Persists per-browser via `localStorage`.
  Simplifies language, surfaces fun facts, and increases text size on detail pages.

## How to update content

See **[`src/data/README.md`](./src/data/README.md)** — a step-by-step guide for
adding a new species, a new place to fish, or a new/updated guide page. You don't
need to touch any UI code; everything is data-driven.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

This generates a static export of every page (species, places, and guides are all
pre-rendered at build time via `generateStaticParams`). A successful build prints the
full route list — check that the page count matches what you expect after adding
content.

## Deploying to Vercel

This project is meant to live in Ryan's Vercel account
(`rrborths-5945's projects`). To deploy:

### Option A — Vercel CLI (recommended for quick updates)

From the `fishing-app` folder, on a machine with internet access and the Vercel CLI:

```bash
npm install -g vercel   # one-time
vercel login            # one-time, opens a browser to sign in
vercel link             # one-time — creates a new project (accept defaults)
vercel --prod           # deploy to production
```

After the first `vercel link`, future updates are just:

```bash
vercel --prod
```

### Option B — Git integration (best for ongoing edits)

1. Push this folder to a GitHub repo (e.g. `michigan-fishing-resources`).
2. In the [Vercel dashboard](https://vercel.com/new), import that repo as a new
   project — accept the default Next.js settings.
3. Every push to `main` auto-deploys. For preview links before going live, push to a
   branch and open a PR.

Either way, Vercel auto-detects this as a Next.js project — no special configuration
needed.

## Tech notes

- Tailwind v4 theme (brand colors, fonts) is defined in `src/app/globals.css`.
- Fonts are system font stacks (no external font loading required).
- Kids Mode state lives in `src/context/KidsModeContext.tsx`.
