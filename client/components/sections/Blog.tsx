
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import React, { useRef, useState, useEffect } from "react";

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  content: string;
};

export default function Blog({ posts }: { posts: BlogPost[] }) {
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
    <section id="blog" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Blog</h2>
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
            className="flex gap-6 overflow-x-auto pb-2 scrollbar-none scroll-smooth"
          >
            {posts.map((b) => (
              <Reveal key={b.id}>
                <article className="glass rounded-xl overflow-hidden border-border min-w-[20rem] max-w-[22rem]">
                  <Link to={`/blog/${b.id}`}>
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-40 object-cover"
                    />
                  </Link>
                  <div className="p-5">
                    <span className="text-xs text-muted-foreground">
                      {b.date}
                    </span>
                    <h3 className="text-lg font-semibold mt-1">
                      <Link to={`/blog/${b.id}`}>{b.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {b.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {b.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link
                        to={`/blog/${b.id}`}
                        className="neon-outline inline-flex"
                      >
                        Read post
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          {showRight && (
            <button
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-xl neon-outline rounded-full p-2 shadow-lg hover:scale-105 transition"
              aria-label="Scroll right"
              onClick={scrollRight}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
