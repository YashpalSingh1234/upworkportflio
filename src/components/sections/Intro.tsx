import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <Section>
      <SectionHeading eyebrow="Introduction" title="Building AI that works beyond the prototype." />
      <Reveal><p className="max-w-3xl text-lg leading-relaxed text-zinc-400">I build practical AI and machine learning systems across Generative AI, RAG, LLM applications, AI agents, computer vision and backend APIs, with a focus on engineering, reliability and real-world use.</p></Reveal>
    </Section>
  );
}
