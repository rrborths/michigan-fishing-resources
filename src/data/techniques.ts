import { GuidePage } from "./types";

// Bait, lures, foundational techniques, hook-setting, landing fish, and fly fishing.

export const TECHNIQUES_PAGE: GuidePage = {
  id: "bait-and-techniques",
  title: "Bait & Techniques",
  kidTitle: "Bait & How to Fish",
  description:
    "What to put on your hook, which lures to throw, and the core techniques that catch fish in Michigan lakes, rivers, and streams.",
  sections: [
    {
      id: "live-bait",
      title: "Live Bait",
      kidTitle: "Live Bait",
      body: [
        "Live bait is the most reliable way to catch fish, especially when you're starting out. Keep it fresh and lively — a sluggish minnow or worm catches far fewer fish.",
      ],
      tables: [
        {
          id: "live-bait-table",
          title: "Live Bait Guide",
          columns: ["Bait", "Best For", "Storage Tips"],
          rows: [
            { Bait: "Nightcrawlers", "Best For": "Bluegill, perch, bass, walleye, catfish", "Storage Tips": "Cool aerated container, fresh bedding" },
            { Bait: "Minnows (shiners, fatheads)", "Best For": "Pike, bass, walleye, crappie", "Storage Tips": "Aerated bucket or frequent water changes" },
            { Bait: "Leeches", "Best For": "Walleye, bass, pike", "Storage Tips": "Keep cool, change water often" },
            { Bait: "Crayfish (craws)", "Best For": "Smallmouth, catfish, pike", "Storage Tips": "Cool damp burlap, never in standing water" },
            { Bait: "Spawn sacs / skein", "Best For": "Steelhead, salmon", "Storage Tips": "Refrigerate; fresh-bought only" },
            { Bait: "Salmon eggs (roe bags)", "Best For": "Trout, steelhead", "Storage Tips": "Refrigerate" },
            { Bait: "Grasshoppers & crickets", "Best For": "Bluegill, brook trout (summer)", "Storage Tips": "Store cool with food" },
            { Bait: "Wax worms & mousies", "Best For": "Panfish", "Storage Tips": "Refrigerate" },
          ],
        },
      ],
    },
    {
      id: "cut-and-prepared-bait",
      title: "Cut Bait & Prepared Baits",
      kidTitle: "Other Baits to Try",
      body: [],
      list: [
        "**Cut shad, sucker, or chub** — catfish, pike",
        "**Chicken liver** — catfish (treble rig, refresh often)",
        "**Stink bait / dip bait** — channel cats in rivers",
        "**Dough balls / PowerBait** — stocked trout in lakes and ponds",
        "**Maggots (spikes)** — panfish, especially ice fishing",
      ],
    },
    {
      id: "artificial-lures",
      title: "Artificial Lures — A Starter Lineup",
      kidTitle: "Lures to Try",
      body: [
        "If you're building a lure collection, work down this list in order. The first three cover the vast majority of situations a beginner will face.",
      ],
      list: [
        "**1. Inline spinners** (Mepps, Panther Martin, Rooster Tail) — sizes #2–#5 for bluegill, trout, and bass. The best first lure.",
        "**2. Soft plastics** (worms, grubs, tubes) — bass, walleye, panfish; green pumpkin, black, and white are the most universal colors.",
        "**3. Jigheads + minnow-imitating plastics** — covers nearly every species and depth.",
        "**4. Crankbaits** (squarebill, medium divers) — bass, pike.",
        "**5. Spoons** (Kastmaster, Little Cleo) — pike, salmon, trout, bass.",
        "**6. Topwater plugs** (poppers, walk-the-dog) — bass in low light.",
        "**7. Jerkbaits** — walleye and bass in cold water.",
        "**8. Bucktail jigs** — smallmouth, pike, walleye.",
      ],
    },
    {
      id: "color-quick-reference",
      title: "Color Quick Reference",
      kidTitle: "What Color Should You Use?",
      body: [],
      tables: [
        {
          id: "color-table",
          title: "Color Quick Reference",
          columns: ["Condition", "Best Colors"],
          rows: [
            { Condition: "Stained water", "Best Colors": "Chartreuse, orange, firetiger" },
            { Condition: "Clear water", "Best Colors": "Natural (shad, perch, bluegill patterns), white, silver" },
            { Condition: "Low light / overcast", "Best Colors": "Black, dark blue" },
            { Condition: "Match the hatch", "Best Colors": "Copy the color and size of the baitfish or insects you see" },
          ],
        },
      ],
    },
    {
      id: "foundational-techniques",
      title: "Foundational Techniques",
      kidTitle: "Ways to Fish",
      body: [
        "Every angler should be comfortable with these seven techniques. Most days on the water will use at least two or three of them.",
      ],
      tables: [
        {
          id: "techniques-table",
          title: "Foundational Techniques",
          columns: ["Technique", "Description", "Best For"],
          rows: [
            { Technique: "Still fishing", Description: "Cast out, hold still, watch the rod tip or a bell", "Best For": "Catfish, walleye, perch, sturgeon" },
            { Technique: "Bobber fishing", Description: "Set the depth and watch the float", "Best For": "Bluegill, crappie, perch, trout, bass" },
            { Technique: "Casting & retrieving", Description: "Vary speed, depth, pause, and twitch", "Best For": "Bass, pike, trout, walleye" },
            { Technique: "Jigging", Description: "Lift and lower the rod tip from the bottom", "Best For": "Panfish, walleye, bass, perch" },
            { Technique: "Drift fishing", Description: "Let the current carry the bait naturally", "Best For": "Walleye, steelhead, salmon, catfish" },
            { Technique: "Trolling", Description: "Pull lures behind a moving boat", "Best For": "Great Lakes trout/salmon, walleye" },
            { Technique: "Fly fishing", Description: "A weighted line delivers an artificial fly", "Best For": "Trout, smallmouth (Year 2+)" },
          ],
        },
      ],
    },
    {
      id: "setting-the-hook",
      title: "How to Set the Hook",
      kidTitle: "Setting the Hook",
      body: [],
      list: [
        "**Soft bite (walleye, trout)** — reel down to feel tension, then sweep the rod.",
        "**Hard bite (bass, pike, catfish)** — reel once to tighten the line, then sweep firmly.",
        "**Bobber goes down** — wait one second, then sweep the rod.",
      ],
    },
    {
      id: "landing-a-fish",
      title: "How to Land a Fish",
      kidTitle: "Landing Your Catch",
      body: [],
      list: [
        "Keep the rod bent and the line tight — never let slack develop.",
        "Reel steadily; let the fish run when it wants to.",
        "Once it's alongside, lip-grip bass (thumb in mouth, fingers under jaw) or use a net.",
        "For pike and muskie: always use a wire leader and a hook remover or long-nose pliers.",
      ],
    },
    {
      id: "fly-fishing",
      title: "Fly Fishing",
      kidTitle: "Fly Fishing (For Later!)",
      body: [
        "Fly fishing is usually a Year 2+ pursuit, but it's culturally central to Michigan fishing. What makes it different: the line itself has weight, rather than the lure carrying the line out.",
        "Why it matters in Michigan: the Au Sable River's 'Holy Water' stretch is fly/lure-only and catch-and-release. The Boardman, Jordan, Pere Marquette, Muskegon, and Betsie rivers all have excellent fly-fishing stretches.",
      ],
      kidBody: [
        "Fly fishing uses a special heavy line and a fake bug (a 'fly') instead of a regular lure. It's a fun skill to learn once you've got the basics down — maybe in your second year of fishing!",
      ],
      list: [
        "**Step 1:** Take a beginner fly fishing clinic through a Trout Unlimited chapter, fly shop, or outfitter (~$75–150).",
        "**Step 2:** Get a basic 9-ft 5-weight outfit (rod, reel, line) — about $100–200 from Redington, Echo, or Orvis.",
        "**Step 3:** Start with a basic dry fly (Adams #14, Elk Hair Caddis #14) on a small panfish or stocked trout stream.",
        "Contact the Au Sable chapter of Trout Unlimited or a fly shop in Grayling or Traverse City for instruction.",
      ],
    },
  ],
};
