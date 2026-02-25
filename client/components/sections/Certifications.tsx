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
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Certifications() {
  const [showSwipeRight, setShowSwipeRight] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
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
  const certs = [
    {
      id: "fuse-microdegree-ai-2025",
      title: "Microdegree™ in Artificial Intelligence",
      issuer: "Fusemachines",
      date: "Dec 2025",
      logoUrl: "/fusemachines.png",
      link: "https://drive.google.com/file/d/1gzp2VDUmEUfdsUnBVl04N8zcHniRRDNM/view",
    },
    {
      id: "aws-cte",
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2026",
      logoUrl: "/aws.png",
      link: "https://www.coursera.org/account/accomplishments/verify/W18HHEGPMTRO",
    },
    {
      id: "4",
      title: "100 Days of Code: Complete Python Pro Bootcamp",
      issuer: "Udemy",
      date: "May 2025",
      logoUrl: "/udemy-logo.png",
      link: "https://www.udemy.com/certificate/UC-e74a34e9-b961-4ebf-bf0f-c3823465fe6e",
    },
    {
      id: "1",
      title: "AI Fundamentals",
      issuer: "DataCamp",
      date: "Jul 2025",
      logoUrl: "/datacamp-logo.png",
      link: "https://www.datacamp.com/skill-verification/AIF0021547927731",
    },
    {
      id: "2",
      title: "Data Science Foundations – Level 1",
      issuer: "IBM",
      date: "Jul 2025",
      logoUrl: "/ibm-logo.png",
      link: "https://www.credly.com/badges/851717e9-efdb-4144-8e43-c5d694388e51/linked_in_profile",
    },
    {
      id: "3",
      title: "IBM Machine Learning Specialist – Associate",
      issuer: "IBM",
      date: "Jul 2025",
      logoUrl: "/ibm-logo.png",
      link: "https://www.credly.com/badges/851717e9-efdb-4144-8e43-c5d694388e51/linked_in_profile",
    },
    {
      id: "5",
      title: "nec Ingenium CodeSprint Hackathon – Winner",
      issuer: "Nepal Engineering College",
      date: "Jul 2025",
      logoUrl: "/nec-logo.png",
      link: "https://www.nec.edu.np/codesprint2025",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
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
    <section id="certifications" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Certifications</h2>
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
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-none"
            style={{ scrollBehavior: "smooth" }}
          >
            {certs.map((c) => {
              const Card = (
                <div className="holo-card flex flex-col sm:flex-row items-start sm:items-center gap-4 min-w-[19rem] max-w-[22rem]">
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
                        background: `conic-gradient(from_0deg, hsl(200,100%,60%), #ffffff10)`,
                      }}
                    />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm text-neon-cyan">{c.issuer}</p>
                    <p className="text-xs text-muted-foreground">{c.date}</p>
                    {c.credentialId && (
                      <p className="text-xs text-muted-foreground">Credential ID {c.credentialId}</p>
                    )}
                    {c.link && (
                      <div className="mt-3">
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noreferrer"
                          className="neon-outline inline-flex items-center gap-2 text-sm py-1 px-3 rounded"
                        >
                          Show credential
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );

              return (
                <Reveal key={c.id}>
                  <div>{Card}</div>
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
