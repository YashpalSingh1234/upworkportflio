import { ArrowDown } from "lucide-react";
import { features, nodeById, nodes } from "@/data/cvkingArchitecture";

const STEPS = ["USER", "CVKing Web Application", "Authentication", "Career Workspace"];
const RESUME_STEPS = ["builder", "templates", "editor", "preview", "export"];
const aiNodes = nodes.filter((n) => n.kind === "ai");

interface Props {
  activeId: string | null;
  onSelect: (id: string | null) => void;
}

function Arrow({ small }: { small?: boolean }) {
  return <ArrowDown size={small ? 14 : 16} className={`mx-auto text-zinc-600 ${small ? "my-1" : "my-2"}`} aria-hidden />;
}

function StepButton({ id, activeId, onSelect, className = "" }: Props & { id: string; className?: string }) {
  const path = activeId ? features[activeId].path : null;
  const lit = !!path && path.includes(id);
  const node = nodeById[id];
  return (
    <button
      onClick={() => onSelect(activeId === id ? null : id)}
      aria-pressed={activeId === id}
      className={`rounded-lg border px-3 py-2 text-xs transition-colors ${lit ? "border-accent text-white" : "border-line text-zinc-300"} ${node.featured ? "font-semibold" : ""} ${path && !lit ? "opacity-40" : ""} ${className}`}
    >
      {node.label}
    </button>
  );
}

function ResumeFlow({ activeId, onSelect }: Props) {
  return (
    <div className="card p-4">
      <p className="mb-3 text-center text-sm font-semibold text-accent">Resume Management</p>
      <div className="flex flex-col items-stretch">
        {RESUME_STEPS.map((id, i) => (
          <div key={id}>
            <StepButton id={id} activeId={activeId} onSelect={onSelect} className="w-full" />
            {i < RESUME_STEPS.length - 1 && <Arrow small />}
          </div>
        ))}
        <Arrow small />
        <div className="grid grid-cols-2 gap-2">
          <StepButton id="pdf" activeId={activeId} onSelect={onSelect} />
          <StepButton id="docx" activeId={activeId} onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
}

function AIChips({ activeId, onSelect }: Props) {
  return (
    <div className="card p-4">
      <p className="mb-3 text-center text-sm font-semibold text-accent">AI Features</p>
      <ul className="flex flex-wrap justify-center gap-2">
        {aiNodes.map((n) => (
          <li key={n.id}>
            <StepButton id={n.id} activeId={activeId} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MobileFlow({ activeId, onSelect }: Props) {
  return (
    <div className="mx-auto max-w-sm text-center text-sm">
      {STEPS.map((s) => (
        <div key={s}>
          <div className="card px-4 py-2.5 text-zinc-200">{s}</div>
          <Arrow />
        </div>
      ))}
      <ResumeFlow activeId={activeId} onSelect={onSelect} />
      <Arrow />
      <AIChips activeId={activeId} onSelect={onSelect} />
      <Arrow />
      <div className="card border-accent/30 px-4 py-2.5 font-medium text-white">AI / LLM Processing</div>
      <Arrow />
      <div className="card px-4 py-2.5 text-zinc-200">Structured / Personalized Results</div>
      <p className="mt-4 min-h-[2.5rem] text-xs text-zinc-400" aria-live="polite">
        {activeId ? features[activeId].summary : "Tap a feature to see what it does."}
      </p>
    </div>
  );
}
