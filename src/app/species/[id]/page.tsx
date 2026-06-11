import { notFound } from "next/navigation";
import { SPECIES } from "@/data/species";
import SpeciesDetail from "@/components/SpeciesDetail";

export function generateStaticParams() {
  return SPECIES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const species = SPECIES.find((s) => s.id === id);
  if (!species) return {};
  return {
    title: `${species.commonName} | Michigan Fishing Resources`,
    description: `${species.commonName} (${species.scientificName}): habitat, season, bait, and technique for fishing in Michigan.`,
  };
}

export default async function SpeciesDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const species = SPECIES.find((s) => s.id === id);
  if (!species) notFound();

  return <SpeciesDetail species={species} />;
}
