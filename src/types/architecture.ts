export type NodeKind = "core" | "group" | "resume" | "ai" | "ai-core" | "support";

export interface ArchNode {
  id: string;
  label: string;
  /** Horizontal centre and top edge, in SVG viewBox units. */
  cx: number;
  y: number;
  w: number;
  h: number;
  kind: NodeKind;
  featured?: boolean;
}

export interface ArchEdge {
  from: string;
  to: string;
  /** Gets a slow ambient particle when nothing is hovered. */
  ambient?: boolean;
}

export interface ArchFeature {
  id: string;
  summary: string;
  /** Ordered node ids highlighted when the feature is hovered. */
  path: string[];
}

export interface Workflow {
  id: string;
  title: string;
  steps: string[];
  featured?: boolean;
}
