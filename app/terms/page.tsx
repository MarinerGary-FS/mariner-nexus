import type { Metadata } from "next";
import { RouteFoundation } from "@/components/foundation/RouteFoundation";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Terms", description: "Terms for use of the Mariner Nexus website.", path: "/terms" });

export default function TermsPage() {
  return <RouteFoundation eyebrow="Legal" title="Terms" description="This website provides general information about Mariner Nexus, its capabilities, and selected work." note="These restrained V1 website terms do not replace project proposals, statements of work, or client contracts."><div className="mn-legal-copy"><h2>Website use</h2><p>Content may be viewed for legitimate informational and evaluation purposes. Mariner Nexus names, designs, copy, and project materials may not be reused without permission.</p><h2>Information and availability</h2><p>Website information may change and does not create a client relationship, guarantee availability, or constitute a binding offer.</p><h2>Project inquiries</h2><p>Submitting an inquiry begins a project conversation only. It does not create an engagement, require Mariner Nexus to accept work, or establish confidential, payment, delivery, or other contractual obligations.</p><h2>Client engagements</h2><p>Formal project engagement begins only through separately executed agreement(s) and is governed by those written terms.</p></div></RouteFoundation>;
}
