import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yashpal Singh — AI/ML Engineer | RAG & LLM Developer",
  description:
    "AI/ML Engineer building RAG systems, LLM applications, AI agents, machine learning and computer vision solutions.",
  openGraph: {
    title: "Yashpal Singh — AI/ML Engineer | RAG & LLM Developer",
    description:
      "AI/ML Engineer building RAG systems, LLM applications, AI agents, machine learning and computer vision solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
