"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Species, WaterType, SpeciesCategory, Difficulty } from "@/data/types";
import { useKidsMode } from "@/context/KidsModeContext";

const CATEGORY_LABELS: Record<SpeciesCategory, string> = {
  warmwater: "Warmwater",
  coldwater: "Coldwater",
  roughfish: "Rough Fish",
};

const WATER_TYPE_LABELS: Record<WaterType, string> = {
  lake: "Lake",
  river: "River",
  stream: "Stream",
  "great-lake": "Great Lake",
  pond: "Pond",
  ice: "Ice Fishing",
};

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  beginner: "bg-forest-light/20 text-forest",
  intermediate: "bg-sun-light text-sun",
  advanced: "bg-water-light/20 text-water-dark",
};

const ALL = "all";

export default function SpeciesExplorer({ species }: { species: Species[] }) {
  const { kidsMode } = useKidsMode();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL);
  const [waterType, setWaterType] = useState<string>(ALL);
  const [difficulty, setDifficulty] = useState<string>(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return species.filter((s) => {
      if (q && !s.commonName.toLowerCase().includes(q) && !s.scientificName.toLowerCase().includes(q)) {
        return false;
      }
      if (category !== ALL && s.category !== category) return false;
      if (waterType !== ALL && !s.waterTypes.includes(waterType as WaterType)) return false;
      if (difficulty !== ALL && s.difficulty !== difficulty) return false;
      return true;
    });
  }, [species, query, category, waterType, difficulty]);

  const hasActiveFilters = query || category !== ALL || waterType !== ALL || difficulty !== ALL;

  return (
    <div>
      {/* Filters */}
      <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="flex flex-col gap-1 text-sm font-medium text-water-dark">
            {kidsMode ? "Search by name" : "Search"}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={kidsMode ? "Type a fish name..." : "Search species..."}
              className="rounded-md border border-black/10 px-3 py-2 text-sm text-foreground focus:border-water focus:outline-none focus:ring-1 focus:ring-water"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-water-dark">
            {kidsMode ? "Type of fish" : "Category"}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-md border border-black/10 px-3 py-2 text-sm text-foreground focus:border-water focus:outline-none focus:ring-1 focus:ring-water"
            >
              <option value={ALL}>All categories</option>
              {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-water-dark">
            {kidsMode ? "Where they live" : "Water Type"}
            <select
              value={waterType}
              onChange={(e) => setWaterType(e.target.value)}
              className="rounded-md border border-black/10 px-3 py-2 text-sm text-foreground focus:border-water focus:outline-none focus:ring-1 focus:ring-water"
            >
              <option value={ALL}>All water types</option>
              {Object.entries(WATER_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-water-dark">
            {kidsMode ? "How tricky?" : "Difficulty"}
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="rounded-md border border-black/10 px-3 py-2 text-sm text-foreground focus:border-water focus:outline-none focus:ring-1 focus:ring-water"
            >
              <option value={ALL}>All levels</option>
              {Object.entries(DIFFICULTY_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-foreground/60">
            {filtered.length} of {species.length} species
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory(ALL);
                setWaterType(ALL);
                setDifficulty(ALL);
              }}
              className="text-sm font-medium text-water hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-foreground/60">
          {kidsMode
            ? "No fish match — try changing your search!"
            : "No species match your filters. Try adjusting your search."}
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <Link
              key={s.id}
              href={`/species/${s.id}`}
              className="flex flex-col rounded-xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-water-dark">{s.commonName}</h3>
                  {!kidsMode && (
                    <p className="text-xs italic text-foreground/50">{s.scientificName}</p>
                  )}
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-1 text-xs font-semibold ${DIFFICULTY_STYLES[s.difficulty]}`}
                >
                  {DIFFICULTY_LABELS[s.difficulty]}
                </span>
              </div>

              {kidsMode ? (
                <p className="mt-2 text-sm text-foreground/80">{s.kidFact}</p>
              ) : (
                <>
                  <p className="mt-2 text-sm text-foreground/70">
                    <span className="font-semibold">Size:</span> {s.size}
                  </p>
                  <p className="mt-1 text-sm text-foreground/70">
                    <span className="font-semibold">Best season:</span> {s.season}
                  </p>
                </>
              )}

              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.waterTypes.map((wt) => (
                  <span
                    key={wt}
                    className="rounded-full bg-water-mist px-2 py-0.5 text-xs font-medium text-water-dark"
                  >
                    {WATER_TYPE_LABELS[wt]}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
