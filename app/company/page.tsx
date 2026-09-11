import type { Metadata } from "next";
import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { SectionLink } from "@/components/corporate/SectionLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Company", description: "Mariner Nexus brings strategy, experience, systems, and intelligence together around the objective they are meant to serve.", path: "/company" });

export default function CompanyPage() {
  return <div className="mn-corporate-page mn-environment-light">
    <section className="mn-page-intro"><Container><Grid><div><div className="mn-signal-line" /><p className="mn-kicker">Company</p><h1>Built for the space between disciplines.</h1></div><div><p>Mariner Nexus exists because strategy, experience, systems, and intelligence are too often treated as separate conversations.</p><p>We bring them together around the objective they are meant to serve.</p></div></Grid></Container></section>
    <section className="mn-company-principles"><Container><Grid><div><p className="mn-kicker">Philosophy</p><h2>Business before interface.</h2></div><div><p>Digital work should strengthen how an organization presents itself, engages people, and operates. It should not begin with a predetermined product or technical preference.</p><blockquote>“We don’t build digital experiences in isolation. We build them around the business they are meant to serve.”</blockquote></div></Grid></Container></section>
    <section className="mn-company-model mn-environment-dark"><Container><p className="mn-kicker">Operating model</p><div className="mn-company-model-grid"><article><span>01</span><h2>Experience-based</h2><p>The work is shaped around what people need to understand, feel, and do.</p></article><article><span>02</span><h2>Strategy-led</h2><p>Important decisions are made before interface production begins.</p></article><article><span>03</span><h2>Solution-specific</h2><p>The response fits the organization, objective, and operating reality.</p></article></div></Container></section>
    <section className="mn-company-context"><Container><Grid><div><p className="mn-kicker">Corporate Discipline × Creative Ambition</p><h2>Credible in the room. Capable beyond expectation.</h2></div><div><p>Mariner Nexus is led by Gary Mariner and works with organizations and individuals creating, evolving, or transforming their digital presence.</p><p>The company does not manufacture scale. It builds trust through clarity, method, adaptability, and the quality of the work itself.</p><SectionLink href="/start">Start a conversation</SectionLink></div></Grid></Container></section>
  </div>;
}
