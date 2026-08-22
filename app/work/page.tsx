import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/foundation/Container";
import { ProjectIdentityBoundary } from "@/components/work/ProjectIdentityBoundary";
import { publishedProjects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({ title: "Work", description: "See selected Mariner Nexus work, understand the transformation behind it, and experience the finished project live.", path: "/work" });

export default function WorkPage() {
  return <div className="mn-work-index mn-environment-light">
    <section className="mn-work-intro"><Container><p className="mn-kicker">Selected Work</p><h1>The finished work gets the first word.</h1><p>See it. Understand it. Experience it live.</p></Container></section>
    <section className="mn-work-projects"><Container>{publishedProjects.map((project) => <ProjectIdentityBoundary identity={project.visualIdentity} key={project.slug} project={project.slug} variant="index"><article className="mn-work-entry"><Link aria-label={`View ${project.clientName} transformation record`} className="mn-work-media" href={`/work/${project.slug}`}><Image alt={project.media.card.alt} height={project.media.card.height} priority sizes="(max-width: 768px) calc(100vw - 40px), calc(100vw - 116px)" src={project.media.card.src} width={project.media.card.width} /></Link><div className="mn-work-entry-meta"><div><p>01 / Transformation Record</p><h2>{project.clientName}</h2></div><div><p>{project.shortTransformation}</p><Link href={`/work/${project.slug}`}>View Case Study</Link></div></div></article></ProjectIdentityBoundary>)}</Container></section>
    <section className="mn-work-close"><Container><p>One project is public by design. Every transformation record is published only with explicit authorization.</p><Link href="/start">What could Mariner Nexus do with yours?</Link></Container></section>
  </div>;
}
