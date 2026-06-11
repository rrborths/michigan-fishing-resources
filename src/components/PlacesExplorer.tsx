"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FishingLocation, LocationType } from "@/data/types";
import { LOCATION_TYPES } from "@/data/locations";
import { regionGroup, REGION_GROUPS } from "@/data/region-group";
import { useKidsMode } from "@/context/KidsModeContext";

const ALL = "all";

const TYPE_ICONS: Record<LocationType, string> = {
  lake: "🏞️",
  river: "🏔️",
  stream: "💧",
  "great-lake": "🌊",
};

export default function PlacesExplorer({ locations }: { locations: FishingLocation[] }) {
  const { kidsMode } = useKidsMode();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<string>(ALL);
  const [region, setRegion] = useState<string>(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return locations.filter((loc) => {
      if (q) {
        const haystack = [loc.name, loc.description, ...loc.targetSpecies].join(" ").toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (type !== ALL && loc.type !== type) return false;
      if (region !== ALL && regionGroup(loc.region) !== region) return false;
      return true;
    });
  }, [locations, query, type, region]);

  const hasActiveFilters = query || type !== ALL || region !== ALL;

  return (
    <div>
      {/* Filters */}
      <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="flex flex-col gap-1 text-sm font-medium text-water-dark">
            {kidsMode ? "Search" : "Search"}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={kidsMode ? "Type a place or fish..." : "Search by name or species..."}
              className="rounded-md border border-black/10 px-3 py-2 text-sm text-foreground focus:border-water focus:outline-none focus:ring-1 focus:ring-water"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-water-dark">
            {kidsMode ? "Type of water" : "Water Type"}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-md border border-black/10 px-3 py-2 text-sm text-foreground focus:border-water focus:outline-none focus:ring-1 focus:ring-water"
            >
              <option value={ALL}>All types</option>
              {LOCATION_TYPES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-water-dark">
            {kidsMode ? "Part of Michigan" : "Region"}
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="rounded-md border border-black/10 px-3 py-2 text-sm text-foreground focus:border-water focus:outline-none focus:ring-1 focus:ring-water"
            >
              <option value={ALL}>All regions</option>
              {REGION_GROUPS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-foreground/60">
            {filtered.length} of {locations.length} places
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setType(ALL);
                setRegion(ALL);
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
            ? "No places match — try a different search!"
            : "No locations match your filters. Try adjusting your search."}
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((loc) => (
            <Link
              key={loc.id}
              href={`/places/${loc.id}`}
              className="flex flex-col rounded-xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-water-dark">{loc.name}</h3>
                <span aria-hidden="true" className="text-2xl">
                  {TYPE_ICONS[loc.type]}
                </span>
              </div>
              <p className="text-xs text-foreground/50">{loc.region}</p>

              {kidsMode ? (
                <p className="mt-2 text-sm text-foreground/80">{loc.kidFact}</p>
              ) : (
                <p className="mt-2 text-sm text-foreground/70">{loc.description}</p>
              )}

              <div className="mt-3 flex flex-wrap gap-1.5">
                {loc.targetSpecies.slice(0, 4).map((sp) => (
                  <span
                    key={sp}
                    className="rounded-full bg-water-mist px-2 py-0.5 text-xs font-medium text-water-dark"
                  >
                    {sp}
                  </span>
                ))}
                {loc.targetSpecies.length > 4 && (
                  <span className="rounded-full bg-water-mist px-2 py-0.5 text-xs font-medium text-water-dark">
                    +{loc.targetSpecies.length - 4} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
