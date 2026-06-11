import { GuidePage } from "./types";

// Michigan fishing licenses, regulations, and key dates.
// IMPORTANT: license fees and rules change annually. Verify at michigan.gov/dnr.

export const REGULATIONS_PAGE: GuidePage = {
  id: "regulations",
  title: "Licenses & Regulations",
  kidTitle: "Rules of Fishing",
  description:
    "Everything you need to know about getting licensed and following Michigan's fishing rules. Always confirm current-year details at michigan.gov/dnr.",
  sections: [
    {
      id: "license-basics",
      title: "Michigan Fishing License Basics",
      kidTitle: "Do You Need a License?",
      body: [],
      list: [
        "All anglers age 17 and older need a valid fishing license.",
        "Licenses are available online at michigan.gov/dnr, at DNR offices, bait shops, and sporting goods stores.",
        "An annual license is valid from March 1 through March 31 of the following year.",
        "Short-term options (1-day, 3-day, and 7-day) are available for visitors or anyone trying the sport out.",
      ],
      kidBody: [
        "If you're under 17, you don't need a license at all! Adults need to buy one before fishing.",
      ],
    },
    {
      id: "license-types-costs",
      title: "License Types & Approximate Costs",
      kidTitle: "License Costs",
      body: [
        "Fees are set annually. The figures below reflect 2024 pricing. Always verify current pricing at michigan.gov/dnr before purchasing.",
      ],
      tables: [
        {
          id: "license-costs-table",
          title: "License Types & Approximate Costs (2024)",
          columns: ["Type", "Approx. Cost (2024)", "Notes"],
          rows: [
            { Type: "Resident annual", "Approx. Cost (2024)": "~$26", Notes: "Michigan residents" },
            { Type: "Non-resident annual", "Approx. Cost (2024)": "~$76", Notes: "Higher fee" },
            { Type: "Senior annual (65+)", "Approx. Cost (2024)": "~$11", Notes: "Reduced rate" },
            { Type: "Disabled veteran", "Approx. Cost (2024)": "Free or reduced", Notes: "Check DNR" },
            { Type: "Youth (under 17)", "Approx. Cost (2024)": "Free", Notes: "No license required" },
            { Type: "1-day", "Approx. Cost (2024)": "~$10", Notes: "Visitor / trial day" },
            { Type: "3-day", "Approx. Cost (2024)": "~$19", Notes: "Visitor / trial" },
            { Type: "7-day", "Approx. Cost (2024)": "~$28", Notes: "Visitor / trial" },
          ],
        },
      ],
    },
    {
      id: "special-permits",
      title: "Special Permits & Stamps",
      kidTitle: "Special Permits",
      body: [],
      list: [
        "The standard fishing license is your base permit for nearly everything.",
        "Michigan does **not** require a separate trout or salmon stamp, unlike some neighboring states.",
        "Some Great Lakes tributaries may require additional permits for certain species — check the current Michigan Fishing Guide (the DNR's annual publication).",
      ],
    },
    {
      id: "critical-regulations",
      title: "Critical Regulations to Know",
      kidTitle: "Important Rules",
      body: [],
      list: [
        "**Daily possession limits** — the number of fish per species you may keep per day; walleye, pike, bass, and trout/salmon have specific limits by water body.",
        "**Size limits** — minimum (and sometimes maximum) lengths, especially for walleye, pike, and trout.",
        "**Slot limits** — fish within a certain size range must be released; common for walleye and bass.",
        "**Seasons** — trout and salmon have specific open seasons on individual streams.",
        "**Bait restrictions** — some trout streams ban live bait, require single hooks, or restrict tackle.",
        "**Invasive species rules** — never transport live baitfish between water bodies, and dispose of unused bait properly.",
        "**Culling rules** — vary by species; understand them before sorting fish in your livewell.",
      ],
    },
    {
      id: "free-fishing-weekends",
      title: "Free Fishing Weekends",
      kidTitle: "Free Fishing Weekends",
      body: [
        "Michigan designates two Free Fishing Weekends each year — typically one in February (ice fishing) and one in late June. No license is required, making it the perfect time to try the sport. Check the DNR calendar at michigan.gov/dnr for current-year dates.",
      ],
      kidBody: [
        "Twice a year, Michigan lets EVERYONE fish for free — no license needed! It's a great time to bring a friend who's never fished before.",
      ],
    },
    {
      id: "trout-opener",
      title: "The Michigan Trout Opener",
      kidTitle: "Opening Day for Trout",
      body: [
        "The last Saturday of April marks the traditional Michigan inland trout season opener — one of the most anticipated events on the Michigan fishing calendar.",
      ],
      list: [
        "Many inland rivers and streams are closed to trout fishing before opening day. A stream that looks perfect in early April may be off-limits until the opener — always check the current DNR regulations booklet for the specific water you plan to fish.",
        "Some waters have year-round trout fishing — stocked lakes, designated stretches of larger rivers, and certain Lower Peninsula streams may open earlier or stay open all year. Check the annual DNR Fishing Guide for each water body.",
        "The Upper Peninsula opener also falls on the last Saturday of April for most waters, but some UP waters have different dates for specific species — verify for every water you intend to fish.",
        "Popular access points on well-known rivers (Au Sable, Boardman, Jordan) are crowded on opening day. Arrive before dawn or fish a less-traveled stretch.",
        "Cold, high, stained water after snowmelt is common in late April. Slow presentations and bottom-bounced bait often outperform spinners.",
        "Bring layers — April mornings in Michigan can be near freezing, especially in the UP and northern Lower Peninsula.",
        "Opening day is not always the best day. The second or third week of May, when temperatures stabilize, often produces better results on wild fish.",
      ],
    },
    {
      id: "stocked-vs-wild-trout",
      title: "Stocked vs. Wild Trout",
      kidTitle: "Stocked vs Wild Trout",
      body: [
        "The DNR stocks thousands of rainbow and brown trout in the weeks before and after the opener, particularly in rivers near population centers. These fish are eager biters and perfect for beginners. Wild, stream-born trout — especially Au Sable browns and UP brook trout — are more wary and reward patience and stealth.",
      ],
    },
    {
      id: "official-info",
      title: "Where to Find Official Information",
      kidTitle: "Where to Look It Up",
      body: [],
      list: [
        "**michigan.gov/dnr** — official regulations, license portal, and weekly fishing reports.",
        "**Michigan Fishing Guide** (DNR annual digest) — printable PDF, free.",
        "**DNR Customer Service Centers** — phone help for regulation questions.",
        "**Local tackle shops** — practical, current interpretation of what's biting and legal.",
        "Regulations, limits, seasons, and gear rules change annually — always confirm the current year's rules before every trip.",
      ],
    },
  ],
};
