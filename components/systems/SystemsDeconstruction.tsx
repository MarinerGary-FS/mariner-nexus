"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { number: "01", name: "Interaction", entity: "Project inquiry", purpose: "A person describes what they are trying to create." },
  { number: "02", name: "Validation", entity: "Input check", purpose: "Required information and safe limits are checked before anything moves forward." },
  { number: "03", name: "Data capture", entity: "Structured record", purpose: "The inquiry becomes an organized Google Workspace record instead of an unstructured message." },
  { number: "04", name: "System", entity: "Notification", purpose: "A concise notification tells the right person that a new record is ready for review." },
  { number: "05", name: "Operational action", entity: "Human follow-up", purpose: "The system supports a timely, informed response; it does not replace human judgment." },
];

export function SystemsDeconstruction() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { rootMargin: "-18% 0px -18% 0px", threshold: 0.18 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mn-systems-deconstruction" data-revealed={revealed} ref={rootRef}>
      <div className="mn-systems-interface" aria-label="Representative project inquiry interaction">
        <div className="mn-systems-interface-head"><span>Project inquiry</span><span>Representative interaction</span></div>
        <div className="mn-systems-form-row"><span>Objective</span><strong>Strengthen our digital operation</strong></div>
        <div className="mn-systems-form-row"><span>Current state</span><strong>The experience and follow-up are disconnected</strong></div>
        <button disabled type="button">Submit inquiry <span aria-hidden="true">→</span></button>
      </div>

      <div className="mn-systems-below-surface">
        <p className="mn-kicker">Below the visible surface</p>
        <ol aria-label="Representative connected inquiry workflow" className="mn-systems-flow">
          {stages.map((stage, index) => (
            <li data-active={activeIndex === index} data-complete={index < activeIndex} key={stage.name}>
              <button
                aria-label={`${stage.name}: ${stage.entity}. ${stage.purpose}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span>{stage.number}</span>
                <strong>{stage.entity}</strong>
                <em>{stage.name}</em>
              </button>
              <p>{stage.purpose}</p>
            </li>
          ))}
        </ol>
        <div aria-live="polite" className="mn-systems-active-detail">
          <span>{stages[activeIndex].name}</span>
          <p>{stages[activeIndex].purpose}</p>
        </div>
      </div>
    </div>
  );
}
