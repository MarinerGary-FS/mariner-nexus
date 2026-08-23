import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { MarinerThread } from "@/components/foundation/MarinerThread";
import { ExternalProjectLink } from "@/components/work/ExternalProjectLink";
import { ProjectFrame } from "@/components/work/ProjectFrame";
import { ProjectIdentityBoundary } from "@/components/work/ProjectIdentityBoundary";
import { UnduguLivingExperience } from "@/components/work/UnduguLivingExperience";
import { getPublishedProject, publishedProjects } from "@/content/projects";
import { createMetadata } from "@/lib/seo";

type ProjectPageProps = { params: Promise<{ project: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return publishedProjects.map(({ slug }) => ({ project: slug })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getPublishedProject((await params).project);
  if (!project) return {};
  return createMetadata({ title: project.metadata.title, description: project.metadata.description, path: `/work/${project.slug}`, image: project.metadata.ogImage, type: "article" });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getPublishedProject((await params).project);
  if (!project) notFound();

  return <ProjectFrame identity={project.visualIdentity}>
    <div className="mn-project-context" data-navigation-context="Work"><Container><Link href="/work">← Return to Work</Link><p>Mariner Nexus / Transformation Record {project.presentation.recordNumber}</p></Container></div>
    <ProjectIdentityBoundary experience={project.experienceProfile} identity={project.visualIdentity} project={project.slug} variant="record"><article>
      <header className="mn-project-opening" data-navigation-context="Work"><Container><div className="mn-project-opening-meta"><p>{project.clientName}</p><h1>{project.shortTransformation}</h1></div><MarinerThread label={`The ${project.clientName} identity leads into finished project proof`} nodes={2} tone="project" /><figure><Image alt={project.media.desktop.alt} height={project.media.desktop.height} loading="eager" priority sizes="(max-width: 768px) calc(100vw - 40px), calc(100vw - 116px)" src={project.media.desktop.src} width={project.media.desktop.width} /><figcaption>The finished {project.clientName} digital experience.</figcaption></figure></Container></header>

      <section className="mn-project-client"><Container><Grid><p className="mn-kicker">Client</p><div><h2>{project.clientName}</h2><p>{project.client}</p></div></Grid></Container></section>

      <section className="mn-project-context-story"><Container><Grid><article><p className="mn-kicker">Situation</p><h2>{project.presentation.situationHeading}</h2><p>{project.situation}</p></article><article><p className="mn-kicker">Objective</p><h2>{project.presentation.objectiveHeading}</h2><p>{project.objective}</p></article></Grid></Container></section>

      <section className="mn-project-strategy"><Container><Grid><div><p className="mn-kicker">Strategy</p><h2>{project.presentation.strategyHeading}</h2></div><ol>{project.strategy.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></Grid></Container></section>

      <section className="mn-project-journey"><Container><p className="mn-kicker">Experience architecture</p><ol>{project.presentation.journey.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol></Container></section>

      <section className="mn-project-experience"><Container><div className="mn-project-section-heading"><p className="mn-kicker">Experience</p><h2>{project.presentation.experienceHeading}</h2><p>{project.presentation.experienceIntro}</p></div></Container>{project.slug === "undugu" ? <UnduguLivingExperience /> : <Container><figure className="mn-project-authentic-fragment"><Image alt={project.media.card.alt} height={project.media.card.height} loading="lazy" sizes="(max-width: 768px) calc(100vw - 40px), calc(100vw - 116px)" src={project.media.card.src} width={project.media.card.width} /><figcaption>Authentic production evidence from the finished {project.clientName} experience.</figcaption></figure></Container>}<Container><ul>{project.experience.map((item) => <li key={item}>{item}</li>)}</ul></Container></section>

      <section className="mn-project-systems" data-navigation-context="Systems"><Container><Grid><div><p className="mn-kicker">Systems</p><h2>{project.presentation.systemsHeading}</h2><p>{project.presentation.systemsIntro}</p></div><ol>{project.systems.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol></Grid></Container></section>

      <section className="mn-project-roles"><Container><p className="mn-kicker">Mariner Nexus role</p><ul>{project.presentation.roles.map((role) => <li key={role}>{role}</li>)}</ul></Container></section>

      <section className="mn-project-transformation"><Container><p className="mn-kicker">Transformation</p><blockquote>{project.transformation}</blockquote><p>No fabricated metrics. The visible qualitative change is the proof.</p></Container></section>

      <section className="mn-project-live"><Container><p className="mn-kicker">Live Experience</p><h2>Don’t take our word for it. See it for yourself.</h2><ExternalProjectLink href={project.liveUrl}>{project.presentation.liveCta}</ExternalProjectLink><p>The case study remains complete even if the external website is temporarily unavailable.</p></Container></section>

    </article></ProjectIdentityBoundary>
    <footer className="mn-project-continuation" data-navigation-context="Begin"><Container><Grid><div><p className="mn-kicker">Continue exploring</p><h2>What could Mariner Nexus do with yours?</h2></div><div><Link href="/capabilities">Explore capabilities</Link><Link href="/start">Start a Project</Link></div></Grid></Container></footer>
  </ProjectFrame>;
}
