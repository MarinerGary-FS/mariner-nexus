import type { Metadata } from "next";
import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { SectionLink } from "@/components/corporate/SectionLink";
import { createMetadata } from "@/lib/seo";

const disciplines = [
  { number: "01", name: "Strategy", statement: "Determine what should exist before deciding how to build it.", items: ["Digital discovery", "Competitive and comparable research", "Audience and journey architecture", "Information architecture", "Technology and platform strategy", "Digital modernization"] },
  { number: "02", name: "Experience", statement: "Create a digital experience appropriate to the organization, audience, and objective.", items: ["Custom digital experiences", "Websites and landing experiences", "UX and UI", "Responsive experience", "Digital visual systems", "Interactive experiences", "Content presentation"] },
  { number: "03", name: "Systems", statement: "Connect the experience to what makes it useful after someone takes action.", items: ["Forms and structured data collection", "Scheduling and payments", "Content management", "Analytics", "Scoped CRM integration", "Scoped APIs", "Scoped portals and dashboards", "Practical workflow automation"] },
];

export const metadata: Metadata = createMetadata({ title: "Capabilities", description: "Strategy, experience, and connected systems shaped around the organization they are meant to serve.", path: "/capabilities" });

export default function CapabilitiesPage() {
  return <div className="mn-corporate-page mn-environment-light">
    <section className="mn-page-intro"><Container><Grid><div><div className="mn-signal-line" /><p className="mn-kicker">Capabilities</p><h1>Strategy. Experience. Systems.</h1></div><div><p>Mariner Nexus combines three disciplines to create digital experiences that strengthen how organizations present themselves, engage people, and operate.</p><p>A new website is not always the answer. The work begins by determining what needs to exist.</p></div></Grid></Container></section>
    <section className="mn-capability-sequence"><Container>{disciplines.map((discipline) => <article key={discipline.name}><Grid><div className="mn-capability-label"><span>{discipline.number}</span><h2>{discipline.name}</h2></div><p className="mn-capability-statement">{discipline.statement}</p><ul>{discipline.items.map((item) => <li key={item}>{item}</li>)}</ul></Grid></article>)}</Container></section>
    <section className="mn-corporate-close mn-environment-dark"><Container><Grid><p className="mn-kicker">The relationship</p><div><h2>The disciplines move together.</h2><p>Strategy informs Experience and Systems. Experience and Systems influence one another. The result is a digital operation designed as one connected response.</p><div><SectionLink href="/approach">Understand the approach</SectionLink><SectionLink href="/start">Bring us the objective</SectionLink></div></div></Grid></Container></section>
  </div>;
}
