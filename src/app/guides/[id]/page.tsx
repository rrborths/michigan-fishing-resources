import { notFound } from "next/navigation";
import { GUIDE_PAGES, getGuidePage } from "@/data/guides";
import GuideContent from "@/components/GuideContent";

export function generateStaticParams() {
  return GUIDE_PAGES.map((page) => ({ id: page.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = getGuidePage(id);
  if (!page) return {};
  return {
    title: `${page.title} | Michigan Fishing Resources`,
    description: page.description,
  };
}

export default async function GuidePageRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = getGuidePage(id);
  if (!page) notFound();

  return <GuideContent page={page} />;
}
