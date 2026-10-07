"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

const groups = Object.keys(skillGroups);

export function Skills() {
  const [active, setActive] = useState(groups[0]);
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Technical Toolkit" />
      <div role="tablist" className="mb-6 flex flex-wrap gap-2">
        {groups.map((g) => (
          <button key={g} role="tab" aria-selected={active === g} onClick={() => setActive(g)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${active === g ? "border-accent text-white" : "border-line hover:text-white"}`}>{g}</button>
        ))}
      </div>
      <div role="tabpanel" className="card p-6 sm:p-8">
        <ul className="flex flex-wrap gap-3 font-mono text-sm">
          {skillGroups[active].map((s) => <motion.li key={active + s} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-line bg-ink px-4 py-2 text-zinc-200">{s}</motion.li>)}
        </ul>
      </div>
    </Section>
  );
}
