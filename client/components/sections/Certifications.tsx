export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  logoUrl?: string;
  link?: string;
  logoColor?: string;
};

import Reveal from "@/components/Reveal";

export default function Certifications({ items }: { items: Certification[] }) {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Certifications</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => {
            const Card = (
              <div className="holo-card flex items-center gap-4">
                {c.logoUrl ? (
                  <img
                    src={c.logoUrl}
                    alt={`${c.issuer} logo`}
                    className="h-12 w-12 object-contain bg-white rounded-lg p-1"
                  />
                ) : (
                  <div
                    className="h-12 w-12 rounded-lg holo-ring"
                    style={{
                      background: `conic-gradient(from_0deg, ${c.logoColor ?? "hsl(200,100%,60%)"}, #ffffff10)`,
                    }}
                  />
                )}
                <div className="flex-1">
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-sm text-neon-cyan">{c.issuer}</p>
                  <p className="text-xs text-muted-foreground">{c.date}</p>
                </div>
              </div>
            );
            const wrapped = c.link ? (
              <a
                key={c.id}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {Card}
              </a>
            ) : (
              <div key={c.id}>{Card}</div>
            );
            return <Reveal key={c.id}>{wrapped}</Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
