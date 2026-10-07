import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Meet the Engineer" />
      <Reveal className="max-w-3xl space-y-4 text-zinc-400">
        <p>I&apos;m Yashpal Singh, an AI/ML engineer working across machine learning, deep learning, generative AI, RAG, LLM applications, AI agents, computer vision and Python backend development.</p>
        <p>My background is in software development, and I moved into AI/ML engineering to build systems that deliver real value. I care about clean architecture, reliable behavior and solutions that fit the client&apos;s actual problem.</p>
      </Reveal>
    </Section>
  );
}
