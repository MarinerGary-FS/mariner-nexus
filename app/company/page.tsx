import type { Metadata } from "next";
import { RouteFoundation } from "@/components/foundation/RouteFoundation";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Company", description: "Mariner Nexus creates sophisticated digital experiences and connected systems around how organizations actually operate.", path: "/company" });

export default function CompanyPage() {
  return <RouteFoundation eyebrow="Company" title="Where disciplines converge." description="Mariner Nexus combines strategy, experience design, and modern technology to create a stronger digital operation—not simply a better website." note="The company route carries the approved positioning. Final company storytelling and proof remain deferred." links={[{ label: "See the work", href: "/work" }, { label: "Start a project", href: "/start" }]} />;
}
