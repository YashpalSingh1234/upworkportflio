"use client";
import { motion } from "framer-motion";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { techStrip } from "@/data/skills";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block rounded-full border border-line px-3 py-1 font-mono text-xs tracking-widest text-accent">AI / ML ENGINEER</span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            I Build AI Systems That Solve <span className="text-accent">Real Problems.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I design and develop production-ready AI applications using RAG, LLMs, AI agents, machine learning and computer vision.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="btn bg-white text-black">View My Work →</a>
            <a href="#contact" className="btn border border-line text-white hover:border-zinc-500">Let&apos;s Work Together ↗</a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            Available for freelance projects
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="card p-6 sm:p-8">
          <div className="mb-5 flex gap-1.5" aria-hidden><i className="h-2.5 w-2.5 rounded-full bg-zinc-700" /><i className="h-2.5 w-2.5 rounded-full bg-zinc-700" /><i className="h-2.5 w-2.5 rounded-full bg-zinc-700" /></div>
          <FlowDiagram />
        </motion.div>
      </div>
      <div className="relative mx-auto mt-16 max-w-6xl px-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-line py-5 font-mono text-xs uppercase tracking-widest text-zinc-500">
          {techStrip.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}
