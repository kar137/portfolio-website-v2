export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  tags?: string[];
  githubUrl?: string;
};

import Reveal from "@/components/Reveal";
import { Github, Eye } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Projects({ projects }: { projects: Project[] }) {
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
  const scrollRef = React.useRef<HTMLDivElement>(null);
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
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Projects</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Selected projects featuring AI, ML, web apps, and intelligent assistants.
          </p>
        </Reveal>
        <div className="relative mt-8 group">
          {showLeft && (
            <button
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-xl neon-outline rounded-full p-2 shadow-lg hover:scale-105 transition"
              aria-label="Scroll left"
              onClick={scrollLeft}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-none scroll-smooth relative"
          >
            {isMobile && (
              <div
                className="absolute right-0 top-1/3 -translate-y-1/2 z-30 animate-bounce pointer-events-none"
              >
                <span className="bg-gradient-to-br from-indigo-400 via-blue-300 to-white rounded-full p-1 shadow border border-indigo-300 flex items-center justify-center swipe-indicator">
                  <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4l6 5-6 5" />
                  </svg>
                </span>
              </div>
            )}
            {projects.map((p) => (
              <Reveal key={p.id}>
                <Link to={`/project/${p.id}`} style={{ textDecoration: "none" }}>
                  <article className="holo-card min-w-[19rem] max-w-[22rem] overflow-hidden relative hover:z-10 cursor-pointer">
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
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link
                          to={`/project/${p.id}`}
                          className="neon-outline inline-flex items-center gap-2 px-3 py-1 rounded border-2 border-neon-blue hover:bg-neon-blue/10 transition"
                        >
                          <span className="flex items-center justify-center h-7 w-7 rounded-full border-2 border-neon-blue bg-background shadow-md hover:scale-105 transition">
                            <Eye className="h-5 w-5 text-neon-blue" />
                          </span>
                          <span className="font-semibold text-neon-blue text-sm">View Project</span>
                        </Link>
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="neon-outline inline-flex items-center gap-2 px-3 py-1 rounded border-2 border-neon-blue hover:bg-neon-blue/10 transition"
                          >
                            <span className="flex items-center justify-center h-7 w-7 rounded-full border-2 border-neon-blue bg-background shadow-md hover:scale-105 transition">
                              <Github className="h-5 w-5 text-neon-blue" />
                            </span>
                            <span className="font-semibold text-neon-blue text-sm">GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-radial-neon"
                    />
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
          {showRight && (
            <button
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-xl neon-outline rounded-full p-2 shadow-lg hover:scale-105 transition"
              aria-label="Scroll right"
              onClick={scrollRight}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
