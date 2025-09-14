import { Link } from "react-router-dom";

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  content: string;
};

import Reveal from "@/components/Reveal";

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Blog</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((b) => (
            <Reveal key={b.id}>
              <article className="glass rounded-xl overflow-hidden border-border">
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
      </div>
    </section>
  );
}
