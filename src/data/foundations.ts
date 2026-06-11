import { GuidePage } from "./types";

// Foundations: why Michigan is special, the core principles behind all
// fishing success, a beginner roadmap, and where species live in the
// water column / which species to start with.

export const FOUNDATIONS_PAGE: GuidePage = {
  id: "foundations",
  title: "Overview of Michigan Fishing",
  kidTitle: "Getting Started",
  description:
    "What makes Michigan a premier fishing destination, the five core principles behind every fishing success, and a roadmap for your first few years.",
  sections: [
    {
      id: "why-michigan",
      title: "Why Michigan Is a Premier Freshwater Destination",
      kidTitle: "Why Michigan Is Awesome for Fishing",
      body: [],
      list: [
        "More freshwater coastline than any U.S. state except Alaska — over 3,200 miles of Great Lakes shoreline.",
        "Roughly 11,000 inland lakes and 36,000 miles of rivers and streams. Fishing opportunity within ~15 minutes of almost any inland location.",
        "Diverse species mix: warmwater panfish, coolwater bass and pike, coldwater trout and salmon.",
        "Strong public access network: state parks, DNR boat launches, walk-in fishing sites, and piers.",
        "Two distinct regions: the **Lower Peninsula** (more populated, warmer lakes, longer season) and the **Upper Peninsula** (cooler, wilder, exceptional trout and salmon).",
      ],
      kidBody: [
        "Michigan is surrounded by four Great Lakes and has thousands of smaller lakes and rivers too. No matter where you live in Michigan, great fishing is close by!",
      ],
    },
    {
      id: "core-principles",
      title: "The Five Core Fishing Principles",
      kidTitle: "5 Big Ideas for Catching Fish",
      body: [
        "Before tackle, species, or technique, fishing is built on a small set of cause-and-effect rules. Every recommendation in this guide traces back to these.",
      ],
      kidBody: [
        "These five ideas explain almost everything about why fish bite — or don't!",
      ],
      list: [
        "**1. Match the prey, not the predator.** Fish don't bite lures — they bite what those lures resemble. A 14-inch walleye is eating a 3-inch shad, not the giant plug dragged past its face. Downsize before you upsize.",
        "**2. Find where comfort zone meets food zone.** Every species has preferred temperature, oxygen, cover, and depth. Find the overlap, and you'll find fish.",
        "**3. Presentation beats equipment.** A well-presented worm on a $30 rod catches more fish than a sloppy rig on a $300 rod.",
        "**4. Light and pressure dictate depth.** Bright sun pushes fish deeper or into shade; low light draws them shallow. Falling barometric pressure triggers feeding.",
        "**5. Stealth and patience close the deal.** Line noise, shadow, splash, and vibration push fish away. The angler who is quiet and still catches more.",
      ],
    },
    {
      id: "beginner-roadmap",
      title: "Skill Level: Beginner Roadmap",
      kidTitle: "Your Fishing Journey",
      body: [],
      tables: [
        {
          id: "beginner-roadmap-table",
          title: "Skill Level: Beginner Roadmap",
          columns: ["Year", "Focus"],
          rows: [
            { Year: "Year 1", Focus: "Panfish, stocked trout, small bass. Learn knots, rigging, casting, and basic reading of water." },
            { Year: "Year 2", Focus: "Targeting bass, pike, walleye. Learn electronics, seasonal patterns, and multi-species trips." },
            { Year: "Year 3+", Focus: "Trout, steelhead, salmon, muskie. Fly fishing, trolling, and advanced tactics." },
          ],
        },
      ],
    },
    {
      id: "water-column",
      title: "Where Each Species Lives in the Water Column",
      kidTitle: "Where Fish Hang Out",
      body: [],
      list: [
        "**Surface/top:** Bass (topwater), pike (topwaters in fall), trout (dry flies, surface lures).",
        "**Mid-column:** Bass, walleye (low light), crappie, steelhead, salmon.",
        "**Bottom:** Catfish, carp, walleye (bright sun), perch, drum, sturgeon.",
      ],
      kidBody: [
        "Some fish like to swim near the top, some like the middle, and some like to hang out near the bottom. Knowing where a fish likes to be helps you know where to drop your bait!",
      ],
    },
    {
      id: "best-starter-species",
      title: "Best Starter Species for Beginners",
      kidTitle: "Best Fish to Start With",
      body: [
        "Start with bluegill, crappie, perch, and stocked rainbow trout. Move to bass and pike next. Save walleye, steelhead, and muskie for Year 2.",
      ],
      kidBody: [
        "Bluegill are the perfect first fish — they're everywhere, they bite easily, and they're a blast to catch on light tackle!",
      ],
      tables: [
        {
          id: "best-starter-species-table",
          title: "Best Starter Species for Beginners",
          columns: ["Rank", "Species", "Why Start Here"],
          rows: [
            { Rank: "1", Species: "Bluegill", "Why Start Here": "Abundant everywhere, eager to bite, perfect for learning casting and knots" },
            { Rank: "2", Species: "Stocked Rainbow Trout", "Why Start Here": "Forgiving, found in put-and-take waters, great for river skills" },
            { Rank: "3", Species: "Yellow Perch", "Why Start Here": "Willing biters, schooled (catch more than one!), excellent table fare" },
            { Rank: "4", Species: "Crappie", "Why Start Here": "Slightly trickier, but fun and rewarding once you find schools" },
            { Rank: "5", Species: "Largemouth Bass", "Why Start Here": "Strong, exciting, and a gateway to predator fishing" },
            { Rank: "6", Species: "Smallmouth Bass", "Why Start Here": "A Michigan classic — tougher but very rewarding" },
          ],
        },
      ],
    },
  ],
};
