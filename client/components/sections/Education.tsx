import Reveal from "@/components/Reveal";

const items = [
  {
    school: "Nepal Engineering College",
    degree: "B.E. in Computer Engineering",
    period: "2022 - 2026",
    description:
      "Focused on AI, ML, software engineering, embedded systems, and hardware design, with hands-on projects in machine learning, neural networks, microcontrollers, and data-driven applications.",
    logoUrl: ""
  },
  {
    school: "Prasadi Academy",
    degree: "High School (Science)",
    period: "2019 - 2021",
    description:
      "Completed Science stream, building a strong foundation in mathematics, physics, and computer science.",
    logoUrl: ""
  }
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
              <div className="holo-card flex flex-col gap-2">
                <div>
                  <p className="font-semibold text-lg">{e.degree}</p>
                  <p className="text-sm text-neon-cyan">{e.school}</p>
                  <p className="text-xs text-muted-foreground mb-2">{e.period}</p>
                  <p className="text-sm text-muted-foreground">{e.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
