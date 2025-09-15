import { Code2, Brain, Wrench, Cloud, ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaJava, FaReact, FaDocker, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFastapi, SiFlask, SiTailwindcss, SiPostgresql, SiMysql, SiSqlite, SiPytorch, SiTensorflow, SiHuggingface, SiLangchain, SiPostman, SiAnaconda } from "react-icons/si";
// Skill icon mapping
const skillIcons: Record<string, React.ReactNode> = {
  Python: <FaPython className="text-[#3776AB]" />,
  JavaScript: <FaJs className="text-[#F7DF1E]" />,
  HTML5: <FaHtml5 className="text-[#E34F26]" />,
  CSS3: <FaCss3Alt className="text-[#1572B6]" />,
  Java: <FaJava className="text-[#007396]" />,
  Django: <SiDjango className="text-[#092E20]" />,
  "Django REST Framework": <SiDjango className="text-[#092E20]" />,
  FastAPI: <SiFastapi className="text-[#009688]" />,
  Flask: <SiFlask className="text-[#000000]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8]" />,
  PostgreSQL: <SiPostgresql className="text-[#336791]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  SQLite: <SiSqlite className="text-[#003B57]" />,
  PyTorch: <SiPytorch className="text-[#EE4C2C]" />,
  TensorFlow: <SiTensorflow className="text-[#FF6F00]" />,
  Transformers: <SiHuggingface className="text-[#FFD21A]" />,
  "Hugging Face": <SiHuggingface className="text-[#FFD21A]" />,
  "LangChain / NLP": <SiLangchain className="text-[#00B4B3]" />,
  Docker: <FaDocker className="text-[#2496ED]" />,
  Git: <FaGitAlt className="text-[#F05032]" />,
  GitHub: <FaGithub className="text-[#181717]" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
  Anaconda: <SiAnaconda className="text-[#44A833]" />,
};
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
  const [showSwipeRight, setShowSwipeRight] = React.useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  React.useEffect(() => {
    if (!isMobile) return;
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      setShowSwipeRight(true);
      clearTimeout((handleScroll as any).timer);
      (handleScroll as any).timer = setTimeout(() => setShowSwipeRight(false), 1200);
    };
    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout((handleScroll as any).timer);
    };
  }, [isMobile]);
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
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-xl neon-outline rounded-full p-2 shadow-lg hover:scale-105 transition z-20"
              aria-label="Scroll left"
              onClick={scrollLeft}
            >
              <ArrowLeft className="h-6 w-6 text-neon-purple" />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-none scroll-smooth"
            style={{ position: 'relative' }}
          >
            {showSwipeRight && (
              <div
                className="absolute right-0 top-1/3 -translate-y-1/2 z-30 animate-bounce pointer-events-none"
              >
                <span className="bg-gradient-to-br from-indigo-400 via-blue-300 to-white rounded-full p-1 shadow border border-indigo-300 flex items-center justify-center swipe-indicator">
                  <svg width="19" height="19" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4l6 5-6 5" />
                  </svg>
                </span>
              </div>
            )}
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
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded bg-gradient-to-br from-blue-100 via-blue-50 to-white border border-blue-200 shadow-lg mr-1 transition-transform hover:scale-110 hover:border-blue-400 hover:shadow-xl">
                              {skillIcons[s] || <FaDatabase className="h-7 w-7 text-neon-cyan" />}
                            </span>
                            <span className="hover:text-white transition font-medium">
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
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-xl neon-outline rounded-full p-2 shadow-lg hover:scale-105 transition z-20"
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
