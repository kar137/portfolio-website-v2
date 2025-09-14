import { Code2, Brain, Wrench, Cloud, ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = React.useState(false);
  const [showRight, setShowRight] = React.useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10);
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Skills</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            An interactive overview of my expertise across programming, AI/ML, frameworks, DevOps, and tools.
          </p>
        </Reveal>
        <div className="relative mt-8 group">
          {showLeft && (
            <button
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-xl neon-outline rounded-full p-2 shadow-lg hover:scale-105 transition"
              style={{ zIndex: 2 }}
              aria-label="Scroll left"
              onClick={scrollLeft}
            >
              <ArrowLeft className="h-6 w-6 text-neon-purple" />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-none"
            style={{ scrollBehavior: "smooth" }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Reveal key={cat.title}>
                  <div className="holo-card min-w-[19rem] max-w-[22rem] overflow-hidden relative hover:z-10">
                    <div
                      className={`absolute -inset-0.5 rounded-xl opacity-0 hover:opacity-100 transition pointer-events-none bg-gradient-to-r ${cat.color} blur-xl`}
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
                            <span className="hover:text-white transition">
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
          {showRight && (
            <button
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-xl neon-outline rounded-full p-2 shadow-lg hover:scale-105 transition"
              style={{ zIndex: 2 }}
              aria-label="Scroll right"
              onClick={scrollRight}
            >
              <ArrowRight className="h-6 w-6 text-neon-purple" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
