import type { Metadata } from "next";
import { RouteFoundation } from "@/components/foundation/RouteFoundation";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Privacy", description: "Privacy information for the Mariner Nexus website and project inquiry process.", path: "/privacy" });

export default function PrivacyPage() {
  return <RouteFoundation eyebrow="Legal" title="Privacy" description="Mariner Nexus limits website and inquiry information to what is useful for responding, operating the site, and understanding its performance." note="This V1 notice applies to website and inquiry use. Client engagement data and contractual obligations are governed separately."><div className="mn-legal-copy"><h2>Website information</h2><p>Standard technical information may be processed for security, reliability, and aggregate performance measurement.</p><h2>Project inquiries</h2><p>Information submitted through an inquiry may be retained to evaluate and respond to the request. It is not sold.</p><h2>Questions</h2><p>Email <a href="mailto:hello@marinernexus.com">hello@marinernexus.com</a> with privacy questions or requests.</p></div></RouteFoundation>;
}
