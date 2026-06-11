import Link from "next/link";
import { GUIDE_PAGES } from "@/data/guides";

const QUICK_LINKS = [
  {
    href: "/species",
    title: "Species Explorer",
    description: "Search and filter Michigan fish species by water type, season, and difficulty.",
    icon: "🐟",
  },
  {
    href: "/places",
    title: "Places to Fish",
    description: "Find lakes, rivers, streams, and Great Lakes access points across the state.",
    icon: "🗺️",
  },
  {
    href: "/guides/foundations",
    title: "Getting Started",
    description: "New to fishing? Start here for the core principles and a beginner roadmap.",
    icon: "🎣",
  },
  {
    href: "/guides/regulations",
    title: "Rules & Regulations",
    description: "Licenses, seasons, limits, and what you need to know to stay legal.",
    icon: "📋",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-water-dark to-water text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Your guide to fishing in Michigan
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Practical, real-time resources for anglers of every level — from your first
            bluegill to chasing steelhead on the Big Manistee. Searchable species and
            location databases, plus in-depth guides on gear, techniques, seasons, and
            regulations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/species"
              className="rounded-full bg-sun px-6 py-3 text-sm font-semibold text-water-dark transition-colors hover:bg-sun-light"
            >
              Explore Species
            </Link>
            <Link
              href="/places"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Find a Place to Fish
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="text-2xl font-bold text-water-dark">Where to start</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col rounded-xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span aria-hidden="true" className="text-3xl">
                {link.icon}
              </span>
              <span className="mt-3 text-base font-semibold text-water-dark">
                {link.title}
              </span>
              <span className="mt-1 text-sm text-foreground/70">{link.description}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* All guides */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-bold text-water-dark">All guides</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE_PAGES.map((page) => (
            <Link
              key={page.id}
              href={`/guides/${page.id}`}
              className="rounded-lg border border-black/5 bg-white px-4 py-3 text-sm font-medium text-water-dark shadow-sm transition-shadow hover:shadow-md"
            >
              {page.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
