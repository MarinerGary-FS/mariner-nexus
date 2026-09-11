import type { Metadata } from "next";
import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { SectionLink } from "@/components/corporate/SectionLink";
import { MarinerThread } from "@/components/foundation/MarinerThread";
import { CapabilitySystemsMap } from "@/components/systems/CapabilitySystemsMap";
import { disciplines } from "@/content/disciplines";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Capabilities", description: "Strategy, experience, systems, and intelligence shaped around the organization and objective they are meant to serve.", path: "/capabilities", image: "/og/capabilities", imageAlt: "Mariner Nexus capabilities: Strategy, Experience, Systems, and Intelligence." });

export default function CapabilitiesPage() {
  return <div className="mn-corporate-page mn-environment-light">
    <section className="mn-page-intro" data-navigation-context="Experience"><Container><Grid><div><div className="mn-signal-line" /><p className="mn-kicker">Capabilities</p><h1>Strategy. Experience. Systems. Intelligence.</h1></div><div><p>Mariner Nexus combines four disciplines to create connected digital environments that strengthen how organizations present themselves, engage people, operate, and use information.</p><p>A new website—or an intelligence layer—is not always the answer. The work begins by determining what needs to exist.</p></div></Grid></Container></section>
    <section className="mn-capability-sequence" data-navigation-context="Systems"><Container>{disciplines.map((discipline) => <article data-discipline={discipline.id} key={discipline.id}><Grid><div className="mn-capability-label"><span>{discipline.number}</span><h2>{discipline.name}</h2></div><p className="mn-capability-statement">{discipline.capabilityStatement}</p><ul>{discipline.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></Grid>{discipline.id === "intelligence" && <p className="mn-capability-boundary">Useful intelligence supports human judgment and approved workflows. It does not promise autonomous business operation.</p>}</article>)}<CapabilitySystemsMap /><MarinerThread label="Strategy shapes Experience, Systems, and Intelligence as one connected response" nodes={4} /></Container></section>
    <section className="mn-corporate-close mn-environment-dark" data-navigation-context="Approach"><Container><Grid><p className="mn-kicker">The relationship</p><div><h2>The disciplines move together.</h2><p>Strategy shapes Experience, Systems, and Intelligence. Each layer informs the others. The result is one connected operation designed around the objective—not a stack of disconnected services.</p><div><SectionLink href="/approach">Understand the approach</SectionLink><SectionLink href="/start">Bring us the objective</SectionLink></div></div></Grid></Container></section>
  </div>;
}
