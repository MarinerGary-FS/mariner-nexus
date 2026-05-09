import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import ConversionSection from "@/components/sections/ConversionSection";
import { caseStudyGroups, projectRecords } from "@/lib/case-studies";
import { absoluteUrl, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Transformation Records | Live Digital Ecosystem Proof",
  description:
    "Live transformation records showing digital authority systems, customer experience architecture, AI-native business operations, and communication ecosystems built by Mariner Nexus.",
  path: "/case-studies",
});

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mariner Nexus transformation records",
  url: absoluteUrl("/case-studies"),
  itemListElement: projectRecords.map((record, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: record.title,
    url: record.detailHref ? absoluteUrl(record.detailHref) : record.liveUrl,
    description: record.description,
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)]" />
        <div className="container-tight relative text-center">
          <FadeIn>
            <p className="eyebrow mb-5">Transformation Records</p>
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-[-0.035em] text-white mb-5 leading-[1.0]">
              Live proof.
              <br />
              <span className="text-white/32">Systems made visible.</span>
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-[1.7]">
              Current production ecosystems showing the movement from fragmented digital presence
              to synchronized authority, customer experience, and operational clarity.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-0 bg-black">
        <div className="container-tight space-y-20">
          {caseStudyGroups.map((group) => (
            <FadeIn key={group.group}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: group.color }} />
                <div>
                  <h2 className="text-[0.75rem] font-semibold tracking-[0.16em] uppercase text-white/45">
                    {group.group} Evolution
                  </h2>
                  <p className="text-white/25 text-[0.75rem] mt-0.5">
                    Transformation records grouped by the primary operational layer they strengthen.
                  </p>
                </div>
              </div>

              <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {group.studies.map((record) => {
                  const content = (
                    <article className="glass-card glass-card-hover rounded-2xl overflow-hidden h-full">
                      <div
                        className="h-px w-full opacity-35 group-hover:opacity-75 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, ${group.color}, transparent 60%)` }}
                      />
                      <div className="relative aspect-[16/10] overflow-hidden bg-black">
                        <Image
                          src={record.cardImage}
                          alt={record.proofAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top opacity-75 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/18 to-transparent" />
                        <div className="absolute left-5 top-5 rounded-full border border-white/[0.08] bg-black/45 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/48 backdrop-blur">
                          {record.category}
                        </div>
                      </div>

                      <div className="p-6 md:p-7">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-[1.35rem] font-bold text-white tracking-[-0.02em]">
                              {record.title}
                            </h3>
                            <p className="mt-2 text-sm text-white/34">{record.transformationType}</p>
                          </div>
                          <span className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/25">
                            {record.industry}
                          </span>
                        </div>

                        <p className="mt-5 text-[0.9rem] leading-7 text-white/48">{record.description}</p>

                        <div className="mt-6">
                          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-white/24">
                            Evolution Layers
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {record.evolutionLayers.map((layer) => (
                              <span
                                key={layer}
                                className="rounded-full border border-white/[0.06] bg-white/[0.035] px-3 py-1 text-[0.72rem] text-white/38"
                              >
                                {layer}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 border-t border-white/[0.06] pt-5">
                          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/22">
                            Future-State Outcome
                          </p>
                          <p className="mt-2 text-sm leading-6 text-white/58">{record.outcome}</p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          {record.detailHref ? (
                            <Link
                              href={record.detailHref}
                              className="inline-flex items-center gap-2 text-sm font-medium text-glow-blue/65 hover:text-glow-blue transition-colors"
                            >
                              View transformation record
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Link>
                          ) : (
                            <a
                              href={record.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-glow-blue/65 hover:text-glow-blue transition-colors"
                            >
                              View live ecosystem
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M3 3h6v6M8.5 3.5L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </a>
                          )}
                          <a
                            href={record.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/28 hover:text-white/55 transition-colors"
                          >
                            Production site
                          </a>
                        </div>
                      </div>
                    </article>
                  );

                  return (
                    <StaggerItem key={record.slug}>
                      <div className="group h-full">{content}</div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="pb-20 bg-black" />
      <ConversionSection />
    </>
  );
}
