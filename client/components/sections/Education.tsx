import Reveal from "@/components/Reveal";

type Edu = { school: string; degree: string; period: string; logoUrl: string };

const items: Edu[] = [
  {
    school: "Tech University",
    degree: "M.Sc. in Artificial Intelligence",
    period: "2017 — 2019",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
  },
  {
    school: "Science College",
    degree: "B.Sc. in Computer Science",
    period: "2013 — 2017",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Education</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((e) => (
            <Reveal key={e.school}>
              <div className="holo-card flex items-center gap-4">
                <img
                  src={e.logoUrl}
                  alt="logo"
                  className="h-10 w-10 object-contain bg-white rounded-md p-1"
                />
                <div>
                  <p className="font-semibold">{e.degree}</p>
                  <p className="text-sm text-neon-cyan">{e.school}</p>
                  <p className="text-xs text-muted-foreground">{e.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
