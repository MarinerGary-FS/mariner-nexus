"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const stages = ["wide", "compressing", "intermediate", "reorganizing", "narrow", "settled"] as const;
type PerformanceStage = (typeof stages)[number];
const deconstructionStages = ["intact", "signal", "separation", "relationship", "system", "handoff", "mariner"] as const;
type DeconstructionStage = (typeof deconstructionStages)[number];

const labels: Record<PerformanceStage, string> = {
  wide: "Wide",
  compressing: "Compressing",
  intermediate: "Intermediate",
  reorganizing: "Reorganizing",
  narrow: "Narrow",
  settled: "Settled",
};

export function ResponsivePerformance({ children, deconstruction }: { children: ReactNode; deconstruction: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<PerformanceStage>("wide");
  const [deconstructionStage, setDeconstructionStage] = useState<DeconstructionStage>("intact");
  const [deconstructionActive, setDeconstructionActive] = useState(false);
  const [sourceFocused, setSourceFocused] = useState(false);
  const sourceReceded = deconstructionActive && ["relationship", "system", "handoff", "mariner"].includes(deconstructionStage) && !sourceFocused;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.dataset.enhanced = "true";
    const markers = [...root.querySelectorAll<HTMLElement>("[data-performance-marker]")];
    const observer = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
      const next = active?.target.getAttribute("data-performance-marker") as PerformanceStage | null;
      if (next && stages.includes(next)) { setStage(next); setDeconstructionActive(false); }
    }, { rootMargin: "-46% 0px -46% 0px", threshold: 0 });
    markers.forEach((marker) => observer.observe(marker));
    const deconstructionMarkers = [...root.querySelectorAll<HTMLElement>("[data-deconstruction-marker]")];
    const deconstructionObserver = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
      const next = active?.target.getAttribute("data-deconstruction-marker") as DeconstructionStage | null;
      if (next && deconstructionStages.includes(next)) { setDeconstructionStage(next); setDeconstructionActive(true); }
    }, { rootMargin: "-46% 0px -46% 0px", threshold: 0 });
    deconstructionMarkers.forEach((marker) => deconstructionObserver.observe(marker));
    return () => { observer.disconnect(); deconstructionObserver.disconnect(); };
  }, []);

  return <div className="mn-responsive-performance" data-deconstruction-active={deconstructionActive ? "true" : "false"} data-deconstruction-state={deconstructionStage} data-performance-state={stage} id="responsive-performance" ref={rootRef}>
    <div className="mn-responsive-performance-intro">
      <p className="mn-kicker">Responsive performance</p>
      <p>The same message. A composition designed for every screen.</p>
    </div>
    <div className="mn-responsive-performance-sticky">
      <p aria-hidden="true" className="mn-responsive-performance-state">{labels[stage]}</p>
      <p className="sr-only" id="undugu-responsive-description">The same Undugu interface progresses through wide, intermediate, and narrow responsive compositions as this section is traversed.</p>
      <div aria-describedby="undugu-responsive-description" aria-hidden={sourceReceded || undefined} className="mn-responsive-canvas-shell" inert={sourceReceded || undefined} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setSourceFocused(false); }} onFocusCapture={() => setSourceFocused(true)}>{children}</div>
      {deconstruction}
      <p aria-hidden="true" className="mn-deconstruction-state">{deconstructionStage}</p>
    </div>
    <div aria-hidden="true" className="mn-responsive-performance-markers">
      {stages.map((item) => <span data-performance-marker={item} key={item} />)}
    </div>
    <div aria-hidden="true" className="mn-deconstruction-markers">
      {deconstructionStages.map((item) => <span data-deconstruction-marker={item} key={item} />)}
    </div>
  </div>;
}
