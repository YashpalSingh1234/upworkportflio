"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { MobileFlow } from "./MobileFlow";
import { WorkflowCard } from "./WorkflowCard";
import { workflows } from "@/data/cvkingArchitecture";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

function ModalContent({ onClose }: { onClose: () => void }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cvking-arch-title"
      className="fixed inset-0 z-[60] overflow-y-auto overflow-x-hidden bg-ink/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,196,255,0.10),transparent_70%)]" aria-hidden />
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close architecture"
        className="fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-zinc-300 transition-colors hover:border-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent sm:right-6 sm:top-6"
      >
        <X size={20} />
      </button>
      <motion.div
        className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 pt-16 sm:px-8"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <header className="mb-8 max-w-2xl pr-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Architecture</p>
          <h2 id="cvking-arch-title" className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-4xl">CVKing Architecture</h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">How CVKing connects resume workflows, AI-powered career tools, and personalized user experiences.</p>
        </header>
        <div className="hidden md:block">
          <ArchitectureDiagram activeId={activeId} onActiveChange={setActiveId} />
        </div>
        <div className="md:hidden">
          <MobileFlow activeId={activeId} onSelect={setActiveId} />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((w) => (
            <WorkflowCard key={w.id} workflow={w} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CVKingArchitectureModal({ open, onClose }: ModalProps) {
  return <AnimatePresence>{open && <ModalContent onClose={onClose} />}</AnimatePresence>;
}
