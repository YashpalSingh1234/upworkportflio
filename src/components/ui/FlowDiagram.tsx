"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const DEFAULT_STEPS = ["USER QUERY", "AI SYSTEM", "RETRIEVAL", "LLM", "INTELLIGENT RESPONSE"];

export function FlowDiagram({ steps = DEFAULT_STEPS }: { steps?: string[] }) {
  return (
    <ol className="flex flex-col items-center gap-1 font-mono text-xs tracking-wider" aria-label="AI system flow">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-col items-center gap-1">
          <motion.div
            animate={{ borderColor: ["#1c232d", "#7cc4ff", "#1c232d"] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            className="rounded-lg border bg-ink px-5 py-2.5 text-center text-zinc-200"
          >
            {s}
          </motion.div>
          {i < steps.length - 1 && <ArrowDown size={14} className="text-zinc-600" aria-hidden />}
        </li>
      ))}
    </ol>
  );
}
