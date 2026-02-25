const items = [
  {
    company: "Abundant",
    role: "Applied AI Engineer",
    period: "Feb 2026 — Present",
    location: "San Francisco Bay Area (Remote)",
    details: [
      "Partner with three leading AI research labs (NDA) to advance production-grade agent benchmarking; build evaluation and data-generation pipelines; and curate synthetic datasets.",
      "Ship Docker/Kubernetes containerized test environments for repeatable runs; analyze agent behavior and failure modes with Claude, OpenAI, Gemini, and baseline agents; and implement GitHub workflow checks, health monitoring, and data-integrity tests for reproducible large-scale experiments.",
    ],
  },
  {
    company: "Fusemachines",
    role: "Jr. AI/ML Engineer (AI Fellow → AI/ML Intern)",
    period: "Apr 2025 — Feb 2026",
    location: "Kathmandu, Nepal (Hybrid/Remote)",
    details: [
      "Built and production-hardened a global AI Fellowship chatbot using FastAPI, RAG, Qdrant, and Groq LLMs; implemented semantic in-memory caching (12k entries), dual-LLM failover, and resiliency controls to achieve ~800ms avg latency, <850ms P95, and 28–32% cache hit rate.",
      "Shipped end-to-end ML + LLM workflows (data prep → training → evaluation → API inference) with Python, scikit-learn, XGBoost, PyTorch, and LangChain; prototyped a MIR-based tutor agent and added production readiness features (rate limiting, circuit breakers, Prometheus, Kubernetes health probes) via a PR-driven MLOps workflow.",
    ],
  },
];

import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Experience</h2>
        </Reveal>
        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-neon-purple/40 to-neon-pink/40" />
          <div className="space-y-10">
            {items.map((item, i) => (
              <Reveal key={`${item.company}-${i}`}>
                <div className="relative pl-10 sm:pl-16">
                  <div className="absolute left-0 sm:left-2 top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-neon-cyan to-neon-pink shadow-neon" />
                  <div className="holo-card">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <p className="text-sm text-neon-cyan">{item.company}</p>
                        {item.location && (
                          <p className="text-xs text-muted-foreground mt-1">{item.location}</p>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    {Array.isArray(item.details) ? (
                      <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
                        {item.details.map((d, idx) => (
                          <li key={idx} className="mb-2">
                            {d}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm text-muted-foreground">{item.details}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
