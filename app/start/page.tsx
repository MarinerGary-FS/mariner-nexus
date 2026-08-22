import type { Metadata } from "next";
import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { InquiryExperience } from "@/components/inquiry/InquiryExperience";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Start a Project", description: "Tell Mariner Nexus what you are trying to create, change, or connect.", path: "/start" });

export default function StartPage() {
  return <div className="mn-start-page mn-environment-light">
    <section className="mn-page-intro"><Container><Grid><div><div className="mn-signal-line" /><p className="mn-kicker">Start a Project</p><h1>What are you trying to create?</h1></div><div><p>You don’t need to arrive with the solution figured out.</p><p>Clients do not need to speak technology. They need to communicate their vision.</p></div></Grid></Container></section>
    <section className="mn-inquiry-section"><Container><Grid><aside><p className="mn-kicker">A thoughtful beginning</p><p>Bring us the objective. We’ll help determine what needs to exist around it.</p><p>No service selection. No budget gate. No marketing enrollment.</p><a href="mailto:hello@marinernexus.com">Prefer email? hello@marinernexus.com</a></aside><InquiryExperience /></Grid></Container></section>
  </div>;
}
