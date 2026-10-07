import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading eyebrow="Services" title="What I Can Build For You" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.05}>
            <div className="card h-full p-6 transition-colors hover:border-zinc-600">
              <h3 className="font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
