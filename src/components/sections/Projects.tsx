"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/site";

export function Projects() {
  return (
    <Section id="work">
      <SectionHeading eyebrow="Work" title="Selected Work" subtitle="AI systems and products built with modern machine learning and generative AI technologies." />
      <div className="space-y-8">
        {projects.map((p) => (
          <Reveal key={p.id}>
            <motion.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card overflow-hidden">
              <div className="border-b border-line bg-ink/60 p-6 sm:p-8">
                <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-500">{p.id} · Architecture</p>
                <ol className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  {p.flow.map((s, i) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="rounded-md border border-line px-3 py-1.5 text-zinc-300">{s}</span>
                      {i < p.flow.length - 1 && <span className="text-zinc-600" aria-hidden>→</span>}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">{p.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-4 text-sm text-zinc-400"><b className="text-zinc-200">Problem. </b>{p.problem}</p>
                  <p className="mt-2 text-sm text-zinc-400"><b className="text-zinc-200">Solution. </b>{p.solution}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{p.stack.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs">{t}</li>)}</ul>
                </div>
                <div>
                  <ul className="grid gap-2 text-sm sm:grid-cols-2">{p.features.map((f) => <li key={f} className="text-zinc-400"><span className="text-accent">▸ </span>{f}</li>)}</ul>
                  <div className="mt-6 flex gap-3">
                    <a href={socialLinks.github} className="btn border border-line text-white"><Github size={16} /> GitHub</a>
                    {p.hasLiveDemo && <a href="#" className="btn bg-white text-black"><ExternalLink size={16} /> Live Demo</a>}
                  </div>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
