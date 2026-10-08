import type { ArchNode } from "@/types/architecture";
import { VIEWBOX } from "@/data/cvkingArchitecture";

/** Resume Management tooltips sit to the right of the chain, in the empty space beside it. */
const RESUME_TOOLTIP_X = 395;

export function ArchitectureTooltip({ node, summary }: { node: ArchNode; summary: string }) {
  // Above the node would cover the highlighted upstream step, so the resume chain uses a side placement.
  const beside = node.kind === "resume";
  const style = beside
    ? {
        left: `${(RESUME_TOOLTIP_X / VIEWBOX.w) * 100}%`,
        top: `${((node.y + node.h / 2) / VIEWBOX.h) * 100}%`,
        transform: "translate(0, -50%)",
      }
    : {
        left: `${(node.cx / VIEWBOX.w) * 100}%`,
        top: `${(node.y / VIEWBOX.h) * 100}%`,
        transform: "translate(-50%, calc(-100% - 10px))",
      };

  return (
    <div
      role="tooltip"
      className="pointer-events-none absolute z-10 w-60 rounded-lg border border-line bg-panel px-3 py-2 text-xs leading-relaxed text-zinc-300 shadow-lg"
      style={style}
    >
      <p className="mb-0.5 font-medium text-white">{node.label}</p>
      {summary}
    </div>
  );
}
