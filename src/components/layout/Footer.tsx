import { navigation } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">Yashpal Singh</p>
          <p className="text-sm">AI/ML Engineer</p>
          <p className="mt-1 font-mono text-xs text-zinc-500">RAG • LLM • AI Agents • Machine Learning • Computer Vision</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-5 text-sm">
            {navigation.map((n) => (
              <li key={n}><a href={`#${n.toLowerCase()}`} className="hover:text-white">{n}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
