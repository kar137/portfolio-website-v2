type Item = { company: string; role: string; period: string; details: string };

const items: Item[] = [
  {
    company: "AI Labs",
    role: "Senior AI/ML Engineer",
    period: "2023 — Present",
    details:
      "Leading LLM-powered features, retrieval systems, and real-time analytics for enterprise products.",
  },
  {
    company: "DataCraft",
    role: "Machine Learning Engineer",
    period: "2021 — 2023",
    details:
      "Built end-to-end ML pipelines, model monitoring, and automated model retraining workflows.",
  },
  {
    company: "Visionary Tech",
    role: "Data Scientist",
    period: "2019 — 2021",
    details:
      "Developed predictive models and dashboards improving KPIs across product teams.",
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
              <Reveal key={item.company}>
                <div className="relative pl-10 sm:pl-16">
                  <div className="absolute left-0 sm:left-2 top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-neon-cyan to-neon-pink shadow-neon" />
                  <div className="holo-card">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <p className="text-sm text-neon-cyan">{item.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {item.details}
                    </p>
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
