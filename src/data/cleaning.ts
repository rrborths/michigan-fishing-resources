import { GuidePage } from "./types";

// Cleaning, filleting, storage, and cooking your catch.

export const CLEANING_PAGE: GuidePage = {
  id: "cleaning-and-cooking",
  title: "Cleaning, Filleting & Cooking",
  kidTitle: "From Catch to Plate",
  description:
    "How to keep fish fresh, clean and fillet your catch, store it properly, and cook it well.",
  sections: [
    {
      id: "keeping-fresh",
      title: "Keeping Fish Fresh on the Water",
      kidTitle: "Keeping Your Catch Fresh",
      body: [],
      list: [
        "Kill the fish quickly — a sharp blow to the head is humane and preserves flesh quality.",
        "Bleed larger fish — cut the gills or a main artery near the tail immediately.",
        "Keep fish cold — use a stringer in the water, an ice-filled cooler, or a well-insulated container with bagged ice.",
        "Don't stack fish in the livewell all day in the heat — quality drops fast.",
        "Eat or clean fish within hours of catching whenever possible.",
      ],
    },
    {
      id: "cleaning-panfish-bass",
      title: "Cleaning & Filleting Steps (Panfish & Bass)",
      kidTitle: "How to Fillet a Fish",
      body: [],
      list: [
        "**1.** Scale (if desired) — most panfish don't need scaling; bass and pike do.",
        "**2.** Make the first cut behind the pectoral fin, angling toward the head, down to the spine.",
        "**3.** Turn the knife flat along the spine and cut from head to tail, releasing the fillet.",
        "**4.** Flip the fish and repeat on the other side.",
        "**5.** Skin the fillet (optional) — lay it skin-down, grip the tail end with pliers, and slide the knife between flesh and skin.",
        "**6.** Rinse in cold water.",
        "**7.** Inspect for any remaining bones and remove with pliers or tweezers.",
      ],
    },
    {
      id: "cleaning-larger-fish",
      title: "Cleaning Larger Fish",
      kidTitle: "Cleaning Bigger Fish",
      body: [],
      list: [
        "**Walleye** — same filleting method; the skin is easy to remove. Many anglers also keep the cheeks — they're excellent.",
        "**Pike & muskie** — Y-bone removal: after filleting, follow the Y-shaped bones along the spine and trim them out.",
        "**Catfish** — skin is removed with pliers (no scaling needed) before filleting. Many prefer nuggets cut from the belly.",
      ],
    },
    {
      id: "trout-salmon-cleaning",
      title: "Trout & Salmon Cleaning",
      kidTitle: "Cleaning Trout & Salmon",
      body: [],
      list: [
        "**Trout** — many are pan-dressed (gutted with head and skin on) for smoking or grilling.",
        "**Salmon** — fillet, remove the skin, and pin-bone with tweezers. The belly flaps are excellent for smoking.",
      ],
    },
    {
      id: "storage-preservation",
      title: "Storage & Preservation",
      kidTitle: "Storing Your Catch",
      body: [],
      tables: [
        {
          id: "storage-table",
          title: "Storage & Preservation",
          columns: ["Method", "Best For", "Shelf Life", "Tips"],
          rows: [
            { Method: "Refrigerator (on ice)", "Best For": "Short-term", "Shelf Life": "2–3 days", Tips: "Drain meltwater; keep fish tightly packed in ice" },
            { Method: "Freezer (vacuum-sealed)", "Best For": "Long-term", "Shelf Life": "6–12 months", Tips: "Vacuum-seal or use heavy freezer bags; remove air; label with date" },
            { Method: "Smoking", "Best For": "Trout, salmon, whitefish", "Shelf Life": "Weeks (refrigerated)", Tips: "Cold-smoke for flavor; hot-smoke to cook" },
            { Method: "Canning", "Best For": "Long-term, shelf-stable", "Shelf Life": "1+ years", Tips: "Pressure canner required for low-acid fish" },
            { Method: "Pickling", "Best For": "Panfish, herring", "Shelf Life": "Months (refrigerated)", Tips: "Classic recipes use vinegar, sugar, and spices" },
          ],
        },
      ],
    },
    {
      id: "yields-servings",
      title: "Yields & Servings",
      kidTitle: "How Much Meat Do You Get?",
      body: [],
      tables: [
        {
          id: "yields-table",
          title: "Yields & Servings",
          columns: ["Species", "Average Fillet Yield", "Avg Servings per lb (raw)"],
          rows: [
            { Species: "Bluegill", "Average Fillet Yield": "~35%", "Avg Servings per lb (raw)": "2–3 fillets/person" },
            { Species: "Walleye", "Average Fillet Yield": "~45%", "Avg Servings per lb (raw)": "2 fillets/person" },
            { Species: "Pike", "Average Fillet Yield": "~40%", "Avg Servings per lb (raw)": "2 fillets/person" },
            { Species: "Bass", "Average Fillet Yield": "~40%", "Avg Servings per lb (raw)": "2 fillets/person" },
            { Species: "Trout", "Average Fillet Yield": "~50%", "Avg Servings per lb (raw)": "1–2 fillets/person" },
            { Species: "Salmon", "Average Fillet Yield": "~55%", "Avg Servings per lb (raw)": "1 fillet/person" },
          ],
        },
      ],
    },
    {
      id: "cooking-quick-reference",
      title: "Cooking Quick Reference",
      kidTitle: "How to Cook Your Catch",
      body: [],
      tables: [
        {
          id: "cooking-table",
          title: "Cooking Quick Reference",
          columns: ["Method", "Best For", "Time"],
          rows: [
            { Method: "Pan-fry", "Best For": "Panfish, small fillets", Time: "3–4 min/side, medium-high heat" },
            { Method: "Deep-fry", "Best For": "Bluegill, perch, crappie", Time: "3–5 min in 350°F oil" },
            { Method: "Grill", "Best For": "Salmon, trout, walleye (in foil)", Time: "4–5 min/side" },
            { Method: "Bake", "Best For": "Whole trout, salmon", Time: "350°F, 10–15 min" },
            { Method: "Smoke", "Best For": "Trout, salmon, whitefish", Time: "Hours; brine first" },
          ],
        },
      ],
    },
    {
      id: "waste-disposal",
      title: "Waste Disposal",
      kidTitle: "Cleaning Up Afterward",
      body: [],
      list: [
        "Bury fish carcasses and entrails away from water, double-bag and trash them, or use a local fish-cleaning station with a grinder.",
        "Never discard fish parts in the water you're fishing.",
        "Check local regulations for campground and park disposal rules.",
      ],
    },
  ],
};
