import type { ProcessStep, TitledItem } from "@/types";

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Understand", description: "Understand the business problem and requirements." },
  { step: "02", title: "Architect", description: "Design the appropriate AI/ML architecture." },
  { step: "03", title: "Build", description: "Develop models, AI systems, APIs and integrations." },
  { step: "04", title: "Test", description: "Evaluate quality, reliability and edge cases." },
  { step: "05", title: "Deploy", description: "Deploy the solution and provide documentation." },
];

export const reasons: TitledItem[] = [
  { title: "Business-focused", description: "Solve the actual business problem instead of adding unnecessary complexity." },
  { title: "Production-minded", description: "Build systems that can move beyond a prototype." },
  { title: "Clear communication", description: "Keep clients informed throughout development." },
  { title: "Clean architecture", description: "Write maintainable and scalable code." },
  { title: "End-to-end capability", description: "Handle AI architecture, development, APIs and deployment." },
];
