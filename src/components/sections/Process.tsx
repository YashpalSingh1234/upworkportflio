import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <Section>
      <SectionHeading eyebrow="Process" title="From Idea to Production" />
      <ol className="grid gap-4 md:grid-cols-5">
        {processSteps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.08}>
            <li className="card h-full list-none p-5">
              <span className="font-mono text-sm text-accent">{s.step}</span>
              <h3 className="mt-2 font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{s.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
