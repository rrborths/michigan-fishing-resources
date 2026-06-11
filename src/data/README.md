# Content Guide — Adding & Updating Data

Everything on the site is driven by the TypeScript files in this folder. There is no
database and no admin panel — **edit these files, rebuild, and redeploy.** Shapes for
every content type live in `types.ts`.

If you're working with Claude/Cowork, the fastest way to update the site is to just
describe what you want added (a new lake, a new species, a correction to a guide) and
point at this folder — Claude can edit these files directly, run a build to check for
errors, and redeploy.

## Add a new fish species

1. Open `species.ts`.
2. Copy an existing entry (pick one in the same `category` so it lands in the right
   section comment block — WARMWATER / COLDWATER / ROUGHFISH).
3. Fill in every field from the `Species` type in `types.ts`:
   - `id` — lowercase-with-hyphens slug. This becomes the URL: `/species/your-id`.
   - `commonName`, `scientificName`
   - `category` — `"warmwater" | "coldwater" | "roughfish"`
   - `size`, `habitat`, `season`, `bait`, `technique` — plain-English descriptions.
   - `waterTypes` — array from `"lake" | "river" | "stream" | "great-lake" | "pond" | "ice"`.
     This drives the water-type filter on `/species`.
   - `difficulty` — `"beginner" | "intermediate" | "advanced"`.
   - `kidFact` — one fun, simple sentence shown in Kids Mode.
   - `specialNote` (optional) — for things like catch-and-release rules (e.g. lake sturgeon).
4. That's it. The species automatically appears in the Species Explorer (`/species`) and
   gets its own detail page at `/species/[id]` the next time the site is built.

## Add a new place to fish

1. Open `locations.ts`.
2. Add an entry to `LOCATIONS` matching the `FishingLocation` type:
   - `id` — slug, becomes `/places/your-id`.
   - `name`, `type` (`"lake" | "river" | "stream" | "great-lake"`), `region`.
   - `targetSpecies` — array of species names/ids shown as tags.
   - `bestSeason`, `access`, `description`, `kidFact`.
3. **Region filter:** the `/places` page groups the free-form `region` string into
   broad buckets (Upper Peninsula, NW Lower, NE Lower, N. Lower, SW Lower, SE Lower,
   W. Lower, Other) using `region-group.ts`. If you add a region prefix that doesn't
   start with one of the existing patterns, either reuse an existing prefix
   (e.g. `"NW Lower (Your County)"`) or add a new rule to `region-group.ts`.
4. Optional: add notable-but-not-detailed spots to `HONORABLE_MENTIONS`, or update the
   `ACCESS_PASSES` / `SPECIES_LOCATION_MAP` tables.

## Add or edit a guide page (Gear, Techniques, Regulations, etc.)

Guide pages (e.g. `/guides/regulations`, `/guides/gear`) are each their own file
(`gear.ts`, `regulations.ts`, etc.) exporting a `GuidePage` object.

To edit existing content: find the relevant file and section, edit the `body`,
`kidBody`, `list`, `kidList`, or `tables` arrays directly.

To add a brand-new guide page:

1. Create `src/data/your-guide.ts`:
   ```ts
   import { GuidePage } from "./types";

   export const YOUR_GUIDE_PAGE: GuidePage = {
     id: "your-guide",          // becomes /guides/your-guide
     title: "Your Guide Title",
     kidTitle: "Kid-Friendly Title",   // optional
     description: "One-sentence summary shown at the top of the page.",
     sections: [
       {
         id: "section-one",
         title: "Section Heading",
         kidTitle: "Kid Heading",      // optional
         body: ["Paragraph one.", "Paragraph two."],
         kidBody: ["Simpler version for Kids Mode."], // optional
         list: ["Bullet one", "Bullet two"],          // optional
         kidList: ["Simpler bullet"],                 // optional
         tables: [ /* optional DataTable objects */ ],
       },
     ],
   };
   ```
2. In `guides.ts`, import it and add it to the `GUIDE_PAGES` array. It will
   automatically appear in the site navigation and at `/guides/your-guide`.

### Formatting notes for guide content

- Use `**bold**` inside any `body`, `kidBody`, `list`, `kidList`, or table cell text —
  it renders as bold automatically (handled by `FormattedText.tsx`).
- `kidBody`/`kidTitle`/`kidList` are optional. If omitted, Kids Mode falls back to the
  regular text — only add kid versions where simplification genuinely helps.
- `tables` use the shared `DataTable` shape: `{ id, title, columns, rows, note? }`,
  where each row is an object keyed by column name.

## Verifying changes before deploying

From the `fishing-app` folder:

```bash
npm install   # only needed once, or after editing package.json
npm run build
```

A successful build prints every route, including each generated `/species/[id]`,
`/places/[id]`, and `/guides/[id]` page. If you made a typo in a type field, the
build will fail with a TypeScript error pointing at the exact file and line.

## Deploying

See the top-level `README.md` for deployment instructions (Vercel).
