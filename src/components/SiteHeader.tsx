"use client";

import Link from "next/link";
import { useKidsMode } from "@/context/KidsModeContext";
import { GUIDE_PAGES } from "@/data/guides";

const PRIMARY_LINKS = [
  { href: "/", label: "Home", kidLabel: "Home" },
  { href: "/species", label: "Species", kidLabel: "Fish Finder" },
  { href: "/places", label: "Places to Fish", kidLabel: "Places to Fish" },
];

export default function SiteHeader() {
  const { kidsMode, toggleKidsMode } = useKidsMode();

  return (
    <header className="sticky top-0 z-50 bg-water-dark text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight sm:text-xl"
        >
          <span aria-hidden="true" className="text-2xl">
            🎣
          </span>
          <span>
            {kidsMode ? "Michigan Fishing Adventures" : "Michigan Fishing Resources"}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {PRIMARY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              {kidsMode ? link.kidLabel : link.label}
            </Link>
          ))}

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white [&::-webkit-details-marker]:hidden">
              {kidsMode ? "Learn More" : "Guides"}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 transition-transform group-open:rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-lg border border-black/10 bg-white py-2 text-foreground shadow-xl">
              {GUIDE_PAGES.map((page) => (
                <Link
                  key={page.id}
                  href={`/guides/${page.id}`}
                  className="block px-4 py-2 text-sm hover:bg-water-mist"
                >
                  {kidsMode && page.kidTitle ? page.kidTitle : page.title}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="flex items-center gap-2">
          <KidsModeToggle kidsMode={kidsMode} onToggle={toggleKidsMode} />

          {/* Mobile menu */}
          <details className="group relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-md p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white [&::-webkit-details-marker]:hidden">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-72 overflow-hidden rounded-lg border border-black/10 bg-white py-2 text-foreground shadow-xl">
              {PRIMARY_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm font-medium hover:bg-water-mist">
                  {kidsMode ? link.kidLabel : link.label}
                </Link>
              ))}
              <div className="my-1 border-t border-black/10" />
              <p className="px-4 pt-1 pb-1 text-xs font-semibold uppercase tracking-wide text-foreground/50">
                {kidsMode ? "Learn More" : "Guides"}
              </p>
              {GUIDE_PAGES.map((page) => (
                <Link key={page.id} href={`/guides/${page.id}`} className="block px-4 py-2 text-sm hover:bg-water-mist">
                  {kidsMode && page.kidTitle ? page.kidTitle : page.title}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function KidsModeToggle({ kidsMode, onToggle }: { kidsMode: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={kidsMode}
      className={`flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
        kidsMode ? "bg-sun text-water-dark" : "bg-white/10 text-white hover:bg-white/20"
      }`}
      title="Toggle Kids Mode: simpler language and fun facts"
    >
      <span aria-hidden="true">{kidsMode ? "🧒" : "👨‍👩‍👧"}</span>
      <span className="hidden sm:inline">Kids Mode</span>
      <span
        className={`relative inline-flex h-4 w-8 items-center rounded-full transition-colors ${
          kidsMode ? "bg-water-dark/30" : "bg-white/30"
        }`}
      >
        <span
          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
            kidsMode ? "translate-x-4" : "translate-x-1"
          }`}
        />
      </span>
    </button>
  );
}
