import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/foundation/Container";
import { MarinerThread } from "@/components/foundation/MarinerThread";
import { ProjectIdentityBoundary } from "@/components/work/ProjectIdentityBoundary";
import { workIndexProjects } from "@/content/projects";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Work", description: "See selected Mariner Nexus work, understand the transformation behind it, and experience the finished project live.", path: "/work", image: "/og/work", imageAlt: "Mariner Nexus selected work: transformation made visible." });

const workListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mariner Nexus Transformation Records",
  numberOfItems: workIndexProjects.length,
  itemListElement: workIndexProjects.flatMap((entry, index) => entry.project ? [{
    "@type": "ListItem",
    position: index + 1,
    name: `${entry.name} — Transformation Record ${entry.project.presentation.recordNumber}`,
    url: absoluteUrl(`/work/${entry.slug}`),
  }] : []),
};

export default function WorkPage() {
  return <div className="mn-work-index mn-environment-light">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workListJsonLd) }} />
    <section className="mn-work-intro" data-navigation-context="Work"><Container><p className="mn-kicker">Selected Work</p><h1>The finished work gets the first word.</h1><p>Same rigor. Different worlds.</p></Container></section>
    <section className="mn-work-projects" data-navigation-context="Work"><Container>
      {workIndexProjects.map((entry, index) => {
        const project = entry.project;
        if (!project) return null;
        if (entry.preview && entry.media.desktop) return <ProjectIdentityBoundary experience={entry.preview.experience} identity={entry.preview.identity} initialState={index === 0 ? "introduction" : "mariner"} key={entry.slug} project={entry.slug} variant="index"><article className="mn-world-preview"><div className="mn-world-preview__proof"><Image alt={project.media.desktop.alt} fetchPriority={index === 0 ? "high" : undefined} fill loading={index === 0 ? "eager" : "lazy"} priority={index === 0} sizes="(max-width: 768px) calc(100vw - 40px), calc(100vw - 116px)" src={entry.media.desktop} /><div className="mn-world-preview__copy"><p>{entry.preview.eyebrow}</p><h2>{entry.preview.headline}</h2></div></div><div className="mn-world-preview__meta"><div><p>{project.presentation.recordNumber} / Transformation Record</p><h3>{entry.name}</h3></div><div><p>{entry.preview.summary}</p><Link href={`/work/${entry.slug}`}>{entry.preview.cta ?? "Enter the Transformation Record"}</Link></div></div></article></ProjectIdentityBoundary>;
        return <ProjectIdentityBoundary experience={project.experienceProfile} identity={project.visualIdentity} key={project.slug} project={project.slug} variant="index"><article className="mn-work-entry mn-work-portal"><MarinerThread label={`Mariner Nexus leads into ${project.clientName} project proof`} nodes={2} tone="project" /><Link aria-label={`Enter ${project.clientName} transformation record`} className="mn-work-media" href={`/work/${project.slug}`}><Image alt={project.media.card.alt} height={project.media.card.height} loading="lazy" sizes="(max-width: 768px) calc(100vw - 40px), calc(100vw - 116px)" src={project.media.card.src} width={project.media.card.width} /></Link><div className="mn-work-entry-meta"><div><p>{project.presentation.recordNumber} / Transformation Record</p><h2>{project.clientName}</h2></div><div><p>{project.shortTransformation}</p><Link href={`/work/${project.slug}`}>Enter the Transformation Record</Link></div></div></article></ProjectIdentityBoundary>;
      })}
    </Container></section>
    <section className="mn-work-close" data-navigation-context="Begin"><Container><p>Different identities. Different objectives. One standard of rigor.</p><div><Link href="/approach">Explore Approach</Link><Link href="/start">Start a Project</Link></div></Container></section>
  </div>;
}
