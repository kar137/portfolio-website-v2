export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  tags?: string[];
};

import Reveal from "@/components/Reveal";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Projects</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Selected AI/ML projects featuring generative models, MLOps, and
            production-ready deployments.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Reveal key={p.id}>
              <article className="relative overflow-hidden rounded-xl glass border-border shadow-card group">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      "radial-gradient(40%_40%_at_60%_0%, hsla(var(--neon-pink),0.22), transparent 60%)",
                  }}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
