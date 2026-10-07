"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">YASH.</a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navigation.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} className="transition-colors hover:text-white">{n}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn hidden bg-white text-black md:inline-flex">Let&apos;s Talk →</a>
        <button className="p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden px-5 pb-5 md:hidden">
            {navigation.map((n) => (
              <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block border-b border-line py-3 text-base text-white">{n}</a></li>
            ))}
            <li className="pt-4"><a onClick={() => setOpen(false)} href="#contact" className="btn w-full bg-white text-black">Let&apos;s Talk →</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
