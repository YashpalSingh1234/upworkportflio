import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { socialLinks } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
      <Reveal className="card p-8 text-center sm:p-14">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Have an AI idea? Let&apos;s build it.</h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">Tell me what you&apos;re trying to build and let&apos;s turn the idea into a practical AI solution.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={socialLinks.email} className="btn bg-white text-black">Start a Project →</a>
          <a href="#work" className="btn border border-line text-white">View My Work</a>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-zinc-400">
          <a href={socialLinks.githubProfileUrl} aria-label="GitHub" className="hover:text-white"><Github /></a>
          <a href={socialLinks.linkedin} aria-label="LinkedIn" className="hover:text-white"><Linkedin /></a>
          <a href={socialLinks.email} aria-label="Email" className="hover:text-white"><Mail /></a>
        </div>
      </Reveal>
    </section>
  );
}
