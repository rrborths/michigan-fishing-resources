import { LOCATIONS, HONORABLE_MENTIONS, ACCESS_PASSES } from "@/data/locations";
import PlacesExplorer from "@/components/PlacesExplorer";

export const metadata = {
  title: "Places to Fish | Michigan Fishing Resources",
  description:
    "Search and filter Michigan's best fishing lakes, rivers, streams, and Great Lakes by region and water type.",
};

export default function PlacesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-water-dark">Places to Fish</h1>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Explore {LOCATIONS.length} of Michigan&apos;s top fishing destinations — inland lakes,
        rivers, streams, and the Great Lakes. Search by name or species, or filter by water type
        and region.
      </p>

      <div className="mt-6">
        <PlacesExplorer locations={LOCATIONS} />
      </div>

      {/* Honorable mentions */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-water-dark">More Great Spots</h2>
        <p className="mt-1 text-sm text-foreground/70">
          These waters are also worth checking out as you explore Michigan.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {HONORABLE_MENTIONS.map((name) => (
            <span
              key={name}
              className="rounded-full bg-water-mist px-3 py-1 text-sm font-medium text-water-dark"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Access passes */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-water-dark">Licenses &amp; Access Passes</h2>
        <p className="mt-1 text-sm text-foreground/70">
          What you need before you head out to many of these locations.
        </p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-black/5 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-water-mist text-water-dark">
              <tr>
                {ACCESS_PASSES.columns.map((col) => (
                  <th key={col} className="px-4 py-2 font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ACCESS_PASSES.rows.map((row, i) => (
                <tr key={i} className="border-t border-black/5">
                  {ACCESS_PASSES.columns.map((col) => (
                    <td key={col} className="px-4 py-2 align-top text-foreground/80">
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
