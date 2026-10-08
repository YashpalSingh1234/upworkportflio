import type { Project } from "@/types";

/**
 * Link fields:
 * - liveUrl:   live demo URL. The Live Demo button renders only when set.
 * - githubUrl: the project's own repository URL. The GitHub button renders only when set.
 *              Leave "" until the exact repository URL is known. CVKing is private: keep it "".
 */
export const projects: Project[] = [
  {
    id: "01",
    category: "Generative AI / Retrieval-Augmented Generation",
    title: "RAG AI Assistant",
    problem: "Teams can't quickly find reliable answers inside large document collections.",
    solution: "A document-based assistant that answers questions over a knowledge base with context-aware, grounded responses.",
    flow: ["Documents", "Chunking", "Embeddings", "Vector DB", "Semantic Retrieval", "Context", "LLM", "Answer"],
    stack: ["Python", "LangChain", "Chroma", "Sentence Transformers", "LLM", "RAG"],
    features: ["Document ingestion", "Chunking", "Embeddings", "Semantic search", "Top-K retrieval", "Context-aware generation", "Grounded responses", "Hallucination reduction"],
    liveUrl: "", // TODO: add live demo URL if one exists
    githubUrl: "", // TODO: add the RAG AI Assistant repository URL
  },
  {
    id: "02",
    category: "AI Career Platform",
    title: "CVKing AI",
    problem: "Job seekers lack clear, actionable feedback on their resumes and career direction.",
    solution: "An AI-powered product that analyzes resumes, builds them, and guides career decisions.",
    flow: ["Resume Upload", "LLM Analysis", "ATS Score", "Suggestions", "Roadmap & Job Matching"],
    stack: ["Next.js", "PostgreSQL", "Prisma", "AI APIs", "LLMs", "Tailwind CSS"],
    features: ["AI Resume Analysis", "ATS Score", "AI Resume Suggestions", "AI Resume Builder", "AI Career Roadmap", "AI Job Matching"],
    liveUrl: "https://cvking.in",
    hasArchitecture: true,
    githubUrl: "", // private project: intentionally no repository link
  },
  {
    id: "03",
    category: "Computer Vision",
    title: "Computer Vision / YOLO",
    problem: "Manual visual inspection is slow and inconsistent.",
    solution: "A fine-tuned YOLO object detection pipeline trained on a custom 36-class dataset.",
    flow: ["Dataset", "Training", "Fine-Tuning", "Evaluation", "Inference"],
    stack: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    features: ["Custom dataset", "Object detection", "Fine-tuning", "Computer vision pipeline", "Real-time prediction"],
    liveUrl: "", // TODO: add live demo URL if one exists
    githubUrl: "", // TODO: add the YOLO project repository URL
  },
  {
    id: "04",
    category: "Machine Learning / MLOps",
    title: "End-to-End Machine Learning",
    problem: "Models stall in notebooks and never reach users.",
    solution: "The complete ML lifecycle, from model development to a served API and deployment.",
    flow: ["Data", "Preprocessing", "Training", "Evaluation", "FastAPI", "Deployment"],
    stack: ["Python", "Scikit-learn", "FastAPI", "Docker"],
    features: ["Data preprocessing", "Model training", "Evaluation", "REST API", "Deployment"],
    liveUrl: "", // TODO: add live demo URL if one exists
    githubUrl: "", // TODO: add the End-to-End ML repository URL
  },
];
