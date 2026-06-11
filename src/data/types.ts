// Shared TypeScript types for the Michigan Fishing Resources data layer.
// Add new species, locations, gear, etc. by following these shapes —
// see /src/data/README.md for a step-by-step guide.

export type WaterType = "lake" | "river" | "stream" | "great-lake" | "pond" | "ice";

export type SpeciesCategory = "warmwater" | "coldwater" | "roughfish";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Species {
  id: string; // slug, e.g. "bluegill"
  commonName: string;
  scientificName: string;
  category: SpeciesCategory;
  size: string; // human-readable size range
  habitat: string;
  waterTypes: WaterType[];
  season: string; // human readable best time
  bait: string;
  technique: string;
  difficulty: Difficulty;
  kidFact: string; // fun fact for Kids Mode
  image?: string; // optional path under /public/species
  specialNote?: string; // e.g. Lake Sturgeon release requirement
}

export type LocationType = "lake" | "river" | "stream" | "great-lake";

export interface FishingLocation {
  id: string; // slug
  name: string;
  type: LocationType;
  region: string; // e.g. "SE Lower", "NW Lower", "UP"
  targetSpecies: string[]; // species ids or names
  bestSeason: string;
  access: string; // access points & notes
  description: string; // why it's notable
  kidFact: string;
}

export interface TableRow {
  [key: string]: string;
}

export interface DataTable {
  id: string;
  title: string;
  columns: string[];
  rows: TableRow[];
  note?: string;
}

export interface GuideSection {
  id: string;
  title: string;
  kidTitle?: string; // simplified title for Kids Mode
  body: string[]; // paragraphs (markdown-lite: supports **bold**)
  kidBody?: string[]; // simplified paragraphs for Kids Mode
  tables?: DataTable[];
  list?: string[]; // simple bullet list
  kidList?: string[];
}

export interface GuidePage {
  id: string; // slug, used in URL
  title: string;
  kidTitle?: string;
  description: string;
  sections: GuideSection[];
}
