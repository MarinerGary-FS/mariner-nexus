"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { nexusChoices, nexusCore, nexusNodeIds, nexusObjectives } from "@/content/nexus";
import type { NexusNodeDefinition, NexusNodeId, NexusObjectiveId } from "@/content/nexus";

type NexusPhase = "settled" | "reorganizing";
const fallbackPosition = { x: 50, y: 50 };
const coreIds: NexusNodeId[] = ["strategy", "experience", "systems"];

function connectionPath(from: NexusNodeDefinition, to: NexusNodeDefinition) {
  const distance = Math.abs(to.x - from.x);
  const bend = Math.max(5, Math.min(15, distance * 0.34));
  const direction = to.x >= from.x ? 1 : -1;
  return `M ${from.x} ${from.y} C ${from.x + bend * direction} ${from.y}, ${to.x - bend * direction} ${to.y}, ${to.x} ${to.y}`;
}

export function NexusExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [objectiveId, setObjectiveId] = useState<NexusObjectiveId>("build");
  const [selectedNodeId, setSelectedNodeId] = useState<NexusNodeId | null>(null);
  const [phase, setPhase] = useState<NexusPhase>("settled");
  const [entered, setEntered] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        observer.disconnect();
      }
    }, { rootMargin: "-12% 0px -18%", threshold: 0.16 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (settleTimer.current) clearTimeout(settleTimer.current);
  }, []);

  const objective = nexusObjectives.find((item) => item.id === objectiveId) ?? nexusCore;
  const visibleNodes = useMemo(() => new Map(objective.nodes.map((item) => [item.id, item])), [objective]);
  const selectedNode = selectedNodeId ? visibleNodes.get(selectedNodeId) : undefined;

  const selectObjective = (nextId: NexusObjectiveId) => {
    const next = nexusObjectives.find((item) => item.id === nextId);
    if (!next || next.id === objectiveId) return;
    if (settleTimer.current) clearTimeout(settleTimer.current);
    setPhase("reorganizing");
    setObjectiveId(nextId);
    setSelectedNodeId(null);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("settled");
      setAnnouncement(`${next.label} architecture selected. ${next.outcome}`);
      return;
    }
    settleTimer.current = setTimeout(() => {
      setPhase("settled");
      setAnnouncement(`${next.label} architecture settled. ${next.outcome}`);
    }, 720);
  };

  return (
    <div className="mn-nexus" data-entered={entered} data-nexus-objective={objective.id} data-nexus-phase={phase} ref={rootRef}>
      <div className="mn-nexus-entry" aria-hidden="true"><span>Experience</span><i /><span>System</span><i /><strong>Useful outcome</strong></div>

      <div className="mn-nexus-control-deck">
        <div><p>Set the objective</p><span>The architecture responds to the problem.</span></div>
        <div aria-label="Choose an objective" className="mn-nexus-objectives" role="group">
          {nexusChoices.map((choice, index) => (
            <button aria-pressed={objective.id === choice.id} key={choice.id} onClick={() => selectObjective(choice.id)} type="button">
              <span>0{index + 1}</span><strong>{choice.label}</strong><small>{choice.invitation}</small>
            </button>
          ))}
        </div>
      </div>

      <div className="mn-nexus-state-heading">
        <div><p>Live architecture · {phase === "reorganizing" ? "Reconfiguring" : "Settled"}</p><h3>{objective.label}</h3></div>
        <p>{objective.summary}</p>
      </div>

      <div className="mn-nexus-canvas">
        <div className="mn-nexus-identity" aria-hidden="true"><i /><i /><i /><span>MN</span></div>
        <svg aria-hidden="true" className="mn-nexus-connections" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs><linearGradient id="nexus-active-path" x1="0" x2="1"><stop offset="0" stopColor="var(--mn-signal-rest)" /><stop offset="0.55" stopColor="var(--mn-signal)" /><stop offset="1" stopColor="var(--mn-signal-settle)" /></linearGradient></defs>
          <ellipse className="mn-nexus-field-ring mn-nexus-field-ring--outer" cx="50" cy="50" rx="46" ry="40" />
          <ellipse className="mn-nexus-field-ring" cx="50" cy="50" rx="29" ry="25" />
          <path className="mn-nexus-axis" d="M50 4 C47 28 53 72 50 96" />
          {objective.connections.map((connection, index) => {
            const from = visibleNodes.get(connection.from);
            const to = visibleNodes.get(connection.to);
            if (!from || !to) return null;
            const active = selectedNodeId === null || selectedNodeId === from.id || selectedNodeId === to.id;
            return <path d={connectionPath(from, to)} data-active={active} key={`${connection.from}-${connection.relation}-${connection.to}`} pathLength="1" style={{ "--path-order": index } as CSSProperties} />;
          })}
        </svg>

        {nexusNodeIds.map((nodeId) => {
          const node = visibleNodes.get(nodeId);
          const fallback = nexusCore.nodes.find((item) => item.id === nodeId) ?? fallbackPosition;
          const position = node ?? fallback;
          const depth = node?.id === "outcome" ? 34 : coreIds.includes(node?.id as NexusNodeId) ? 22 : 8;
          const style = { "--nexus-x": `${position.x}%`, "--nexus-y": `${position.y}%`, "--nexus-z": `${depth}px` } as CSSProperties;
          return (
            <button aria-label={node ? `${node.label}, ${node.category}. ${node.description}${node.scoped ? " Scoped capability." : ""}` : undefined} aria-pressed={node ? selectedNodeId === node.id : undefined} aria-hidden={!node} className="mn-nexus-node" data-core={node ? coreIds.includes(node.id) : false} data-outcome={node?.id === "outcome"} data-scoped={node?.scoped ?? false} data-visible={Boolean(node)} disabled={!node} key={nodeId} onClick={() => node && setSelectedNodeId((current) => current === node.id ? null : node.id)} style={style} tabIndex={node ? 0 : -1} type="button">
              {node && <><span>{node.category}{node.scoped ? " · Scoped" : ""}</span><strong>{node.label}</strong></>}
            </button>
          );
        })}
      </div>

      <div className="mn-nexus-explanation">
        <div aria-live="polite" className="mn-nexus-selected-detail"><span>{selectedNode ? selectedNode.category : "Organizational result"}</span><p>{selectedNode ? selectedNode.description : objective.outcome}</p></div>
        <ol aria-label={`${objective.label} relationship sequence`} className="mn-nexus-semantic-flow">
          {objective.mobileOrder.map((nodeId, index) => {
            const node = visibleNodes.get(nodeId) as NexusNodeDefinition;
            const connection = objective.connections.find((item) => item.from === nodeId && objective.mobileOrder[index + 1] === item.to);
            return <li data-core={coreIds.includes(node.id)} data-outcome={node.id === "outcome"} key={nodeId}><button aria-pressed={selectedNodeId === node.id} onClick={() => setSelectedNodeId((current) => current === node.id ? null : node.id)} type="button"><span>{node.category}</span><strong>{node.label}</strong></button>{connection && <em>{connection.relation}</em>}</li>;
          })}
        </ol>
      </div>

      <div className="mn-nexus-peak" aria-hidden="true">
        <svg className="mn-nexus-peak-thread" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M3 22 C24 22 29 48 50 50 C71 52 76 78 97 78" />
          <path d="M3 78 C24 78 29 52 50 50 C71 48 76 22 97 22" />
          <path d="M50 2 C50 21 50 34 50 50 C50 66 50 79 50 98" />
          <circle cx="50" cy="50" r="1" />
        </svg>
        <div className="mn-nexus-peak-mark">
          {/* Deliberately native: this decorative, below-fold derivative stays lazy without adding next/image runtime to the client island. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" decoding="async" height="960" loading="lazy" src="/brand/micro-logo-peak.webp" width="960" />
          <i />
        </div>
        <p className="mn-nexus-peak-objective">{objective.label}</p>
        <div className="mn-nexus-peak-core mn-nexus-peak-core--strategy"><span>01</span><strong>Strategy</strong></div>
        <div className="mn-nexus-peak-core mn-nexus-peak-core--experience"><span>02</span><strong>Experience</strong></div>
        <div className="mn-nexus-peak-core mn-nexus-peak-core--systems"><span>03</span><strong>Systems</strong></div>
        <div className="mn-nexus-peak-outcome"><span>Outcome</span><strong>{objective.nodes.find((node) => node.id === "outcome")?.label}</strong></div>
        <div className="mn-nexus-peak-statement"><p>Strategy · Experience · Systems</p><strong>One architecture. Shaped by the objective.</strong></div>
      </div>
      <noscript><div className="mn-nexus-static">{nexusChoices.map((item) => <section key={item.id}><h3>{item.label}</h3><p>{item.summary}</p><ol>{item.mobileOrder.map((id) => { const itemNode = item.nodes.find((candidate) => candidate.id === id); return itemNode ? <li key={id}>{itemNode.label}</li> : null; })}</ol><strong>{item.outcome}</strong></section>)}</div></noscript>
      <p aria-live="polite" className="sr-only">{announcement}</p>
    </div>
  );
}
