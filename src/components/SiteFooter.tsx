"use client";

import Link from "next/link";
import { useKidsMode } from "@/context/KidsModeContext";

export default function SiteFooter() {
  const { kidsMode } = useKidsMode();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-black/10 bg-water-mist">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-water-dark">
              {kidsMode ? "Michigan Fishing Adventures 🎣" : "Michigan Fishing Resources"}
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              {kidsMode
                ? "A fun guide to fishing all over Michigan, for kids and grown-ups!"
                : "A practical, growing reference for fishing across Michigan — from first cast to advanced tactics."}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-water-dark">Explore</p>
            <ul className="mt-2 space-y-1 text-sm text-foreground/70">
              <li>
                <Link href="/species" className="hover:text-water">
                  {kidsMode ? "Fish Finder" : "Species Explorer"}
                </Link>
              </li>
              <li>
                <Link href="/places" className="hover:text-water">
                  Places to Fish
                </Link>
              </li>
              <li>
                <Link href="/guides/regulations" className="hover:text-water">
                  Rules &amp; Regulations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-water-dark">
              {kidsMode ? "Important Note" : "Disclaimer"}
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              {kidsMode
                ? "Always check with a grown-up and the official Michigan DNR rules before you fish — rules can change!"
                : "Regulations, seasons, and limits change. Always verify current rules with the Michigan DNR before fishing."}
            </p>
            <a
              href="https://www.michigan.gov/dnr/things-to-do/fishing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-water hover:underline"
            >
              Michigan DNR Fishing →
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-black/10 pt-4 text-xs text-foreground/50">
          © {year} Michigan Fishing Resources. Built for learning and reference — not a substitute for official DNR regulations.
        </p>
      </div>
    </footer>
  );
}
