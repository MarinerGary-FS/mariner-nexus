import type { Metadata } from "next";
import { RouteFoundation } from "@/components/foundation/RouteFoundation";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Capabilities",
  description: "Strategy, experience, and connected systems shaped around the organization they are meant to serve.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return <RouteFoundation eyebrow="Capabilities" title="Strategy. Experience. Systems." description="Mariner Nexus determines what should be built, creates the right digital experience, and connects it to the systems that make it useful." note="The capability architecture is established. Final service composition and narrative belong to a later approved phase." links={[{ label: "See selected work", href: "/work" }, { label: "Understand the approach", href: "/approach" }]} />;
}
