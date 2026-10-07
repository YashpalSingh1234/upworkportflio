import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { reasons } from "@/data/process";

export function WhyMe() {
  return (
    <Section>
      <SectionHeading eyebrow="Why me" title="Why Work With Me" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <Reveal key={r.title}>
            <div className="card h-full p-6">
              <h3 className="font-medium text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{r.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
