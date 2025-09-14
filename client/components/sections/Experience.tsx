
const items = [
  {
    company: "Fusemachines",
    role: "AI Fellow",
    period: "April 2025 — Present",
    details:
      "Worked on cutting-edge AI/ML projects including LLM-powered applications, NLP pipelines, and AI-driven analytics, contributing to research, prototyping, and deployment of intelligent systems."
  }
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
