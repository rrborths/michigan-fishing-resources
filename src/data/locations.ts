import { FishingLocation, DataTable } from "./types";

// Featured Michigan fishing locations: lakes, rivers, streams, and Great
// Lakes access points. To add a new spot, copy an existing object below.

export const LOCATIONS: FishingLocation[] = [
  // ───────────────────────────── LAKES ─────────────────────────────
  {
    id: "lake-st-clair",
    name: "Lake St. Clair",
    type: "lake",
    region: "SE Lower",
    targetSpecies: ["Smallmouth Bass", "Walleye", "Yellow Perch", "Muskellunge", "Northern Pike"],
    bestSeason: "May – October",
    access:
      "Metro Beach, St. Clair Shores, and Anchor Bay DNR launches",
    description:
      "Known as the 'smallmouth capital of the world.' Clear water rewards light line (6–8 lb), and charters are widely available.",
    kidFact:
      "Lake St. Clair is so famous for smallmouth bass that anglers travel from all over the world to fish it!",
  },
  {
    id: "higgins-lake",
    name: "Higgins Lake",
    type: "lake",
    region: "N. Lower (Roscommon Co.)",
    targetSpecies: ["Lake Trout", "Lake Whitefish", "Yellow Perch", "Cisco", "Smallmouth Bass"],
    bestSeason: "May – October (lake trout/whitefish); winter for smelt ice fishing",
    access: "North Higgins Lake State Park",
    description:
      "A deep, exceptionally clear, infertile lake. Troll with downriggers for lake trout; smelt ice fishing is iconic here.",
    kidFact:
      "Higgins Lake's water is so clear and clean you can sometimes see way down into the lake!",
  },
  {
    id: "houghton-lake",
    name: "Houghton Lake",
    type: "lake",
    region: "N. Lower (Roscommon Co.)",
    targetSpecies: ["Walleye", "Northern Pike", "Largemouth Bass", "Black Crappie", "Yellow Perch"],
    bestSeason: "April–May for walleye; winter for ice fishing",
    access: "DNR launch on the north end and the East Bay launch",
    description:
      "Michigan's largest inland lake at over 20,000 acres. Shallow with lots of vegetation, and very popular for ice fishing.",
    kidFact:
      "Houghton Lake is Michigan's biggest inland lake — it's so big you might not see the other side!",
  },
  {
    id: "torch-lake",
    name: "Torch Lake",
    type: "lake",
    region: "N. Lower (Antrim Co.)",
    targetSpecies: ["Lake Trout", "Smallmouth Bass", "Lake Whitefish", "Cisco", "Yellow Perch"],
    bestSeason: "May – October",
    access: "Sandbar public access",
    description:
      "Michigan's second-largest inland lake and exceptionally clear. Lake trout hold deep — 60–100+ ft on downriggers.",
    kidFact:
      "Torch Lake's water is so blue and clear that people compare it to the Caribbean Sea!",
  },
  {
    id: "lake-charlevoix",
    name: "Lake Charlevoix",
    type: "lake",
    region: "N. Lower (Charlevoix Co.)",
    targetSpecies: ["Smallmouth Bass", "Walleye", "Northern Pike", "Yellow Perch", "Lake Whitefish", "Largemouth Bass"],
    bestSeason: "May – October",
    access: "Young State Park launch",
    description:
      "Deep and clear with excellent structure. Connects to Lake Michigan via Round Lake.",
    kidFact:
      "Lake Charlevoix connects all the way to Lake Michigan, so big lake fish can swim in too!",
  },
  {
    id: "saginaw-bay",
    name: "Saginaw Bay",
    type: "lake",
    region: "NE Lower (Bay-Huron area)",
    targetSpecies: ["Walleye", "Yellow Perch", "Smallmouth Bass", "Northern Pike", "Steelhead"],
    bestSeason:
      "April–May walleye spawn/feed; June–Sept perch & bass; October fall walleye",
    access:
      "Bay City State Recreation Area, Linwood Beach Marina, Quanicassee, Sebewaing, Caseville",
    description:
      "Arguably the best walleye and perch fishery in the Midwest. A shallow bay averaging 10–15 ft deep, with steelhead running up the Saginaw River.",
    kidFact:
      "Saginaw Bay is one of the best places in the whole Midwest to catch walleye!",
  },

  // ───────────────────────────── RIVERS ─────────────────────────────
  {
    id: "detroit-river",
    name: "Detroit River",
    type: "river",
    region: "SE Michigan",
    targetSpecies: ["Walleye", "Yellow Perch", "Smallmouth Bass", "White Bass", "Freshwater Drum", "Channel Catfish"],
    bestSeason: "April–May walleye peak; June–Oct bass/perch/catfish",
    access:
      "Elizabeth Park, Wyandotte, Trenton, Gibraltar, and Stony Island launches",
    description:
      "Home to a world-class spring walleye run. Forms part of the U.S./Canada border with Ontario.",
    kidFact:
      "The Detroit River has one of the biggest walleye runs in the world every spring!",
  },
  {
    id: "muskegon-river",
    name: "Muskegon River",
    type: "river",
    region: "W. Lower (Mason/Newaygo Co.)",
    targetSpecies: ["Steelhead", "Salmon", "Brown Trout", "Walleye", "Northern Pike", "Smallmouth Bass", "Channel Catfish"],
    bestSeason:
      "April–May spring steelhead/walleye; Sept–Nov fall salmon/steelhead/trout",
    access: "Croton Dam, Newaygo, Bridgeton, Holton, and Muskegon State Park",
    description:
      "The tailwater below Croton Dam is one of Michigan's best year-round trout fisheries.",
    kidFact:
      "Below the Croton Dam, the water stays cool all year, so trout can live there even in summer!",
  },
  {
    id: "pere-marquette-river",
    name: "Pere Marquette River",
    type: "river",
    region: "NW Lower (Lake/Mason Co.)",
    targetSpecies: ["Steelhead", "Salmon", "Brown Trout", "Brook Trout", "Smallmouth Bass"],
    bestSeason:
      "April–May spring steelhead/brown trout; Sept–Nov fall salmon/steelhead",
    access:
      "M-37 bridge, Gleason's Landing, Dobson's Bridge, Rainbow Bend, and High Bridge",
    description:
      "A premier salmon and steelhead river, designated Wild & Scenic along its lower stretch.",
    kidFact:
      "The Pere Marquette is so special that part of it is protected as a 'Wild & Scenic River'!",
  },
  {
    id: "au-sable-river",
    name: "Au Sable River",
    type: "river",
    region: "N. Lower (Crawford/Oscoda/Alcona Co.)",
    targetSpecies: ["Brown Trout", "Brook Trout", "Rainbow Trout", "Smallmouth Bass", "Northern Pike"],
    bestSeason: "May–October trout; May–June & Sept–Oct smallmouth",
    access:
      "Burton's Landing, Whirlpool Landing, Comins Flats, and Parmalee Bridge",
    description:
      "One of America's most famous trout rivers. The 'Holy Water' section is catch-and-release, fly/lure only.",
    kidFact:
      "The Au Sable River is so famous for fly fishing that people come from all over the country to fish it!",
  },
  {
    id: "st-joseph-river",
    name: "St. Joseph River",
    type: "river",
    region: "SW Lower (Berrien/Cass Co.)",
    targetSpecies: ["Steelhead", "Salmon", "Walleye", "Smallmouth Bass", "Channel Catfish"],
    bestSeason: "Oct–April steelhead; April–May walleye; Sept–Nov salmon",
    access: "Berrien Springs, Riverview Park (Buchanan), Niles, and DNR launches",
    description:
      "A major steelhead run happens in fall and winter, with ice-out walleye fishing in March.",
    kidFact:
      "Steelhead swim up the St. Joseph River all winter long — it's a great cold-weather fishing spot!",
  },
  {
    id: "platte-river",
    name: "Platte River",
    type: "river",
    region: "NW Lower (Benzie Co.)",
    targetSpecies: ["Chinook Salmon", "Coho Salmon", "Steelhead", "Brown Trout"],
    bestSeason:
      "Late Aug–Oct Chinook; Oct–Nov coho/steelhead; April–May spring steelhead",
    access:
      "Platte River State Anadromous Fishery Area (US-31 near Honor)",
    description:
      "Famous for its September Chinook run — you can watch the DNR's egg collection operation in fall. Snagging is illegal here. The nearby Betsie River is less crowded.",
    kidFact:
      "Every fall you can watch huge salmon swim up the Platte River to lay their eggs — it's an amazing sight!",
  },

  // ───────────────────────────── STREAMS ─────────────────────────────
  {
    id: "boardman-river",
    name: "Boardman River",
    type: "stream",
    region: "NW Lower (Grand Traverse Co.)",
    targetSpecies: ["Brown Trout", "Brook Trout", "Rainbow Trout", "Steelhead"],
    bestSeason: "April–June trout; October–April steelhead",
    access:
      "Scheck's, Beitner, Keystone, and Forks DNR launches; Boardman Valley Nature Trail",
    description:
      "The lower river is a designated Blue-Ribbon Trout Stream.",
    kidFact:
      "The Boardman River runs right through Traverse City and is one of the best trout streams around!",
  },
  {
    id: "jordan-river",
    name: "Jordan River",
    type: "stream",
    region: "NW Lower (Antrim Co.)",
    targetSpecies: ["Brook Trout", "Brown Trout", "Rainbow Trout"],
    bestSeason: "April–June and September–October",
    access: "Graves Crossing, Webster Bridge, and Pinney Bridge",
    description:
      "A wild trout stream with naturally reproducing fish — typically small, 6–12 inches.",
    kidFact:
      "All the trout in the Jordan River are wild — they're born and raised right there, not stocked!",
  },
  {
    id: "pine-river-lower",
    name: "Pine River (lower)",
    type: "stream",
    region: "NW Lower (Wexford Co.)",
    targetSpecies: ["Steelhead", "Brown Trout", "Brook Trout", "Salmon"],
    bestSeason: "April–May and September–November",
    access: "Stronach Dam area and Harrietta",
    description: "A small stream with big-fish potential.",
    kidFact:
      "Even though the Pine River is small, it can hide some surprisingly big fish!",
  },
  {
    id: "paint-river",
    name: "Paint River",
    type: "stream",
    region: "UP (Iron Co.)",
    targetSpecies: ["Brook Trout", "Brown Trout", "Rainbow Trout"],
    bestSeason: "May – October",
    access: "Bridge crossings off US-2 and M-69",
    description:
      "A wild, remote-feeling trout stream with native brook trout above barriers.",
    kidFact:
      "The Paint River is way up in the Upper Peninsula and feels wild and remote!",
  },
  {
    id: "fox-river-up",
    name: "Fox River (UP)",
    type: "stream",
    region: "UP (Schoolcraft Co.)",
    targetSpecies: ["Brook Trout", "Brown Trout", "Steelhead"],
    bestSeason: "May–October trout; October–April steelhead (lower)",
    access: "Bridge and DNR sites",
    description:
      "A mix of wild and stocked trout in a remote Upper Peninsula setting.",
    kidFact:
      "The Fox River was made famous by writer Ernest Hemingway, who loved fishing there!",
  },

  // ───────────────────────────── GREAT LAKES ─────────────────────────────
  {
    id: "lake-michigan-ludington",
    name: "Lake Michigan — Ludington",
    type: "great-lake",
    region: "NW Lower (Mason Co.)",
    targetSpecies: ["Steelhead", "Salmon", "Brown Trout", "Yellow Perch", "Smallmouth Bass"],
    bestSeason:
      "April–May & Sept–Nov trout/salmon; May–Sept perch/bass",
    access:
      "Ludington State Park beach, harbor pier, and Stearns Park",
    description:
      "A famous pier and stream-mouth fishery, with the Pere Marquette and Big Sable rivers nearby.",
    kidFact:
      "You can fish right from the pier in Ludington and catch huge salmon and trout!",
  },
  {
    id: "lake-michigan-st-joseph",
    name: "Lake Michigan — St. Joseph",
    type: "great-lake",
    region: "SW Lower (Berrien Co.)",
    targetSpecies: ["Salmon", "Steelhead", "Yellow Perch", "Smallmouth Bass", "Channel Catfish", "Freshwater Drum"],
    bestSeason:
      "April–May perch; Sept–Nov salmon/steelhead/brown trout; year-round catfish/drum",
    access:
      "St. Joseph North Pier, Tiscornia Park, and Jean Klock Park",
    description:
      "An iconic 1,000+ ft pier that's a landmark for Great Lakes anglers.",
    kidFact:
      "The pier in St. Joseph is over 1,000 feet long — that's longer than three football fields!",
  },
  {
    id: "lake-huron-tawas",
    name: "Lake Huron — Tawas",
    type: "great-lake",
    region: "NE Lower (Iosco Co.)",
    targetSpecies: ["Walleye", "Steelhead", "Salmon", "Yellow Perch", "Smallmouth Bass", "Northern Pike"],
    bestSeason:
      "April–May walleye/steelhead; June–Sept perch/bass; Aug–Oct salmon",
    access: "Tawas City beach, Tawas Point, and Gateway Park pier",
    description:
      "Tawas Bay is a renowned walleye spawning area with protected water that's great for beginners.",
    kidFact:
      "Tawas Bay is calm and protected, making it a perfect spot for kids to try Great Lakes fishing!",
  },
  {
    id: "lake-superior-whitefish-point",
    name: "Lake Superior — Whitefish Point",
    type: "great-lake",
    region: "UP (Chippewa Co.)",
    targetSpecies: ["Lake Trout", "Lake Whitefish", "Steelhead", "Salmon", "Walleye", "Northern Pike"],
    bestSeason:
      "May–Sept lake trout/whitefish; spring & fall steelhead/salmon",
    access: "Whitefish Point public beach and pier",
    description:
      "One of the most remote and pristine fisheries in Michigan, with deep water close to shore.",
    kidFact:
      "Whitefish Point is one of the wildest, most remote places to fish in all of Michigan!",
  },
  {
    id: "lake-erie-monroe",
    name: "Lake Erie — Monroe / Sterling State Park",
    type: "great-lake",
    region: "SE Lower (Monroe Co.)",
    targetSpecies: ["Walleye", "Yellow Perch", "Smallmouth Bass", "Channel Catfish", "Freshwater Drum", "White Bass"],
    bestSeason:
      "April–May walleye/drum; June–Oct perch/bass/catfish",
    access: "Sterling State Park launch and shore, Bolles Harbor, and Luna Pier",
    description:
      "Shallow, warm, and productive — known for great spring walleye fishing.",
    kidFact:
      "Lake Erie is the shallowest Great Lake, which makes it warm up fast and grow lots of fish!",
  },
];

