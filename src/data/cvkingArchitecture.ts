import type { ArchEdge, ArchFeature, ArchNode, NodeKind, Workflow } from "@/types/architecture";

/**
 * High-level product architecture for CVKing AI.
 * Conceptual only: no specific infrastructure, providers or models are implied.
 * Edit this file to change the diagram; the components only render it.
 */

export const VIEWBOX = { w: 1000, h: 656 };

const node = (id: string, label: string, cx: number, y: number, w: number, kind: NodeKind, extra: Partial<ArchNode> = {}): ArchNode =>
  ({ id, label, cx, y, w, h: 34, kind, ...extra });

export const nodes: ArchNode[] = [
  node("user", "USER", 500, 10, 150, "core"),
  node("web", "CVKing Web Application", 500, 80, 250, "core"),
  node("auth", "Authentication", 500, 150, 200, "core"),
  node("workspace", "Career Workspace", 500, 220, 250, "core"),
  node("account", "Dashboard · Settings · Billing", 870, 220, 240, "support"),
  node("resume", "Resume Management", 230, 300, 220, "group"),
  node("ai-group", "AI Features", 730, 300, 220, "group"),
  // Resume Management: one connected workflow, top to bottom
  node("builder", "AI Resume Builder", 230, 360, 220, "resume", { featured: true }),
  node("templates", "Resume Templates", 230, 414, 190, "resume", { h: 30 }),
  node("editor", "Resume Editor", 230, 464, 190, "resume", { h: 30 }),
  node("preview", "Live Resume Preview", 230, 514, 210, "resume", { h: 30 }),
  node("export", "Resume Export", 230, 564, 190, "resume", { h: 30 }),
  node("pdf", "PDF Export", 150, 614, 150, "resume", { h: 30 }),
  node("docx", "DOCX Export", 310, 614, 150, "resume", { h: 30 }),
  // AI features
  node("analyzer", "AI Resume Analyzer", 620, 370, 200, "ai"),
  node("ats", "ATS Score Calculator", 840, 370, 200, "ai", { featured: true }),
  node("summary", "AI Summary Generator", 620, 415, 200, "ai"),
  node("assistant", "AI Assistant", 840, 415, 200, "ai", { featured: true }),
  node("roadmap", "Career Roadmap", 620, 460, 200, "ai"),
  node("jobmatch", "AI Job Match", 840, 460, 200, "ai"),
  // Processing + results
  node("llm", "AI / LLM Processing", 730, 525, 320, "ai-core", { h: 40 }),
  node("results", "Structured / Personalized Results", 730, 595, 320, "core"),
];

/** Resume Management steps, in workflow order. */
const RESUME_CHAIN = ["builder", "templates", "editor", "preview", "export"];
const AI = ["analyzer", "ats", "summary", "assistant", "roadmap", "jobmatch"];

export const edges: ArchEdge[] = [
  { from: "user", to: "web", ambient: true },
  { from: "web", to: "auth", ambient: true },
  { from: "auth", to: "workspace", ambient: true },
  { from: "workspace", to: "resume", ambient: true },
  { from: "workspace", to: "ai-group", ambient: true },
  { from: "workspace", to: "account" },
  // Resume Management workflow
  { from: "resume", to: "builder", ambient: true },
  ...RESUME_CHAIN.slice(1).map((to, i) => ({ from: RESUME_CHAIN[i], to, ambient: true })),
  { from: "export", to: "pdf", ambient: true },
  { from: "export", to: "docx", ambient: true },
  // AI features
  ...AI.map((to) => ({ from: "ai-group", to })),
  ...AI.map((from) => ({ from, to: "llm" })),
  { from: "llm", to: "results", ambient: true },
];

const BASE = ["user", "web", "auth", "workspace"];
const aiPath = (id: string) => [...BASE, "ai-group", id, "llm", "results"];
/**
 * Resume Management is one connected workflow. A node's active path is found by walking the edge graph:
 * every upstream node (back to the Career Workspace), the node itself, and everything downstream of it.
 * Hovering a sibling output (PDF vs DOCX) therefore leaves the other sibling dimmed.
 */
const upstream = (id: string): string[] =>
  id === "workspace" ? [] : edges.filter((e) => e.to === id).flatMap((e) => [e.from, ...upstream(e.from)]);
const downstream = (id: string): string[] => edges.filter((e) => e.from === id).flatMap((e) => [e.to, ...downstream(e.to)]);
const resumePath = (id: string) => Array.from(new Set([...upstream(id), id, ...downstream(id)]));


export const features: Record<string, ArchFeature> = {
  builder: { id: "builder", summary: "AI-powered resume creation and assistance for building a professional, ATS-friendly resume.", path: resumePath("builder") },
  templates: { id: "templates", summary: "Choose a resume template.", path: resumePath("templates") },
  editor: { id: "editor", summary: "Edit resume content and sections.", path: resumePath("editor") },
  preview: { id: "preview", summary: "See changes in a live resume preview.", path: resumePath("preview") },
  export: { id: "export", summary: "Final step: export the finished resume as a PDF or DOCX file.", path: resumePath("export") },
  pdf: { id: "pdf", summary: "Export the resume as a PDF.", path: resumePath("pdf") },
  docx: { id: "docx", summary: "Export the resume as a DOCX file.", path: resumePath("docx") },
  analyzer: { id: "analyzer", summary: "Reviews a resume and returns quality and ATS feedback with improvement suggestions.", path: aiPath("analyzer") },
  ats: { id: "ats", summary: "Scores a resume for ATS and analyzes keywords, skills and content to suggest improvements.", path: aiPath("ats") },
  summary: { id: "summary", summary: "Generates a professional summary that supports ATS-oriented optimization of the resume.", path: aiPath("summary") },
  assistant: { id: "assistant", summary: "An interactive helper that uses workspace and resume context to guide the user.", path: aiPath("assistant") },
  roadmap: { id: "roadmap", summary: "Builds a personalized roadmap from target role, skill level, experience and preferred technologies.", path: aiPath("roadmap") },
  jobmatch: { id: "jobmatch", summary: "Analyzes career fit and skill gaps to recommend matching jobs.", path: aiPath("jobmatch") },
};

export const workflows: Workflow[] = [
  { id: "ats", title: "ATS Score Calculator", featured: true, steps: ["Resume", "ATS Analysis", "ATS SCORE", "Keyword / Skill / Content Analysis", "Improvement Suggestions"] },
  { id: "summary", title: "AI Summary Generator", steps: ["Resume / User Information", "AI Summary Generator", "Professional Summary", "ATS Optimization", "Improved Resume"] },
  { id: "analyzer", title: "AI Resume Analyzer", steps: ["Resume", "AI Analysis", "Resume Quality / ATS Feedback", "Improvement Suggestions"] },
  { id: "assistant", title: "AI Assistant", featured: true, steps: ["User Question / Problem", "AI Assistant", "Relevant Resume / Workspace Context", "AI / LLM", "Helpful Response / Guidance"] },
  { id: "roadmap", title: "Career Roadmap", steps: ["Target Role + Skill Level + Experience + Preferred Technologies", "AI Processing", "Personalized Career Roadmap"] },
  { id: "jobmatch", title: "AI Job Match", steps: ["Resume", "Career Fit Analysis", "Skill Gap Analysis", "Job Matching", "Recommendations"] },
];

export const nodeById: Record<string, ArchNode> = Object.fromEntries(nodes.map((n) => [n.id, n]));
