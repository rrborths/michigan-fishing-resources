import { GuidePage } from "./types";
import { FOUNDATIONS_PAGE } from "./foundations";
import { GEAR_PAGE } from "./gear";
import { LINE_AND_TACKLE_PAGE } from "./line-and-tackle";
import { TECHNIQUES_PAGE } from "./techniques";
import { STRATEGIES_PAGE } from "./strategies";
import { REGULATIONS_PAGE } from "./regulations";
import { CLEANING_PAGE } from "./cleaning";
import { ICE_FISHING_PAGE } from "./ice-fishing";
import { BOAT_SAFETY_PAGE } from "./boat-safety";
import { TIPS_PAGE } from "./tips";

// Master list of all guide (article-style) pages, in the order they should
// appear in navigation. To add a new guide page:
//   1. Create src/data/your-new-guide.ts following the GuidePage shape in types.ts
//   2. Import it above and add it to GUIDE_PAGES below
// The page will automatically appear in nav and be routable at /guides/[id].
export const GUIDE_PAGES: GuidePage[] = [
  FOUNDATIONS_PAGE,
  GEAR_PAGE,
  LINE_AND_TACKLE_PAGE,
  TECHNIQUES_PAGE,
  STRATEGIES_PAGE,
  REGULATIONS_PAGE,
  ICE_FISHING_PAGE,
  BOAT_SAFETY_PAGE,
  CLEANING_PAGE,
  TIPS_PAGE,
];

export function getGuidePage(id: string): GuidePage | undefined {
  return GUIDE_PAGES.find((page) => page.id === id);
}
