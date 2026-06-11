// Buckets the free-form `region` strings used in locations.ts into a small
// set of broad regions for filtering. To add a new bucket, add a prefix
// check below — order matters (more specific prefixes first).
export const REGION_GROUPS = [
  "Upper Peninsula",
  "NW Lower",
  "NE Lower",
  "N. Lower",
  "SW Lower",
  "SE Lower",
  "W. Lower",
  "Other",
] as const;

export type RegionGroup = (typeof REGION_GROUPS)[number];

export function regionGroup(region: string): RegionGroup {
  if (region.startsWith("UP")) return "Upper Peninsula";
  if (region.startsWith("NW Lower")) return "NW Lower";
  if (region.startsWith("NE Lower")) return "NE Lower";
  if (region.startsWith("N. Lower")) return "N. Lower";
  if (region.startsWith("SW Lower")) return "SW Lower";
  if (region.startsWith("SE Lower") || region.startsWith("SE Michigan")) return "SE Lower";
  if (region.startsWith("W. Lower")) return "W. Lower";
  return "Other";
}
