"use client";

import Link from "next/link";
import { FishingLocation, LocationType } from "@/data/types";
import { useKidsMode } from "@/context/KidsModeContext";

const TYPE_LABELS: Record<LocationType, string> = {
  lake: "Inland Lake",
  river: "River",
  stream: "Stream",
  "great-lake": "Great Lake",
};

const TYPE_ICONS: Record<LocationType, string> = {
  lake: "🏞️",
  river: "🏔️",
  stream: "💧",
  "great-lake": "🌊",
};

export default function PlaceDetail({ location }: { location: FishingLocation }) {
  const { kidsMode } = useKidsMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link href="/places" className="text-sm font-medium text-water hover:underline">
        ← Back to Places to Fish
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-water-dark sm:text-4xl">{location.name}</h1>
          <p className="mt-1 text-sm text-foreground/50">{location.region}</p>
        </div>
        <span className="rounded-full bg-water-mist px-3 py-1 text-sm font-semibold text-water-dark">
          {TYPE_ICONS[location.type]} {TYPE_LABELS[location.type]}
        </span>
      </div>

      {kidsMode ? (
        <div className="mt-6 rounded-xl border border-sun/30 bg-sun-light/30 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-sun">Fun Fact</p>
          <p className="mt-2 text-lg text-foreground kids-larger">{location.kidFact}</p>
        </div>
      ) : (
        <p className="mt-6 text-base leading-relaxed text-foreground/80">{location.description}</p>
      )}

      <dl className="mt-6 grid gap-4 rounded-xl border border-black/5 bg-white p-5 shadow-sm sm:grid-cols-2">
        <div className="sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {kidsMode ? "Fish you might catch" : "Target Species"}
          </dt>
          <dd className="mt-1 flex flex-wrap gap-1.5">
            {location.targetSpecies.map((sp) => (
              <span
                key={sp}
                className="rounded-full bg-water-mist px-2 py-0.5 text-xs font-medium text-water-dark"
              >
                {sp}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {kidsMode ? "Best time to go" : "Best Season"}
          </dt>
          <dd className="mt-1 text-sm text-foreground kids-larger">{location.bestSeason}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            {kidsMode ? "How to get there" : "Access"}
          </dt>
          <dd className="mt-1 text-sm text-foreground kids-larger">{location.access}</dd>
        </div>
      </dl>

      {kidsMode && (
        <div className="mt-4 rounded-lg border border-water-light/40 bg-water-mist p-4 text-sm text-foreground kids-larger">
          {location.description}
        </div>
      )}
    </div>
  );
}
