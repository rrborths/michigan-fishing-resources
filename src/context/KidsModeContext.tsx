"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface KidsModeContextValue {
  kidsMode: boolean;
  toggleKidsMode: () => void;
  setKidsMode: (value: boolean) => void;
}

const KidsModeContext = createContext<KidsModeContextValue | undefined>(undefined);

const STORAGE_KEY = "mi-fishing-kids-mode";

/**
 * Wrap the app in this provider to enable a global "Kids Mode" toggle.
 * Pages and components read the current mode via useKidsMode() and can
 * branch on it to show simplified language, kid-friendly facts, or
 * larger/extra graphics — all from the same data and the same routes.
 *
 * The choice persists across visits via localStorage.
 */
export function KidsModeProvider({ children }: { children: ReactNode }) {
  const [kidsMode, setKidsModeState] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load saved preference on mount (client-only).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "true") setKidsModeState(true);
    } catch {
      // localStorage unavailable (e.g. privacy mode) — default to off.
    }
    setHydrated(true);
  }, []);

  // Persist preference whenever it changes.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, kidsMode ? "true" : "false");
    } catch {
      // ignore
    }
  }, [kidsMode, hydrated]);

  const value: KidsModeContextValue = {
    kidsMode,
    toggleKidsMode: () => setKidsModeState((prev) => !prev),
    setKidsMode: (next: boolean) => setKidsModeState(next),
  };

  return (
    <KidsModeContext.Provider value={value}>
      <div data-kids-mode={kidsMode} className="contents">
        {children}
      </div>
    </KidsModeContext.Provider>
  );
}

export function useKidsMode(): KidsModeContextValue {
  const ctx = useContext(KidsModeContext);
  if (!ctx) {
    throw new Error("useKidsMode must be used within a KidsModeProvider");
  }
  return ctx;
}
