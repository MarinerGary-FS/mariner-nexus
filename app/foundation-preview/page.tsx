import type { Metadata } from "next";
import { Container } from "@/components/foundation/Container";
import { FoundationButton } from "@/components/foundation/FoundationButton";
import { Grid } from "@/components/foundation/Grid";
import { SignalState } from "@/components/foundation/SignalState";
import { Surface } from "@/components/foundation/Surface";

export const metadata: Metadata = {
  title: "Visual Foundation Review",
  robots: { index: false, follow: false },
};

const environmentTokens = [
  { name: "Nexus White", value: "#F7F8F6", className: "bg-[var(--mn-env-canvas)]" },
  { name: "Silver", value: "#E9EDEB", className: "bg-[#e9edeb]" },
  { name: "Structural Gray", value: "#CBD2CE", className: "bg-[#cbd2ce]" },
  { name: "Graphite", value: "#242B28", className: "bg-[var(--mn-env-strong)]" },
  { name: "Nexus Black", value: "#0B100E", className: "bg-[var(--mn-env-depth)]" },
];

const systemDetails = [
  ["Primary type", "Geist Sans"],
  ["Editorial type", "Source Serif 4"],
  ["Desktop grid", "12 columns"],
  ["Material", "Architectural restraint"],
];

function Arrow() {
  return (
    <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 14 14" width="14">
      <path d="M2 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
    </svg>
  );
}

