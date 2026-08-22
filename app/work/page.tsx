import type { Metadata } from "next";
import { RouteFoundation } from "@/components/foundation/RouteFoundation";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Work", description: "Selected digital transformations created by Mariner Nexus.", path: "/work" });

export default function WorkPage() {
  return <RouteFoundation eyebrow="Work" title="Transformation, made visible." description="Selected work shows how strategy, experience, and systems come together around a real organization and objective." note="Undugu is the first authorized flagship transformation record. Additional client work requires explicit publication approval." links={[{ label: "View Undugu", href: "/work/undugu" }, { label: "Start a project", href: "/start" }]} />;
}
