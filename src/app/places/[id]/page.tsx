import { notFound } from "next/navigation";
import { LOCATIONS } from "@/data/locations";
import PlaceDetail from "@/components/PlaceDetail";

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ id: loc.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const location = LOCATIONS.find((loc) => loc.id === id);
  if (!location) return {};
  return {
    title: `${location.name} | Michigan Fishing Resources`,
    description: location.description,
  };
}

export default async function PlaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const location = LOCATIONS.find((loc) => loc.id === id);
  if (!location) notFound();

  return <PlaceDetail location={location} />;
}
