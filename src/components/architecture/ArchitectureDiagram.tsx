"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { edges, features, nodeById, nodes, VIEWBOX } from "@/data/cvkingArchitecture";
import type { ArchNode } from "@/types/architecture";
import { ArchitectureNode } from "./ArchitectureNode";
import { ArchitectureConnection } from "./ArchitectureConnection";
import { ArchitectureTooltip } from "./ArchitectureTooltip";

function edgePath(a: ArchNode, b: ArchNode): string {
  if (a.y === b.y) {
    const y = a.y + a.h / 2;
    return `M${a.cx + a.w / 2} ${y}H${b.cx - b.w / 2}`;
  }
  const x1 = a.cx, y1 = a.y + a.h, x2 = b.cx, y2 = b.y, ym = (y1 + y2) / 2;
  return `M${x1} ${y1}C${x1} ${ym} ${x2} ${ym} ${x2} ${y2}`;
}

interface Props {
  activeId: string | null;
  onActiveChange: (id: string | null) => void;
}

export function ArchitectureDiagram({ activeId, onActiveChange }: Props) {
  const reduced = !!useReducedMotion();
  // Short hover-intent delay on leave, so crossing the gap between two nodes doesn't flash the idle state.
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearLeave = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); };
  const activate = (id: string) => { clearLeave(); onActiveChange(id); };
  const deactivate = () => { clearLeave(); leaveTimer.current = setTimeout(() => onActiveChange(null), 140); };
  useEffect(() => clearLeave, []);
  const path = activeId ? features[activeId].path : null;
  const activeNode = activeId ? nodeById[activeId] : null;

  const edgeActive = (from: string, to: string) => {
    if (!path) return false;
    const i = path.indexOf(from), j = path.indexOf(to);
    // An edge is active when both of its endpoints are on the highlighted path.
    return i >= 0 && j >= 0;
  };

  return (
    <div className="card p-3 sm:p-5"><div className="relative">
      <svg viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`} className="block h-auto w-full" role="group" aria-label="CVKing product architecture diagram">
        {edges.map((e) => (
          <ArchitectureConnection
            key={`${e.from}-${e.to}`}
            d={edgePath(nodeById[e.from], nodeById[e.to])}
            active={edgeActive(e.from, e.to)}
            dimmed={!!path && !edgeActive(e.from, e.to)}
            ambient={!!e.ambient}
            reduced={reduced}
          />
        ))}
        {nodes.map((n) => (
          <ArchitectureNode
            key={n.id}
            node={n}
            active={!!path && path.includes(n.id)}
            dimmed={!!path && !path.includes(n.id)}
            interactive={n.id in features}
            onActivate={() => activate(n.id)}
            onDeactivate={deactivate}
          />
        ))}
      </svg>
      {activeNode && <ArchitectureTooltip node={activeNode} summary={features[activeNode.id].summary} />}
      </div>
    </div>
  );
}
