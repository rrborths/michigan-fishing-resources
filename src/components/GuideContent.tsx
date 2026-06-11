"use client";

import { GuidePage, GuideSection, DataTable } from "@/data/types";
import { useKidsMode } from "@/context/KidsModeContext";
import FormattedText from "./FormattedText";

function GuideTable({ table }: { table: DataTable }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-black/5 bg-white shadow-sm">
      {table.title && (
        <p className="border-b border-black/5 px-4 py-2 text-sm font-semibold text-water-dark">
          {table.title}
        </p>
      )}
      <table className="w-full text-left text-sm">
        <thead className="bg-water-mist text-water-dark">
          <tr>
            {table.columns.map((col) => (
              <th key={col} className="px-4 py-2 font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-t border-black/5">
              {table.columns.map((col) => (
                <td key={col} className="px-4 py-2 align-top text-foreground/80">
                  <FormattedText text={row[col] ?? ""} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.note && (
        <p className="border-t border-black/5 px-4 py-2 text-xs text-foreground/60">
          {table.note}
        </p>
      )}
    </div>
  );
}

function Section({ section }: { section: GuideSection }) {
  const { kidsMode } = useKidsMode();

  const title = kidsMode && section.kidTitle ? section.kidTitle : section.title;
  const body = kidsMode && section.kidBody ? section.kidBody : section.body;
  const list = kidsMode && section.kidList ? section.kidList : section.list;

  return (
    <section id={section.id} className="mt-10 scroll-mt-24">
      <h2 className="text-xl font-bold text-water-dark sm:text-2xl">{title}</h2>

      {body?.map((para, i) => (
        <p key={i} className="mt-3 leading-relaxed text-foreground/80 kids-larger">
          <FormattedText text={para} />
        </p>
      ))}

      {list && list.length > 0 && (
        <ul className="mt-3 list-disc space-y-2 pl-6 text-foreground/80 kids-larger">
          {list.map((item, i) => (
            <li key={i}>
              <FormattedText text={item} />
            </li>
          ))}
        </ul>
      )}

      {section.tables?.map((table) => (
        <GuideTable key={table.id} table={table} />
      ))}
    </section>
  );
}

export default function GuideContent({ page }: { page: GuidePage }) {
  const { kidsMode } = useKidsMode();
  const title = kidsMode && page.kidTitle ? page.kidTitle : page.title;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-water-dark sm:text-4xl">{title}</h1>
      <p className="mt-2 text-base leading-relaxed text-foreground/70">{page.description}</p>

      {/* Section nav for longer guides */}
      {page.sections.length > 1 && (
        <nav className="mt-6 rounded-xl border border-black/5 bg-water-mist/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-water-dark">
            On this page
          </p>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2">
            {page.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-water hover:underline"
                >
                  {kidsMode && section.kidTitle ? section.kidTitle : section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {page.sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
}
