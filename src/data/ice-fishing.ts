import { GuidePage } from "./types";

// Ice fishing: safety, gear, species, and Michigan-specific regulations.

export const ICE_FISHING_PAGE: GuidePage = {
  id: "ice-fishing",
  title: "Ice Fishing in Michigan",
  kidTitle: "Ice Fishing!",
  description:
    "Ice fishing is not a niche activity in Michigan — it's a full season of its own, running roughly December through March depending on location. Michigan is one of the premier ice fishing states in the country.",
  sections: [
    {
      id: "ice-safety",
      title: "Ice Safety First",
      kidTitle: "Staying Safe on the Ice",
      body: [
        "Never assume ice is safe. Check thickness every time, at multiple points, before venturing out. Early and late season ice is especially unpredictable.",
        "Clear blue ice is strongest. White or opaque ice (formed from snow) is weaker for a given thickness. Ice near inflows, outflows, docks, and aerators is often thinner than the surrounding ice.",
      ],
      kidBody: [
        "Always ask an adult to check the ice before walking out — never go on ice alone, and never assume it's thick enough just because it looks frozen!",
      ],
      tables: [
        {
          id: "ice-thickness-table",
          title: "Ice Thickness Guide",
          columns: ["Ice Thickness", "What It Supports"],
          rows: [
            { "Ice Thickness": "Less than 4\"", "What It Supports": "Stay off. No exceptions." },
            { "Ice Thickness": "4\"", "What It Supports": "One person on foot" },
            { "Ice Thickness": "5–6\"", "What It Supports": "Small group (spaced out)" },
            { "Ice Thickness": "7–8\"", "What It Supports": "Snowmobile or ATV" },
            { "Ice Thickness": "10–12\"", "What It Supports": "Small vehicle (extreme caution)" },
            { "Ice Thickness": "15\"+", "What It Supports": "Medium-sized vehicle" },
          ],
          note: "Clear blue ice is strongest. White/opaque ice (formed from snow) is weaker for a given thickness. Ice near inflows, outflows, docks, and aerators is often thinner than surrounding ice.",
        },
      ],
      list: [
        "**Ice picks (2)** — worn around your neck. If you break through, jab them into solid ice and pull yourself out horizontally.",
        "**Throw rope** — for rescuing others from shore.",
        "**Ice spud or chisel** — a heavy bar to test ice ahead of you as you walk out.",
        "Always go with a partner, especially early and late in the season.",
        "Tell someone where you're going and when to expect you back.",
      ],
    },
    {
      id: "basic-equipment",
      title: "Basic Equipment",
      kidTitle: "What You Need",
      body: [],
      tables: [
        {
          id: "ice-equipment-table",
          title: "Basic Ice Fishing Equipment",
          columns: ["Item", "What to Know"],
          rows: [
            { Item: "Ice auger (hand or power)", "What to Know": "A 6\"–8\" diameter hole works for most species. Hand augers (~$40–80) are fine for beginners. Power augers drill faster but cost more. Drill 5–8 holes when you arrive and move between them." },
            { Item: "Ice fishing rod", "What to Know": "Short (24\"–36\") spinning rods. Pair with a small reel (1000 size) and 4–6 lb mono or fluorocarbon." },
            { Item: "Tip-ups", "What to Know": "A wooden or plastic frame with a spool of line and a flag trigger. Set bait at depth; when a fish takes it, the flag pops up. Michigan allows up to 3 lines per person." },
            { Item: "Jig stick", "What to Know": "An even shorter rod (12\"–18\") for micro-jigging directly under the hole." },
            { Item: "Tackle", "What to Know": "Teardrops, tungsten jigs (#8–#14), wax worms, spikes (maggots), small minnows. Go smaller than you think you need." },
            { Item: "Ice scoop / skimmer", "What to Know": "Clears slush from the hole. Essential and inexpensive (~$8)." },
            { Item: "5-gallon bucket", "What to Know": "Doubles as a seat. A practical, cheap starting point." },
          ],
        },
      ],
    },
    {
      id: "shelters-comfort",
      title: "Shelters and Comfort",
      kidTitle: "Staying Warm",
      body: [
        "You do not need a shelter to ice fish, but it makes cold days far more enjoyable and extends your season into the coldest months.",
      ],
      list: [
        "**Pop-up/flip shelters** (Clam, Eskimo, Frabill) — single or two-person tents that set up in minutes. ~$100–300 for a basic model.",
        "**Propane heater** — a Mr. Heater Buddy (~$80) is standard. Always crack a window or door for ventilation; never run a heater in a fully sealed space.",
        "**Layered clothing** is the most important comfort tool: insulated, waterproof boots rated to -20°F or colder, wool or synthetic base layers, and hand warmers for pockets.",
      ],
    },
    {
      id: "best-species-ice",
      title: "Best Species and Where to Find Them",
      kidTitle: "What You Can Catch",
      body: [],
      tables: [
        {
          id: "ice-species-table",
          title: "Best Species and Where to Find Them",
          columns: ["Species", "Depth", "Technique", "Best Time of Day"],
          rows: [
            { Species: "Bluegill & Sunfish", Depth: "8–20 ft (weed edges, flats)", Technique: "Tiny teardrop + wax worm; micro-jig", "Best Time of Day": "Morning and late afternoon" },
            { Species: "Yellow Perch", Depth: "15–30 ft (open flats, sand/gravel)", Technique: "Perch spreader rig with minnow head or worm", "Best Time of Day": "Mid-morning" },
            { Species: "Crappie", Depth: "10–25 ft (suspended near wood/brush)", Technique: "Minnow under tip-up; jig spoon", "Best Time of Day": "Evening and early night" },
            { Species: "Walleye", Depth: "15–35 ft (deeper structure, humps)", Technique: "Jigging spoon tipped with minnow; tip-up with sucker chunk", "Best Time of Day": "Dusk and dawn — often night" },
            { Species: "Northern Pike", Depth: "3–12 ft (weed edges, shallows)", Technique: "Large tip-up with 6–8\" sucker minnow", "Best Time of Day": "All day; early morning best" },
            { Species: "Lake Trout", Depth: "40–80+ ft (deep, cold, clear lakes)", Technique: "Heavy jigging spoon; tip-up with cisco or smelt", "Best Time of Day": "Morning" },
            { Species: "Burbot (Eelpout)", Depth: "30–60 ft", Technique: "Dead sucker chunk on tip-up; heavy jig", "Best Time of Day": "Night (midnight–3 AM)" },
          ],
        },
      ],
      kidBody: [
        "Beginner tip: start on a mid-size lake known for panfish and perch. Drill 5–6 holes in 10–15 feet of water near a weed edge and jig a small teardrop with a wax worm. Stay mobile — catching a dozen bluegill through the ice on a cold January day is one of Michigan fishing's great experiences!",
      ],
    },
    {
      id: "ice-regulations",
      title: "Michigan Ice Fishing Regulations",
      kidTitle: "Ice Fishing Rules",
      body: [],
      list: [
        "You may use up to 3 lines while ice fishing in Michigan with a standard license. Tip-ups count as lines.",
        "Some waters have special ice fishing regulations (reduced bag limits, gear restrictions) — check the current DNR digest for your specific lake.",
        "All standard size and possession limits apply — same rules as open-water fishing.",
        "Permanent shanties left overnight on ice must be registered with your name and address, and must be removed before ice-out dates set by the DNR.",
      ],
    },
    {
      id: "free-ice-weekend",
      title: "Free Ice Fishing Weekend",
      kidTitle: "Free Ice Fishing Weekend",
      body: [
        "Michigan holds an annual Free Ice Fishing Weekend in February — no license required. It's a perfect introduction for first-timers. Check michigan.gov/dnr for current-year dates.",
      ],
    },
  ],
};
