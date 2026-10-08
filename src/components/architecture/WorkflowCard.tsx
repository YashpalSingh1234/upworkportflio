import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Reveal } from "@/components/ui/Reveal";
import type { Workflow } from "@/types/architecture";

export function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <Reveal>
      <div className={`card h-full p-5 ${workflow.featured ? "border-accent/40" : ""}`}>
        <h3 className="mb-4 text-center text-sm font-semibold text-white">{workflow.title}</h3>
        <FlowDiagram steps={workflow.steps} />
      </div>
    </Reveal>
  );
}
