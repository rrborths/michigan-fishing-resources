import { GuidePage } from "./types";

// Strategy guide for reading water and fishing lakes, rivers, and streams.

export const STRATEGIES_PAGE: GuidePage = {
  id: "strategies",
  title: "Strategies for Lakes, Rivers & Streams",
  kidTitle: "Fishing Strategies",
  description:
    "How to read the water, where fish hold by season, and water-specific tactics for lakes, rivers, and streams.",
  sections: [
    {
      id: "reading-water",
      title: "Reading Water Like a Map",
      kidTitle: "Reading the Water",
      body: [
        "**Structure** refers to bottom composition changes — weedlines, drop-offs, points, humps, reefs, sunken timber, and boulder piles. **Cover** refers to vertical elements fish hide near — standing timber, docks, piers, overhanging trees, weed tops, and bridge pilings.",
        "In summer, look for the thermocline — the layer where temperature drops sharply. Predators often hold just above it, where oxygen and comfortable temperatures meet an easy ambush point.",
      ],
      kidBody: [
        "Fish like to hang out near things — drop-offs, weeds, logs, and docks. Find those spots and you've found where the fish are likely hiding!",
      ],
    },
    {
      id: "lake-strategy",
      title: "Lake Strategy",
      kidTitle: "Fishing in Lakes",
      body: [],
      tables: [
        {
          id: "lake-seasonal-table",
          title: "Seasonal Patterns — Lakes",
          columns: ["Season", "Fish Location", "Technique"],
          rows: [
            { Season: "Ice-out / early spring", "Fish Location": "Shallow warming coves", Technique: "Slow-rolled jigs, jerkbaits, live bait under a bobber" },
            { Season: "Spawn (April–June)", "Fish Location": "Beds in shallow water (bass); tributary mouths (walleye)", Technique: "Soft plastics, crankbaits; respect spawning fish" },
            { Season: "Summer", "Fish Location": "Deeper structure, thermocline, weed edges", Technique: "Drop-shot, jigging, deep crankbaits; topwater at dawn/dusk" },
            { Season: "Fall", "Fish Location": "Push shallow to feed before winter", Technique: "Crankbaits, spinnerbaits, jerkbaits, topwater" },
          ],
        },
      ],
      list: [
        "**Fish the corners** — points, weedline bends, and shoreline transitions concentrate fish.",
        "**Match depth to time of day** — fish move shallower in low light and deeper in bright sun.",
        "**Use the wind** — wind-blown banks warm faster and stack baitfish.",
        "**Cover water** — if you haven't had a bite in 15–20 minutes, move.",
      ],
    },
    {
      id: "river-strategy",
      title: "River Strategy",
      kidTitle: "Fishing in Rivers",
      body: [
        "Current is everything. River fish position themselves where the current brings food to them while they conserve energy.",
      ],
      kidBody: [
        "Fish in rivers like to sit in spots where the moving water brings food right to them, without having to work hard to swim against the current.",
      ],
      list: [
        "**Inside bends** — deeper, slower water; good for catfish and walleye.",
        "**Outside bends** — current pushes against the bank, creating deep holes below.",
        "**Riffles** — shallow, oxygen-rich water; great for trout.",
        "**Pools** — deep resting and ambush zones.",
        "**Tributary mouths** — mixing water where walleye stack up in spring.",
        "**Tail-outs below dams** — hold walleye, steelhead, and catfish.",
        "**Log jams, boulder piles, and undercut banks** — high-percentage cover everywhere.",
      ],
    },
    {
      id: "drift-fishing-technique",
      title: "Drift Fishing Technique",
      kidTitle: "Drift Fishing",
      body: [],
      list: [
        "Cast slightly upstream and across the current.",
        "Let the rig tumble naturally at the speed of the current.",
        "Keep the rod tip low and feel for ticks on the bottom.",
        "Re-cast with adjustments until you find where the fish are holding.",
      ],
    },
    {
      id: "steelhead-tactics",
      title: "Steelhead Tactics",
      kidTitle: "Steelhead Fishing",
      body: [],
      list: [
        "**Float fishing** — a spawn sack or roe bag suspended under a slip bobber.",
        "**Bottom bouncing** — a spawn sac fished with a slinky weight along the bottom.",
        "**Centerpin / drift fishing** — long rods and light line for a natural drift.",
        "**Plug pulling** — Flatfish or Mag Lip lures worked behind the boat or on a long line.",
      ],
    },
    {
      id: "stream-strategy",
      title: "Stream & Creek Strategy (Trout)",
      kidTitle: "Fishing Small Streams",
      body: [
        "Small trout streams reward stealth more than any other water type. Approach from downstream, stay low and quiet, and cast upstream so your bait or fly drifts naturally back toward you.",
        "Focus on pools, undercut banks, log jams, root wads, riffle outlets, and shade-current edges. Gear: an ultralight rod, 4 lb mono or fluorocarbon, #8–#14 hooks, and worms, salmon eggs, or small spinners.",
        "Respect the bank — wild trout streams are fragile ecosystems.",
      ],
      kidBody: [
        "On small streams, walk quietly and stay low so the trout don't see you coming! Cast upstream and let your bait float naturally toward you.",
      ],
    },
    {
      id: "water-type-comparison",
      title: "Water Type Comparison",
      kidTitle: "Lakes vs Rivers vs Streams",
      body: [],
      tables: [
        {
          id: "water-comparison-table",
          title: "Water Type Comparison",
          columns: ["Factor", "Lakes", "Rivers", "Streams"],
          rows: [
            { Factor: "Current", Lakes: "None to minimal", Rivers: "Moderate to strong", Streams: "Light to moderate" },
            { Factor: "Depth", Lakes: "Varies — shallow to 100+ ft", Rivers: "Generally shallower, variable", Streams: "Mostly shallow" },
            { Factor: "Visibility", Lakes: "Often clearer in north", Rivers: "Variable, often stained", Streams: "Usually very clear" },
            { Factor: "Cover", Lakes: "Weeds, docks, drop-offs", Rivers: "Logjams, bridges, current breaks", Streams: "Undercut banks, root wads, pools" },
            { Factor: "Best technique", Lakes: "Casting, jigging, trolling", Rivers: "Drift fishing, casting", Streams: "Upstream casting, natural drift" },
            { Factor: "Season focus", Lakes: "Spring through fall", Rivers: "Year-round (species dependent)", Streams: "Spring through fall" },
            { Factor: "Beginner ease", Lakes: "★★★★★", Rivers: "★★★", Streams: "★★★★" },
          ],
        },
      ],
    },
    {
      id: "weather-cheat-sheet",
      title: "Weather and Time-of-Day Cheat Sheet",
      kidTitle: "Weather & Fish Behavior",
      body: [],
      tables: [
        {
          id: "weather-table",
          title: "Weather and Time-of-Day Cheat Sheet",
          columns: ["Condition", "Fish Behavior"],
          rows: [
            { Condition: "Stable, sunny", "Fish Behavior": "Predators sit slightly deeper; fish early or late" },
            { Condition: "Overcast", "Fish Behavior": "Fish roam shallower, all day" },
            { Condition: "Light rain", "Fish Behavior": "Often excellent; surface activity rises" },
            { Condition: "Falling barometer", "Fish Behavior": "Pre-front feeding; fish turn aggressive" },
            { Condition: "Rising barometer", "Fish Behavior": "Post-front; tougher bite, fish slower" },
            { Condition: "Dawn & dusk", "Fish Behavior": "Peak feeding for most species" },
            { Condition: "Midnight–4 AM (summer)", "Fish Behavior": "Best catfish hours" },
          ],
        },
      ],
    },
  ],
};
