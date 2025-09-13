import type { Project } from "@/components/sections/Projects";
import type { Certification } from "@/components/sections/Certifications";
import type { BlogPost } from "@/components/sections/Blog";

export const initialProjects: Project[] = [
  {
    id: "p1",
    title: "Neural Style Transfer Studio",
    description:
      "Interactive studio for real-time style transfer using optimized CNNs and WebGPU previews.",
    image: "/placeholder.svg",
    technologies: ["PyTorch", "WebGPU", "FastAPI"],
  },
  {
    id: "p2",
    title: "LLM-Powered Document Q&A",
    description:
      "Retrieval augmented generation with vector search, streaming responses, and guardrails.",
    image: "/placeholder.svg",
    technologies: ["LangChain", "OpenAI", "Pinecone"],
  },
  {
    id: "p3",
    title: "MLOps Pipeline",
    description:
      "Automated model training, evaluation, and deployment with monitoring and CI/CD.",
    image: "/placeholder.svg",
    technologies: ["Weights & Biases", "Docker", "GCP"],
  },
];

export const initialCerts: Certification[] = [
  {
    id: "c1",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021-06-01",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://www.tensorflow.org/certificate",
  },
  {
    id: "c2",
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2022-04-15",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
  },
];

export const initialPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Building Reliable RAG Systems",
    description:
      "Design patterns, evaluation strategies, and latency tips for production RAG.",
    date: "2024-08-10",
    tags: ["RAG", "LLMs", "Vector DB"],
    image: "/placeholder.svg",
    content: `Retrieval-Augmented Generation (RAG) pairs a parametric model with a non-parametric datastore.\n\nKey patterns: \n- Chunking with semantic overlap \n- Query rewriting and expansion \n- Hybrid search (sparse + dense) \n- Reranking for precision \n\nMeasure with task-specific evals (exact match, semantic similarity, factuality). Invest in observability (latency, hit-rate, hallucinations) and add guardrails to constrain prompts and outputs.`,
  },
  {
    id: "b2",
    title: "From Prototypes to MLOps",
    description:
      "A roadmap for turning notebooks into maintainable production systems.",
    date: "2024-05-02",
    tags: ["MLOps", "CI/CD", "Monitoring"],
    image: "/placeholder.svg",
    content: `Productionizing ML requires reproducibility, automation, and monitoring.\n\nSteps: \n1) Package training code, pin deps, capture configs. \n2) Automate pipelines (data -> train -> eval -> deploy). \n3) Track datasets, models, metrics, and lineage. \n4) Ship with rollbacks and canaries. \n5) Monitor drift, performance, and cost; schedule retrains.`,
  },
];
