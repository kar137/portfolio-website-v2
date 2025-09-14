import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useContent } from "@/store/content";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { posts } = useContent();
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    // Ensure we start at the top when navigating to a blog post
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (e) {
      // ignore in non-browser environments
    }
  }, [id]);

  if (!post) {
    return (
      <div className="container py-20">
        <p className="text-muted-foreground">Post not found.</p>
        <Link to="/" className="neon-outline mt-4 inline-flex">
          Back to Home
        </Link>
      </div>
    );
  }

  // Pagination logic: split content into ~1000 word pages
  const words = post.content.split(/\s+/);
  const PAGE_SIZE = 1000;
  const totalPages = Math.ceil(words.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  // Scroll to top when page changes
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (e) {}
  }, [page]);
  // Instead of joining with spaces, join with a special marker, then split by newlines for rendering
  const getPageContent = (p: number) => {
    // Get the slice of words for this page
    const pageWords = words.slice(p * PAGE_SIZE, (p + 1) * PAGE_SIZE);
    // Reconstruct the original content for this page
    // Find the start and end index in the original string
    let wordCount = 0, startIdx = 0, endIdx = 0;
    for (let i = 0; i < post.content.length; i++) {
      if (post.content[i].match(/\s/)) {
        wordCount++;
        if (wordCount === p * PAGE_SIZE) startIdx = i + 1;
        if (wordCount === (p + 1) * PAGE_SIZE) { endIdx = i; break; }
      }
    }
    if (endIdx === 0) endIdx = post.content.length;
    return post.content.slice(startIdx, endIdx);
  };

  return (
    <article className="container py-16 max-w-3xl">
      <header>
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-pink">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          {post.date || new Date().toLocaleString()}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30"
            >
              {t}
            </span>
          ))}
        </div>
        <img
          src={post.image}
          alt="cover"
          className="w-full h-64 object-cover rounded-xl mt-6"
        />
      </header>
      <div className="prose prose-invert mt-8 max-w-none">
        {getPageContent(page)
          .split(/\n/)
          .map((line, i) => (
            <p key={i} className="mb-4">{line.trim() || <>&nbsp;</>}</p>
          ))}
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            className={`neon-outline px-3 py-1 rounded-full transition-all ${page === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-neon-cyan/10"}`}
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            ← Prev
          </button>
          <span className="px-4 py-1 rounded bg-background/80 text-sm font-semibold border border-neon-cyan/30">
            Page {page + 1} of {totalPages}
          </span>
          <button
            className={`neon-outline px-3 py-1 rounded-full transition-all ${page === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-neon-cyan/10"}`}
            disabled={page === totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          >
            Next →
          </button>
        </div>
      )}
      <div className="mt-10">
        <Link to="/" className="neon-outline inline-flex">
          ← Back
        </Link>
      </div>
    </article>
  );
}
