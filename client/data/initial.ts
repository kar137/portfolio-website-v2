import { Project } from "@/components/sections/Projects";
import type { Certification } from "@/components/sections/Certifications";
import type { BlogPost } from "@/components/sections/Blog";

export const initialProjects: Project[] = [
  {
    id: "p1",
    title: "Resume Analyzer (FastAPI)",
    description: "Microservice built with FastAPI to analyze resumes.",
    image: "/placeholder.svg",
    technologies: ["Python", "FastAPI", "Machine Learning"],
    githubUrl: "https://github.com/kar137/Resume-Analyzer-FastAPI",
  },
  {
    id: "p2",
    title: "Machine Learning Portfolio",
    description: "Jupyter Notebook showcasing machine learning experiments and models.",
    image: "/placeholder.svg",
    technologies: ["Python", "Jupyter", "scikit-learn"],
    githubUrl: "https://github.com/kar137/Machine-Learning-Portfolio",
  },
  {
    id: "p3",
    title: "Chat Application (Django)",
    description: "Real-time chat application built using Django Channels and WebSockets.",
    image: "/placeholder.svg",
    technologies: ["Python", "Django", "WebSockets"],
    githubUrl: "https://github.com/kar137/chatapplication-django",
  },
  {
    id: "p4",
    title: "Stress Signals & Mental Health Risk Predictor",
    description: "Predicting mental health risk based on stress signals using ML models.",
    image: "/placeholder.svg",
    technologies: ["Python", "Jupyter", "Machine Learning"],
    githubUrl: "https://github.com/kar137/stress-signals-mental-health-risk-predictor",
  },
  {
    id: "p5",
    title: "Blango",
    description: "Web application project built for learning Django and web app development.",
    image: "/placeholder.svg",
    technologies: ["Python", "Django", "Web Development"],
    githubUrl: "https://github.com/kar137/blango",
  },
  {
    id: "p6",
    title: "QueryPilot – Smart Docs Assistant",
    description: "AI-powered assistant to query and analyze documents intelligently.",
    image: "/placeholder.svg",
    technologies: ["Python", "NLP", "Transformers", "LangChain"],
    githubUrl: "https://github.com/kar137/QueryPilot-SmartDocsAssistant",
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
