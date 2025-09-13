import { useParams, Link } from "react-router-dom";
import { useContent } from "@/store/content";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { posts } = useContent();
  const post = posts.find((p) => p.id === id);

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

  return (
    <article className="container py-16 max-w-3xl">
      <header>
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-pink">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
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
        {post.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="mt-10">
        <Link to="/" className="neon-outline inline-flex">
          ← Back
        </Link>
      </div>
    </article>
  );
}
