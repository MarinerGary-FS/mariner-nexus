"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const stages = ["wide", "compressing", "intermediate", "reorganizing", "narrow", "settled"] as const;
type PerformanceStage = (typeof stages)[number];

const labels: Record<PerformanceStage, string> = {
  wide: "Wide",
  compressing: "Compressing",
  intermediate: "Intermediate",
  reorganizing: "Reorganizing",
  narrow: "Narrow",
  settled: "Settled",
};

export function ResponsivePerformance({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<PerformanceStage>("wide");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.dataset.enhanced = "true";
    const markers = [...root.querySelectorAll<HTMLElement>("[data-performance-marker]")];
    const observer = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
      const next = active?.target.getAttribute("data-performance-marker") as PerformanceStage | null;
      if (next && stages.includes(next)) setStage(next);
    }, { rootMargin: "-46% 0px -46% 0px", threshold: 0 });
    markers.forEach((marker) => observer.observe(marker));
    return () => observer.disconnect();
  }, []);

  return <div className="mn-responsive-performance" data-performance-state={stage} id="responsive-performance" ref={rootRef}>
    <div className="mn-responsive-performance-intro">
      <p className="mn-kicker">Responsive performance</p>
      <p>The same message. A composition designed for every screen.</p>
    </div>
    <div className="mn-responsive-performance-sticky">
      <p aria-hidden="true" className="mn-responsive-performance-state">{labels[stage]}</p>
      <p className="sr-only" id="undugu-responsive-description">The same Undugu interface progresses through wide, intermediate, and narrow responsive compositions as this section is traversed.</p>
      <div aria-describedby="undugu-responsive-description" className="mn-responsive-canvas-shell">{children}</div>
    </div>
    <div aria-hidden="true" className="mn-responsive-performance-markers">
      {stages.map((item) => <span data-performance-marker={item} key={item} />)}
    </div>
  </div>;
}
