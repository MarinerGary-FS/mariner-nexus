"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { nexusChoices, nexusCore, nexusNodeIds, nexusObjectives } from "@/content/nexus";
import type { NexusNodeDefinition, NexusNodeId, NexusObjectiveId } from "@/content/nexus";

type NexusPhase = "settled" | "reorganizing";

const fallbackPosition = { x: 50, y: 50 };

export function NexusExperience() {
  const [objectiveId, setObjectiveId] = useState<NexusObjectiveId>("core");
  const [selectedNodeId, setSelectedNodeId] = useState<NexusNodeId | null>(null);
  const [phase, setPhase] = useState<NexusPhase>("settled");
  const [announcement, setAnnouncement] = useState("");
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setPhase("settled");
      setAnnouncement(`${next.label} architecture selected. ${next.outcome}`);
      return;
    }
    settleTimer.current = setTimeout(() => {
      setPhase("settled");
      setAnnouncement(`${next.label} architecture settled. ${next.outcome}`);
    }, 620);
  };

  return (
    <div className="mn-nexus" data-nexus-objective={objective.id} data-nexus-phase={phase}>
      <div aria-label="Choose an objective" className="mn-nexus-objectives" role="group">
        {nexusChoices.map((choice, index) => (
          <button aria-pressed={objective.id === choice.id} key={choice.id} onClick={() => selectObjective(choice.id)} type="button">
            <span>0{index + 1}</span>
            <strong>{choice.label}</strong>
          </button>
        ))}
      </div>

      <div className="mn-nexus-state-heading">
        <div>
          <p>{objective.id === "core" ? "Initial architecture" : "Selected objective"}</p>
          <h3>{objective.id === "core" ? "Strategy × Experience × Systems" : objective.label}</h3>
        </div>
        <p>{objective.summary}</p>
      </div>

      <div className="mn-nexus-canvas">
        <svg aria-hidden="true" className="mn-nexus-connections" preserveAspectRatio="none" viewBox="0 0 100 100">
          {objective.connections.map((connection) => {
            const from = visibleNodes.get(connection.from);
            const to = visibleNodes.get(connection.to);
            if (!from || !to) return null;
            const active = selectedNodeId === null || selectedNodeId === from.id || selectedNodeId === to.id;
            return <line data-active={active} key={`${connection.from}-${connection.relation}-${connection.to}`} x1={from.x} x2={to.x} y1={from.y} y2={to.y} />;
          })}
        </svg>

        {nexusNodeIds.map((nodeId) => {
          const node = visibleNodes.get(nodeId);
          const fallback = nexusCore.nodes.find((item) => item.id === nodeId) ?? fallbackPosition;
          const position = node ?? fallback;
          const style = { "--nexus-x": `${position.x}%`, "--nexus-y": `${position.y}%` } as CSSProperties;
          return (
            <button
              aria-label={node ? `${node.label}, ${node.category}. ${node.description}${node.scoped ? " Scoped capability." : ""}` : undefined}
              aria-pressed={node ? selectedNodeId === node.id : undefined}
              aria-hidden={!node}
              className="mn-nexus-node"
              data-core={node ? ["strategy", "experience", "systems"].includes(node.id) : false}
              data-outcome={node?.id === "outcome"}
              data-scoped={node?.scoped ?? false}
              data-visible={Boolean(node)}
              disabled={!node}
              key={nodeId}
              onClick={() => node && setSelectedNodeId((current) => current === node.id ? null : node.id)}
              style={style}
              tabIndex={node ? 0 : -1}
              type="button"
            >
              {node && <><span>{node.category}{node.scoped ? " · Scoped" : ""}</span><strong>{node.label}</strong></>}
            </button>
          );
        })}
      </div>

      <div className="mn-nexus-explanation">
        <div aria-live="polite" className="mn-nexus-selected-detail">
          <span>{selectedNode ? selectedNode.category : "Architecture outcome"}</span>
          <p>{selectedNode ? selectedNode.description : objective.outcome}</p>
        </div>
        <ol aria-label={`${objective.label} relationship sequence`} className="mn-nexus-semantic-flow">
          {objective.mobileOrder.map((nodeId, index) => {
            const node = visibleNodes.get(nodeId) as NexusNodeDefinition;
            const connection = objective.connections.find((item) => item.from === nodeId && objective.mobileOrder[index + 1] === item.to);
            return <li key={nodeId}><button aria-pressed={selectedNodeId === node.id} onClick={() => setSelectedNodeId((current) => current === node.id ? null : node.id)} type="button"><span>{node.category}</span><strong>{node.label}</strong></button>{connection && <em>{connection.relation}</em>}</li>;
          })}
        </ol>
      </div>

      <p aria-live="polite" className="sr-only">{announcement}</p>
    </div>
  );
}
