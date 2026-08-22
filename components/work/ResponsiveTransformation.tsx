"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectMedia } from "@/content/projects/types";

type ResponsiveState = "desktop" | "tablet" | "mobile";

type ResponsiveTransformationProps = {
  clientName: string;
  media: {
    desktop: ProjectMedia;
    tablet: ProjectMedia;
    mobile: ProjectMedia;
  };
};

const states: Array<{ id: ResponsiveState; label: string }> = [
  { id: "desktop", label: "Desktop" },
  { id: "tablet", label: "Tablet" },
  { id: "mobile", label: "Mobile" },
];

export function ResponsiveTransformation({ clientName, media }: ResponsiveTransformationProps) {
  const [activeState, setActiveState] = useState<ResponsiveState>("desktop");

  return <div className="mn-responsive-transformation" data-responsive-state={activeState}>
    <div className="mn-responsive-controls" role="group" aria-label={`${clientName} responsive presentation`}>
      {states.map(({ id, label }, index) => <button aria-pressed={activeState === id} key={id} onClick={() => setActiveState(id)} type="button"><span>{String(index + 1).padStart(2, "0")}</span><span>{label}</span></button>)}
    </div>
    <p className="sr-only" aria-live="polite">{states.find(({ id }) => id === activeState)?.label} composition selected.</p>
    <div className="mn-responsive-stage">
      {states.map(({ id, label }) => {
        const image = media[id];
        return <figure aria-hidden={activeState !== id} className="mn-responsive-view" data-view={id} key={id}>
          <Image alt={activeState === id ? image.alt : ""} height={image.height} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1099px) 78vw, 82vw" src={image.src} width={image.width} />
          <figcaption><span>{label} composition</span><span>Actual production experience</span></figcaption>
        </figure>;
      })}
    </div>
  </div>;
}
