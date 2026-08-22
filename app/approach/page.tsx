import type { Metadata } from "next";
import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { SectionLink } from "@/components/corporate/SectionLink";
import { createMetadata } from "@/lib/seo";

const steps = [
  ["01", "Understand", "We begin with the organization, the objective, the audience, and what is not working today."],
  ["02", "Define", "We clarify the problem, the priorities, and what success needs to look like."],
  ["03", "Architect", "We determine the right experience, structure, and supporting systems before production begins."],
  ["04", "Create", "We shape the content, interface, and interactions into a coherent digital experience."],
  ["05", "Connect", "We connect the experience to the forms, tools, data, and workflows it needs to be useful."],
  ["06", "Refine", "We test, review, and strengthen the work across devices, content, and real use."],
  ["07", "Launch", "We prepare the experience for a controlled, confident release."],
  ["08", "Evolve", "We learn from what is live and identify the next meaningful improvement when the business requires it."],
];

export const metadata: Metadata = createMetadata({ title: "Approach", description: "An understandable, strategy-led method for creating sophisticated digital experiences and connected systems.", path: "/approach" });

export default function ApproachPage() {
  return <div className="mn-corporate-page mn-environment-light">
    <section className="mn-page-intro"><Container><Grid><div><div className="mn-signal-line" /><p className="mn-kicker">Approach</p><h1>There is a method behind the ambition.</h1></div><div><p>Mariner Nexus meets clients at the level of the business problem—not the level of their technical knowledge.</p><p>You bring the objective. We help determine what needs to exist around it.</p></div></Grid></Container></section>
    <section className="mn-approach-sequence"><Container><ol>{steps.map(([number, title, description]) => <li key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></li>)}</ol></Container></section>
    <section className="mn-corporate-close mn-environment-silver"><Container><Grid><p className="mn-kicker">What stays constant</p><div><h2>Clear decisions. Appropriate complexity. No technical theater.</h2><p>The solution adapts to the organization. The organization does not adapt to a template.</p><div><SectionLink href="/company">About Mariner Nexus</SectionLink><SectionLink href="/start">Start a Project</SectionLink></div></div></Grid></Container></section>
  </div>;
}
