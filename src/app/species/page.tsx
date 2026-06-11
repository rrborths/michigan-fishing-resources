import { SPECIES } from "@/data/species";
import SpeciesExplorer from "@/components/SpeciesExplorer";

export const metadata = {
  title: "Species Explorer | Michigan Fishing Resources",
  description:
    "Search and filter Michigan fish species by category, water type, and difficulty.",
};

export default function SpeciesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-water-dark">Species Explorer</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Browse {SPECIES.length} fish species found in Michigan waters. Search by name or
        filter by category, water type, and difficulty to find your next target.
      </p>

      <div className="mt-6">
        <SpeciesExplorer species={SPECIES} />
      </div>
    </div>
  );
}
