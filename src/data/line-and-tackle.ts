import { GuidePage } from "./types";

// Line, leaders, tackle box essentials, common rigs, and knots.

export const LINE_AND_TACKLE_PAGE: GuidePage = {
  id: "line-and-tackle",
  title: "Line & Tackle Choices",
  kidTitle: "Line, Rigs & Knots",
  description:
    "Choosing the right line, stocking a tackle box, tying the rigs that catch fish, and the knots that hold it all together.",
  sections: [
    {
      id: "main-line-types",
      title: "Main Line Types",
      kidTitle: "Types of Fishing Line",
      body: [
        "Most beginners should start with monofilament — it's forgiving, cheap, and easy to handle.",
      ],
      tables: [
        {
          id: "main-line-types-table",
          title: "Main Line Types",
          columns: ["Type", "Pros", "Cons", "Best Use"],
          rows: [
            { Type: "Monofilament", Pros: "Cheap, forgiving, easy to handle, knots hold well", Cons: "Stretch reduces sensitivity, UV degradation", "Best Use": "Best starter line (panfish, bass, light trout, walleye)" },
            { Type: "Fluorocarbon", Pros: "Nearly invisible, sinks, sensitive", Cons: "Stiffer, more expensive, harder to manage", "Best Use": "Leader material for line-shy fish; deep presentations" },
            { Type: "Braid", Pros: "Zero stretch, extreme sensitivity, thin diameter", Cons: "Visible in clear water, can dig into spool", "Best Use": "Use with fluoro leader; pike, heavy cover, deep water" },
          ],
        },
      ],
    },
    {
      id: "line-test-by-species",
      title: "Line Test by Species",
      kidTitle: "How Strong Should Your Line Be?",
      body: [],
      tables: [
        {
          id: "line-test-table",
          title: "Line Test by Species",
          columns: ["Species", "Mono", "Braid"],
          rows: [
            { Species: "Panfish", Mono: "2–6 lb", Braid: "4–8 lb" },
            { Species: "Trout (stocked)", Mono: "4–6 lb", Braid: "6–10 lb" },
            { Species: "Bass", Mono: "6–12 lb", Braid: "10–20 lb" },
            { Species: "Walleye", Mono: "6–10 lb", Braid: "10–15 lb" },
            { Species: "Pike", Mono: "10–17 lb", Braid: "20–30 lb" },
            { Species: "Catfish", Mono: "12–20 lb", Braid: "30–50 lb" },
            { Species: "Steelhead / Salmon", Mono: "8–17 lb", Braid: "15–30 lb" },
            { Species: "Muskie", Mono: "—", Braid: "50–80 lb" },
          ],
        },
      ],
    },
    {
      id: "leader-materials",
      title: "Leader Materials",
      kidTitle: "Leaders",
      body: [],
      list: [
        "**Wire leader** — single or multi-strand, required for pike and muskie (20–30 lb test) since their teeth cut through mono and fluoro.",
        "**Fluorocarbon leader** — 6–12 lb test for line-shy trout and walleye; nearly invisible underwater.",
        "**Mono leader** — fine for bass and panfish.",
      ],
    },
    {
      id: "tackle-box-items",
      title: "Core Tackle Box Items",
      kidTitle: "What to Keep in Your Tackle Box",
      body: [
        "Stock these basics and you'll be ready for almost any situation Michigan throws at you.",
      ],
      tables: [
        {
          id: "tackle-box-table",
          title: "Core Tackle Box Items",
          columns: ["Item", "Sizes to Stock"],
          rows: [
            { Item: "Hooks (baitholder & octopus)", "Sizes to Stock": "#6, #4, #2, #1, 1/0, 2/0, 3/0" },
            { Item: "Split shot", "Sizes to Stock": "Assorted" },
            { Item: "Egg sinkers", "Sizes to Stock": "¼, ½, ¾ oz" },
            { Item: "Bank sinkers", "Sizes to Stock": "1–4 oz" },
            { Item: "Bullet weights", "Sizes to Stock": "¼, ½ oz" },
            { Item: "Drop shot weights", "Sizes to Stock": "⅛, ¼ oz" },
            { Item: "Jigheads", "Sizes to Stock": "⅛, ¼, ⅜ oz" },
            { Item: "Slip bobbers", "Sizes to Stock": "Small + medium" },
            { Item: "Fixed bobbers", "Sizes to Stock": "Small + medium" },
            { Item: "Barrel swivels", "Sizes to Stock": "Sizes 7 & 10" },
            { Item: "Snap swivels", "Sizes to Stock": "Sizes 7 & 10" },
            { Item: "Beads", "Sizes to Stock": "Mixed colors for steelhead rigs" },
          ],
        },
      ],
    },
    {
      id: "rigs-to-know",
      title: "Rigs You Must Know",
      kidTitle: "Fishing Rigs to Try",
      body: [],
      tables: [
        {
          id: "rigs-table",
          title: "Rigs You Must Know",
          columns: ["Rig", "Setup", "Use"],
          rows: [
            { Rig: "Bobber rig", Setup: "Hook + bait 6–18\" below bobber → main line", Use: "Panfish, trout" },
            { Rig: "Bottom rig", Setup: "Main line → egg sinker → bead → swivel → leader (12–24\") → hook", Use: "Catfish, walleye, perch" },
            { Rig: "Slip bobber rig", Setup: "Main line → bobber stop → bead → slip bobber → bead → hook", Use: "Deep panfish, walleye" },
            { Rig: "Drop shot rig", Setup: "Main line → hook tied 6–12\" above weight", Use: "Walleye, smallmouth" },
            { Rig: "Three-way rig", Setup: "Main line → 3-way swivel → dropper to sinker, dropper to hook", Use: "River walleye, steelhead, cats" },
            { Rig: "Carolina rig", Setup: "Main line → egg sinker → bead → swivel → leader → hook/bait", Use: "Bass, walleye" },
            { Rig: "Ned rig", Setup: "Light jighead + small soft plastic", Use: "Bass, panfish (superb year-round)" },
            { Rig: "Steelhead rig", Setup: "Main line → swivel → leader → spawn sack or roe bag", Use: "Steelhead, salmon" },
            { Rig: "Bobber-dog rig", Setup: "Sliding bobber above leader with single hook", Use: "Steelhead" },
          ],
        },
      ],
    },
    {
      id: "essential-knots",
      title: "Essential Knots",
      kidTitle: "Knots Every Angler Should Know",
      body: [
        "Practice knots at home with scrap line. The knot is the weakest point in your entire system. Retie after a snag or a fish.",
      ],
      kidBody: [
        "Practice tying these at home before you go fishing — a strong knot is what keeps the big one from getting away!",
      ],
      tables: [
        {
          id: "knots-table",
          title: "Essential Knots",
          columns: ["Knot", "Use"],
          rows: [
            { Knot: "Improved Clinch", Use: "Hooks and lures — first knot to learn" },
            { Knot: "Palomar", Use: "Strongest all-purpose knot" },
            { Knot: "Uni Knot", Use: "Hooks, swivels, line-to-line" },
            { Knot: "Double Uni", Use: "Joining mono to braid or fluoro" },
            { Knot: "Surgeon's Loop", Use: "Loop-to-loop leader connections" },
            { Knot: "FG Knot", Use: "Slim braid-to-leader connection (intermediate)" },
            { Knot: "Arbor Knot", Use: "Spooling line onto a reel" },
          ],
        },
      ],
    },
  ],
};