export const LOCATION_TYPES: { id: FishingLocation["type"]; label: string }[] = [
  { id: "lake", label: "Inland Lakes" },
  { id: "river", label: "Rivers" },
  { id: "stream", label: "Streams" },
  { id: "great-lake", label: "Great Lakes" },
];

export const HONORABLE_MENTIONS = [
  "Lake Gogebic (UP)",
  "Glen Lake (NW Lower)",
  "Kensington Metropark (SE Lower)",
  "Lac Vieux Desert (UP)",
  "Independence Lake (UP)",
  "Betsie River",
  "Manistee River",
  "Kalamazoo River",
  "Grand River",
  "Saginaw River",
  "Two-Hearted River (UP)",
  "Huron River (SE Lower)",
  "Coldwater River (SW Lower)",
  "Yellow Dog River (UP)",
];

// Quick-reference: where to go for a given target species.
export const SPECIES_LOCATION_MAP: DataTable = {
  id: "species-location-map",
  title: "Quick-Reference Location Map by Species",
  columns: ["Target Species", "Top Locations"],
  rows: [
    { "Target Species": "Bluegill", "Top Locations": "Almost any lake — Kensington, Fenton, any county park lake" },
    { "Target Species": "Crappie", "Top Locations": "Lake St. Clair, Saginaw Bay, Houghton Lake, Kent Lake" },
    { "Target Species": "Yellow Perch", "Top Locations": "Lake St. Clair, Saginaw Bay, Lake Erie (Monroe), Ludington pier" },
    { "Target Species": "Largemouth Bass", "Top Locations": "Kensington, Lake St. Clair, Fenton, Indian Lake, Kent Lake" },
    { "Target Species": "Smallmouth Bass", "Top Locations": "Lake St. Clair, Torch Lake, Charlevoix, Au Sable River, Jordan River" },
    { "Target Species": "Walleye", "Top Locations": "Detroit River, Saginaw Bay, Lake Erie, Houghton Lake, Tawas Bay" },
    { "Target Species": "Northern Pike", "Top Locations": "Houghton Lake, Lake St. Clair, Saginaw Bay, inland lakes" },
    { "Target Species": "Muskellunge", "Top Locations": "Lake St. Clair, Houghton Lake, Thornapple River, Lake Bellaire" },
    { "Target Species": "Channel Catfish", "Top Locations": "Saginaw, Grand, St. Joseph, Kalamazoo rivers" },
    { "Target Species": "Rainbow Trout (stocked)", "Top Locations": "Boardman, Jordan, Pine rivers; many DNR-stocked lakes" },
    { "Target Species": "Brown/Brook Trout", "Top Locations": "Au Sable, Boardman, Jordan, Paint, Fox rivers" },
    { "Target Species": "Steelhead", "Top Locations": "Muskegon, Pere Marquette, St. Joseph, Betsie, Big Manistee rivers" },
    { "Target Species": "Salmon", "Top Locations": "Pere Marquette, Muskegon, St. Joseph, Platte rivers" },
    { "Target Species": "Lake Trout", "Top Locations": "Lake Superior (Whitefish Point, Marquette), Torch Lake, Higgins Lake" },
  ],
};

// Passes and fees beyond the basic fishing license.
export const ACCESS_PASSES: DataTable = {
  id: "access-passes",
  title: "Access Passes to Know",
  columns: ["Pass", "Where to Buy", "Notes"],
  rows: [
    { Pass: "Michigan Fishing License", "Where to Buy": "michigan.gov/dnr or any bait shop", Notes: "Required for anglers 17+" },
    { Pass: "Michigan Recreation Passport", "Where to Buy": "Added at state park entry / vehicle registration", Notes: "Required to enter state parks (launches & parking)" },
    { Pass: "DNR Launch Fee", "Where to Buy": "Self-serve envelopes at inland launches", Notes: "$5–$10 typically; free at most public piers" },
    { Pass: "Tribal Permit", "Where to Buy": "Some areas near reservations", Notes: "Required for certain waters; check current DNR maps" },
  ],
};