export default function FoundationPreviewPage() {
  return (
    <div className="foundation-preview mn-environment-light min-h-screen">
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-black" href="#foundation-content">
        Skip to foundation content
      </a>

      <header className="border-b border-[var(--mn-line-subtle)]">
        <Container className="flex min-h-20 items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="grid size-9 place-items-center border border-[var(--mn-line-strong)] text-xs font-semibold tracking-[-0.03em]">
              MN
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[-0.015em]">Mariner Nexus</p>
              <p className="text-[var(--mn-type-caption)] text-[var(--mn-ink-muted)]">Visual foundation / 01B</p>
            </div>
          </div>
          <p className="hidden text-[var(--mn-type-caption)] font-medium uppercase tracking-[0.12em] text-[var(--mn-ink-muted)] sm:block">
            Corporate discipline × creative ambition
          </p>
        </Container>
      </header>

      <div id="foundation-content">
        <section className="mn-section border-b border-[var(--mn-line-subtle)]">
          <Container>
            <Grid className="foundation-hero-grid items-end">
              <div className="foundation-hero-title col-span-4 md:col-span-5 lg:col-span-8">
                <div className="mn-signal-line mb-8" />
                <p className="mn-kicker mb-6">System foundation</p>
                <h1 className="mn-display">Clarity is an operating advantage.</h1>
              </div>
              <div className="foundation-hero-support col-span-4 mt-12 md:col-span-3 md:mt-0 lg:col-span-4">
                <p className="mn-lead">
                  A precise visual system for serious organizations—quiet at first, increasingly capable as the work reveals itself.
                </p>
                <div className="foundation-preview-actions mt-8 flex flex-wrap gap-3">
                  <FoundationButton href="#primitives">
                    Review primitives <Arrow />
                  </FoundationButton>
                  <FoundationButton className="foundation-preview-secondary" href="#environments" variant="secondary">
                    View environments
                  </FoundationButton>
                </div>
              </div>
            </Grid>
          </Container>
        </section>

        <section className="mn-section-compact border-b border-[var(--mn-line-subtle)]">
          <Container>
            <Grid>
              <div className="col-span-4 md:col-span-2 lg:col-span-3">
                <p className="mn-kicker">Foundation logic</p>
              </div>
              <div className="col-span-4 mt-10 md:col-span-6 md:mt-0 lg:col-span-9">
                <div className="grid gap-px border border-[var(--mn-line-subtle)] bg-[var(--mn-line-subtle)] sm:grid-cols-2">
                  {systemDetails.map(([label, value]) => (
                    <div className="bg-[var(--mn-env-canvas)] p-6 md:p-8" key={label}>
                      <p className="text-[var(--mn-type-caption)] uppercase tracking-[0.12em] text-[var(--mn-ink-muted)]">{label}</p>
                      <p className="mt-4 text-lg font-semibold tracking-[-0.02em]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
          </Container>
        </section>

        <section className="mn-section" id="environments">
          <Container>
            <Grid className="items-start">
              <div className="col-span-4 md:col-span-3 lg:col-span-4">
                <p className="mn-kicker">Environment</p>
                <h2 className="mn-heading-2 mt-5">Neutral carries the structure.</h2>
                <p className="mn-body mt-6 max-w-md">
                  Light communicates business clarity. Graphite and black reveal operational depth. Neither competes with client identity.
                </p>
              </div>
              <div className="col-span-4 mt-12 md:col-span-5 md:mt-0 lg:col-span-8">
                <div className="grid gap-3 sm:grid-cols-5">
                  {environmentTokens.map((token) => (
                    <div key={token.name}>
                      <div className={`aspect-[4/5] border border-[var(--mn-line-subtle)] ${token.className}`} />
                      <p className="mt-3 text-sm font-semibold">{token.name}</p>
                      <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--mn-ink-muted)]">{token.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Grid>
          </Container>
        </section>

        <section className="mn-environment-dark mn-section" id="primitives">
          <Container>
            <Grid>
              <div className="col-span-4 md:col-span-3 lg:col-span-4">
                <p className="mn-kicker">Activity</p>
                <h2 className="mn-heading-2 mt-5">Signal only when the system responds.</h2>
              </div>
              <div className="col-span-4 mt-12 md:col-span-5 md:mt-0 lg:col-span-8">
                <Surface className="bg-[var(--mn-env-surface)] p-6 md:p-9">
                  <div className="grid gap-6 border-b border-[var(--mn-line-subtle)] pb-8 sm:grid-cols-2">
                    <SignalState label="Rest" state="rest" />
                    <SignalState label="Active" state="active" />
                    <SignalState label="Signal" state="signal" />
                    <SignalState label="Settle" state="settle" />
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <FoundationButton>System active</FoundationButton>
                    <FoundationButton variant="secondary">Secondary action</FoundationButton>
                    <FoundationButton variant="text">Text action <Arrow /></FoundationButton>
                  </div>
                </Surface>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Surface className="bg-[var(--mn-env-surface)] p-6 md:p-8">
                    <p className="mn-kicker">Structure</p>
                    <h3 className="mn-heading-3 mt-8">Information before ornament.</h3>
                    <p className="mn-body mt-4">Hairlines, measured spacing, and controlled geometry establish trust without theatrical surface effects.</p>
                  </Surface>
                  <Surface className="bg-[var(--mn-env-surface)] p-6 md:p-8" raised>
                    <p className="mn-kicker">Depth</p>
                    <h3 className="mn-heading-3 mt-8">Material earns emphasis.</h3>
                    <p className="mn-body mt-4">Elevation is reserved for genuine hierarchy. It should never become a repeating card language.</p>
                  </Surface>
                </div>
              </div>
            </Grid>
          </Container>
        </section>

        <section className="mn-section mn-environment-silver">
          <Container>
            <Grid className="items-end">
              <div className="col-span-4 md:col-span-3 lg:col-span-4">
                <p className="mn-kicker">Editorial counterpoint</p>
              </div>
              <div className="col-span-4 mt-10 md:col-span-5 md:mt-0 lg:col-span-8">
                <blockquote className="mn-editorial max-w-4xl">
                  “The technology disappears. What remains is confidence in the system.”
                </blockquote>
                <p className="mt-6 text-sm font-semibold text-[var(--mn-ink-secondary)]">Source Serif 4 / selective use only</p>
              </div>
            </Grid>
          </Container>
        </section>

        <section className="mn-section-compact border-t border-[var(--mn-line-subtle)]">
          <Container>
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div>
                <p className="mn-kicker">Phase 01B</p>
                <p className="mt-4 max-w-xl text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  A disciplined frame ready for content, work, and systems.
                </p>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[var(--mn-ink-muted)]">
                Foundation review surface. Not final homepage content or route architecture.
              </p>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
