import { GuidePage } from "./types";

// Gear & Tackle: rods, reels, and a beginner equipment kit.
// To add new gear info, add a new GuideSection to the sections array below.

export const GEAR_PAGE: GuidePage = {
  id: "gear",
  title: "Gear & Tackle",
  kidTitle: "Gear Up!",
  description:
    "Everything you need to know about choosing rods, reels, and a starter kit — without overspending or overthinking it.",
  sections: [
    {
      id: "rod-types",
      title: "Rod Types",
      kidTitle: "Kinds of Fishing Rods",
      body: [
        "There are four main rod types you'll run into. A spin-cast combo (Zebco 33, ~$30) is ideal for children or absolute first-timers. A spinning combo ($50–$100) is the right choice for most adults. Upgrade from there as your skills grow.",
      ],
      kidBody: [
        "Most kids start with a 'push-button' rod — it's super easy and won't tangle. Grown-ups usually use a spinning rod, which is a little trickier but works for almost everything.",
      ],
      tables: [
        {
          id: "rod-types-table",
          title: "Rod Types Compared",
          columns: ["Type", "Pros", "Cons", "Beginner Friendly?"],
          rows: [
            { Type: "Spin-Cast (Zebco-style)", Pros: "Push-button cast, no tangles, affordable", Cons: "Lower line capacity, less sensitive, limited to lighter line", "Beginner Friendly?": "★★★★★ (ages 6–12 or first-timers)" },
            { Type: "Spinning", Pros: "Easy to cast, versatile", Cons: "Less accurate at long distance", "Beginner Friendly?": "★★★★★" },
            { Type: "Casting (Baitcaster)", Pros: "Accurate, powerful, good for heavy cover", Cons: "Backlash learning curve", "Beginner Friendly?": "★★" },
            { Type: "Fly", Pros: "Required for fly fishing, elegant", Cons: "Different technique, longer learning curve", "Beginner Friendly?": "Add in Year 2" },
          ],
        },
      ],
    },
    {
      id: "rod-length-power-action",
      title: "Rod Length, Power, and Action",
      kidTitle: "Picking the Right Size Rod",
      body: [
        "A 6'6\" or 7' medium-power, fast-action spinning rod covers bluegill, bass, light walleye, and trout. It's the one-rod-does-most solution.",
      ],
      tables: [
        {
          id: "rod-length-table",
          title: "Rod Length, Power & Action by Use",
          columns: ["Use", "Length", "Power", "Action"],
          rows: [
            { Use: "Panfish / light trout", Length: "5'6\"–6'", Power: "Ultra-light", Action: "Fast" },
            { Use: "General bass / pike", Length: "6'6\"–7'", Power: "Medium", Action: "Moderate-Fast" },
            { Use: "Walleye / general", Length: "7'", Power: "Medium-Light to Medium", Action: "Fast" },
            { Use: "Catfish / heavy cover", Length: "7'–7'6\"", Power: "Medium-Heavy to Heavy", Action: "Moderate-Fast" },
            { Use: "Steelhead / salmon", Length: "8'6\"–10'", Power: "Medium to Medium-Heavy", Action: "Fast" },
            { Use: "Musky", Length: "8'–9'", Power: "Heavy", Action: "Fast" },
          ],
        },
      ],
    },
    {
      id: "rod-materials",
      title: "Rod Materials",
      kidTitle: "What Rods Are Made Of",
      body: [],
      list: [
        "**Graphite** — lighter, more sensitive, more expensive.",
        "**Fiberglass** — tougher, heavier, more flexible, cheaper.",
        "**Composite** — a blend of both, and a great beginner choice.",
      ],
      kidList: [
        "Graphite rods feel light and let you feel every little bite.",
        "Fiberglass rods are tougher — great if you're still learning to be careful.",
        "Composite rods mix both — a solid pick to start with.",
      ],
    },
    {
      id: "reel-sizes",
      title: "Reel Sizes",
      kidTitle: "Reel Sizes",
      body: [
        "Reel sizes are numbered — the bigger the number, the bigger (and heavier-duty) the reel. A 2500–3000 size reel is the do-everything size: bass, walleye, light pike, and steelhead. Start here if you're only buying one reel.",
      ],
      tables: [
        {
          id: "reel-sizes-table",
          title: "Reel Sizes by Use",
          columns: ["Size", "Best For"],
          rows: [
            { Size: "1000–2000", "Best For": "Ultralight, panfish, trout" },
            { Size: "2500–3000", "Best For": "The do-everything size (bass, walleye, light pike/steelhead) — start here" },
            { Size: "4000", "Best For": "Pike, larger walleye, catfish" },
            { Size: "5000–8000", "Best For": "Musky, heavy catfish, salmon" },
          ],
        },
      ],
    },
    {
      id: "reel-features",
      title: "What to Look For in a Reel",
      kidTitle: "What Makes a Good Reel",
      body: [],
      list: [
        "**Ball bearings** — 4+ is fine; smoothness matters more than the count.",
        "**Drag** — should be smooth and adjustable; 8–15 lb of drag handles most freshwater fish.",
        "**Gear ratio** — 5.2:1 to 6.2:1 is standard; higher numbers mean a faster retrieve.",
        "**Anti-reverse** — should engage instantly when you start reeling.",
        "**Line capacity** — match it to the line and species you're targeting.",
      ],
    },
    {
      id: "beginner-kit",
      title: "Beginner Equipment Kit (~$150–250)",
      kidTitle: "Your Starter Kit",
      body: [
        "This is everything you need to get on the water for your first season. Total cost runs about $150–250.",
      ],
      tables: [
        {
          id: "beginner-kit-table",
          title: "Beginner Equipment Kit",
          columns: ["Item", "Recommendation", "Est. Cost"],
          rows: [
            { Item: "Rod + reel combo", Recommendation: "6'6\"–7' medium spinning combo (Ugly Stik, Penn, Daiwa, Shimano)", "Est. Cost": "$50–100" },
            { Item: "Spare reel", Recommendation: "2500 size spinning, pre-spooled with 8 lb mono", "Est. Cost": "$40–80" },
            { Item: "Tackle box", Recommendation: "Plano 2–3 tray", "Est. Cost": "$20–40" },
            { Item: "Pliers / hook remover", Recommendation: "Mustad or Piscifun", "Est. Cost": "$10–20" },
            { Item: "Line cutters", Recommendation: "Knipex or similar", "Est. Cost": "$10" },
            { Item: "Bobbers, hooks, sinkers, swivels", Recommendation: "Assorted starter pack", "Est. Cost": "$20–30" },
            { Item: "Net", Recommendation: "Rubber or coated mesh (bass/panfish size)", "Est. Cost": "$20–30" },
          ],
        },
      ],
    },
  ],
};
