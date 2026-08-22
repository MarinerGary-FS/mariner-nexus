import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RouteFoundation } from "@/components/foundation/RouteFoundation";
import { createMetadata } from "@/lib/seo";

type ProjectPageProps = { params: Promise<{ project: string }> };

export function generateStaticParams() { return [{ project: "undugu" }]; }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { project } = await params;
  if (project !== "undugu") return {};
  return createMetadata({ title: "Undugu | Work", description: "The authorized flagship Mariner Nexus transformation record for Undugu Foundation.", path: "/work/undugu", type: "article" });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project } = await params;
  if (project !== "undugu") notFound();
  return <RouteFoundation eyebrow="Work / Undugu" title="Undugu Foundation" description="A community-centered digital foundation designed to strengthen clarity, engagement, and the systems supporting the organization." note="The canonical route and metadata foundation are ready. The full transformation record remains deferred to the approved case-study phase." links={[{ label: "Return to work", href: "/work" }, { label: "Visit Undugu", href: "https://www.undugu.org/" }]} />;
}
