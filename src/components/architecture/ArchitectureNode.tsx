import type { ArchNode } from "@/types/architecture";

const ACCENT = "#7cc4ff";

interface ArchitectureNodeProps {
  node: ArchNode;
  active: boolean;
  dimmed: boolean;
  interactive: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

export function ArchitectureNode({ node, active, dimmed, interactive, onActivate, onDeactivate }: ArchitectureNodeProps) {
  const { cx, y, w, h, label, kind, featured } = node;
  const isAI = kind === "ai" || kind === "ai-core";
  const stroke = active ? ACCENT : featured || isAI ? "#2c4a66" : "#1c232d";
  const fill = kind === "group" ? "#101722" : "#0d1117";

  return (
    <g
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? label : undefined}
      onMouseEnter={interactive ? onActivate : undefined}
      onMouseLeave={interactive ? onDeactivate : undefined}
      onFocus={interactive ? onActivate : undefined}
      onBlur={interactive ? onDeactivate : undefined}
      style={{
        opacity: dimmed ? 0.3 : 1,
        transition: "opacity .25s, transform .2s",
        transformBox: "fill-box",
        transformOrigin: "center",
        transform: active && interactive ? "scale(1.05)" : "scale(1)",
        cursor: interactive ? "pointer" : "default",
        outline: "none",
      }}
    >
      <rect
        x={cx - w / 2}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={fill}
        stroke={stroke}
        strokeWidth={active || featured ? 1.6 : 1}
        style={{ transition: "stroke .25s", filter: active ? "drop-shadow(0 0 6px rgba(124,196,255,.35))" : undefined }}
      />
      <text
        x={cx}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={kind === "group" ? 14 : 13}
        fontWeight={kind === "group" || kind === "ai-core" || featured ? 600 : 400}
        fill={active ? "#fff" : kind === "group" ? ACCENT : "#d4d4d8"}
        style={{ transition: "fill .25s", pointerEvents: "none" }}
      >
        {label}
      </text>
    </g>
  );
}
