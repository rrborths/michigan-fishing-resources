"use client";

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

export default function SpeciesDetail({ species }: { species: Species }) {
  const { kidsMode } = useKidsMode();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link href="/species" className="text-sm font-medium text-water hover:underline">
        ← Back to Species Explorer
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-water-dark sm:text-4xl">{species.commonName}</h1>
          {!kidsMode && <p className="mt-1 text-base italic text-foreground/50">{species.scientificName}</p>}
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${DIFFICULTY_STYLES[species.difficulty]}`}>
          {DIFFICULTY_LABELS[species.difficulty]}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-forest-light/20 px-2 py-0.5 text-xs font-medium text-forest">
          {CATEGORY_LABELS[species.category]}
        </span>
        {species.waterTypes.map((wt) => (
          <span key={wt} className="rounded-full bg-water-mist px-2 py-0.5 text-xs font-medium text-water-dark">
            {WATER_TYPE_LABELS[wt]}
          </span>
        ))}
      </div>

      {kidsMode ? (
        <div className="mt-6 rounded-xl border border-sun/30 bg-sun-light/30 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-sun">Fun Fact</p>
          <p className="mt-2 text-lg text-foreground kids-larger">{species.kidFact}</p>
        </div>
      ) : (
        <dl className="mt-6 grid gap-4 rounded-xl border border-black/5 bg-white p-5 shadow-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Size</dt>
            <dd className="mt-1 text-sm text-foreground">{species.size}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Best Season</dt>
            <dd className="mt-1 text-sm text-foreground">{species.season}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Habitat</dt>
            <dd className="mt-1 text-sm text-foreground">{species.habitat}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Bait &amp; Lures</dt>
            <dd className="mt-1 text-sm text-foreground">{species.bait}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Technique</dt>
            <dd className="mt-1 text-sm text-foreground">{species.technique}</dd>
          </div>
        </dl>
      )}

      {species.specialNote && (
        <div className="mt-4 rounded-lg border border-sun/40 bg-sun-light/40 p-4 text-sm text-foreground">
          <span className="font-semibold text-water-dark">Note: </span>
          {species.specialNote}
        </div>
      )}

      {kidsMode && (
        <dl className="mt-6 grid gap-4 rounded-xl border border-black/5 bg-white p-5 shadow-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">How big?</dt>
            <dd className="mt-1 text-sm text-foreground kids-larger">{species.size}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">When to catch</dt>
            <dd className="mt-1 text-sm text-foreground kids-larger">{species.season}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Where it lives</dt>
            <dd className="mt-1 text-sm text-foreground kids-larger">{species.habitat}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">What to use</dt>
            <dd className="mt-1 text-sm text-foreground kids-larger">{species.bait}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-foreground/50">How to catch it</dt>
            <dd className="mt-1 text-sm text-foreground kids-larger">{species.technique}</dd>
          </div>
        </dl>
      )}
    </div>
  );
}
