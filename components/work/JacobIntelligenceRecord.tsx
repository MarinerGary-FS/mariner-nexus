import Image from "next/image";
import { Container } from "@/components/foundation/Container";
import type { ProjectIntelligenceRecord, ProjectRecord } from "@/content/projects/types";

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children} <span aria-hidden="true">↗</span>
      <span className="sr-only"> — opens the source in a new tab</span>
    </a>
  );
}

export function JacobProductEvidence({ media }: { media: ProjectRecord["media"] }) {
  return (
    <div className="mn-jacob-product-evidence">
      <figure className="mn-jacob-product-evidence__desktop">
        <Image alt={media.desktop.alt} fetchPriority="high" height={media.desktop.height} loading="eager" priority sizes="(max-width: 767px) calc(100vw - 40px), calc(100vw - 116px)" src={media.desktop.src} width={media.desktop.width} />
        <figcaption>Recruiting-first desktop experience.</figcaption>
      </figure>
      <div className="mn-jacob-product-evidence__responsive">
        <figure>
          <Image alt={media.tablet.alt} height={media.tablet.height} loading="eager" sizes="(max-width: 767px) 48vw, 28vw" src={media.tablet.src} width={media.tablet.width} />
          <figcaption>Tablet choreography.</figcaption>
        </figure>
        <figure>
          <Image alt={media.mobile.alt} height={media.mobile.height} loading="eager" sizes="(max-width: 767px) 44vw, 20vw" src={media.mobile.src} width={media.mobile.width} />
          <figcaption>Mobile recruiting entry.</figcaption>
        </figure>
      </div>
    </div>
  );
}

export function JacobIntelligenceRecord({ record }: { record: ProjectIntelligenceRecord }) {
  const currentLayers = record.architectureLayers.filter((layer) => layer.state === "operating");
  const futureLayer = record.architectureLayers.find((layer) => layer.state === "future");

  return (
    <>
      <section className="mn-jacob-challenge">
        <Container>
          <div className="mn-jacob-section-heading">
            <p className="mn-kicker">The challenge</p>
            <h2>{record.challengeHeading}</h2>
            <p>{record.challenge}</p>
          </div>
          <div className="mn-jacob-source-field">
            <div>
              <p>Information arrives through</p>
              <ul>{record.fragmentedSources.map((source) => <li key={source}>{source}</li>)}</ul>
            </div>
            <div>
              <p>The record distinguishes</p>
              <ul>{record.verificationClasses.map((sourceClass) => <li key={sourceClass}>{sourceClass}</li>)}</ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="mn-jacob-architecture" data-navigation-context="Intelligence">
        <Container>
          <div className="mn-jacob-section-heading">
            <p className="mn-kicker">Intelligence architecture</p>
            <h2>{record.architectureHeading}</h2>
            <p>{record.architectureIntro}</p>
          </div>
          <div className="mn-jacob-architecture-model">
            <div className="mn-jacob-architecture-model__current">
              <p>Operating now</p>
              <ol>
                {currentLayers.map((layer, index) => (
                  <li data-layer={index + 1} key={layer.name}>
                    <div><span>{String(index + 1).padStart(2, "0")}</span><strong>{layer.name}</strong></div>
                    <p>{layer.summary}</p>
                    <ul>{layer.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </li>
                ))}
              </ol>
            </div>
            {futureLayer && (
              <aside className="mn-jacob-architecture-model__future">
                <p>Future architecture · not operating now</p>
                <div><span>05</span><strong>{futureLayer.name}</strong></div>
                <p>{futureLayer.summary}</p>
                <ul>{futureLayer.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </aside>
            )}
          </div>
        </Container>
      </section>

      <section className="mn-jacob-provenance">
        <Container>
          <div className="mn-jacob-provenance__statement">
            <p className="mn-kicker">Provenance is a feature</p>
            <h2>{record.provenanceHeading}</h2>
            <p>{record.provenanceIntro}</p>
          </div>
          <ol className="mn-jacob-evidence-ledger">
            {record.evidence.map((item, index) => (
              <li key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><p>{item.sourceClass}</p><time dateTime={item.sourceDate.dateTime}>{item.sourceDate.label}</time><h3>{item.label}</h3><strong>{item.value}</strong></div>
                <SourceLink href={item.sourceUrl}>{item.sourceLabel}</SourceLink>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="mn-jacob-product-details">
        <Container>
          <div className="mn-jacob-section-heading">
            <p className="mn-kicker">Product evidence</p>
            <h2>The system explains itself at the point of use.</h2>
            <p>Film hierarchy, current-run provenance, and published performance are visible in the live experience—not hidden inside a case-study claim.</p>
          </div>
          <div className="mn-jacob-detail-grid">
            <figure>
              <Image alt={record.media.film.alt} height={record.media.film.height} loading="lazy" sizes="(max-width: 767px) calc(100vw - 40px), 58vw" src={record.media.film.src} width={record.media.film.width} />
              <figcaption>Film is ordered and source context remains attached.</figcaption>
            </figure>
            <figure>
              <Image alt={record.media.provenance.alt} height={record.media.provenance.height} loading="lazy" sizes="(max-width: 767px) calc(100vw - 40px), 38vw" src={record.media.provenance.src} width={record.media.provenance.width} />
              <figcaption>Current game evidence states what was published and what was not inferred.</figcaption>
            </figure>
            <figure>
              <Image alt={record.media.performance.alt} height={record.media.performance.height} loading="lazy" sizes="(max-width: 767px) calc(100vw - 40px), 38vw" src={record.media.performance.src} width={record.media.performance.width} />
              <figcaption>Recognition retains its team-published classification.</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section className="mn-jacob-comparison">
        <Container>
          <div className="mn-jacob-comparison__heading">
            <p className="mn-kicker">From website to system</p>
            <h2>Same public purpose. More useful structure.</h2>
          </div>
          <div className="mn-jacob-comparison__grid">
            <article>
              <h3>Traditional athlete website</h3>
              <ul>{record.traditionalWebsite.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <h3>Athlete intelligence platform</h3>
              <ul>{record.intelligencePlatform.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="mn-jacob-state-boundary">
        <Container>
          <div className="mn-jacob-state-boundary__heading">
            <p className="mn-kicker">Current versus future</p>
            <h2>Credibility depends on keeping the line visible.</h2>
          </div>
          <div className="mn-jacob-state-boundary__grid">
            <article>
              <div><span aria-hidden="true" /><h3>Operating now</h3></div>
              <ul>{record.operatingNow.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <div><span aria-hidden="true" /><h3>Architecture being developed · future state</h3></div>
              <ul>{record.futureState.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
