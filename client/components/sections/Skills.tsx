import { Code2, Brain, Wrench, Cloud } from "lucide-react";
import Reveal from "@/components/Reveal";

const categories: {
  title: string;
  icon: any;
  color: string;
  skills: string[];
}[] = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-neon-blue to-neon-purple",
    skills: ["Python", "JavaScript", "HTML5", "CSS3", "Java"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Brain,
    color: "from-neon-purple to-neon-pink",
    skills: ["Django", "Django REST Framework", "FastAPI", "Flask", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Cloud,
    color: "from-neon-cyan to-neon-blue",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "AI / ML & Data Science",
    icon: Brain,
    color: "from-neon-pink to-neon-cyan",
    skills: ["PyTorch", "TensorFlow", "Transformers", "Hugging Face", "LangChain / NLP"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "from-neon-blue to-neon-purple",
    skills: ["Docker", "Git", "GitHub", "Postman", "Anaconda"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Skills</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            An interactive overview of my expertise across programming, AI/ML, frameworks, DevOps, and tools.
          </p>
        </Reveal>
  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title}>
                <div className="holo-card group overflow-hidden relative">
                  <div
                    className={`absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r ${cat.color} blur-xl`}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${cat.color} text-slate-900 font-bold`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold">{cat.title}</h3>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {cat.skills.map((s) => (
                        <li
                          key={s}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan inline-block" />
                          <span className="group-hover:text-white transition">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
