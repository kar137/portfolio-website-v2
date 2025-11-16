
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useContent } from "@/store/content";

export default function ProjectPage() {
  const { id } = useParams();
  const { projects } = useContent();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch (e) {}
  }, [id]);

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h2 className="section-title">Project Not Found</h2>
        <Link to="/" className="neon-outline mt-6 inline-block">Back to Home</Link>
      </div>
    );
  }

  return (
    <article className="container py-16 max-w-3xl">
      <header>
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-pink">
          {project.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-start items-center w-full h-64 mt-6 pl-4">
          <img
            src={project.image}
            alt="cover"
            className="max-h-full max-w-full object-contain rounded-xl"
          />
        </div>
      </header>
      <div className="prose prose-invert mt-8 max-w-none">
        {(() => {
          const lines = project.description.split(/\n+/);
          const elements = [];
          let inList = false;
          let listItems = [];
          lines.forEach((line, i) => {
            const trimmed = line.trim();
            // Headings and section titles
            if (trimmed.match(/^Key Features:|System Architecture:|Technical Highlights:|Impact:|Repository:|Tech Stack:/)) {
              if (inList && listItems.length) {
                elements.push(<ul key={`ul-${i}`}>{listItems}</ul>);
                inList = false;
                listItems = [];
              }
              // Style Tech Stack heading in blue
              if (trimmed.startsWith("Tech Stack:")) {
                elements.push(<h3 key={i} className="mt-8 mb-2 text-xl font-bold text-neon-cyan">{trimmed}</h3>);
              } else {
                elements.push(<h3 key={i} className="mt-8 mb-2 text-xl font-bold text-neon-cyan">{trimmed}</h3>);
              }
              return;
            }
            // Feature bullets and tech stack bullets
            if (trimmed.match(/^[-•🌐🤖⚡💬📊🛠️🔒🧩🔄🐳🔁]/)) {
              inList = true;
              // If previous heading was Tech Stack, style bullets in blue
              const prevLine = lines[i - 1]?.trim() || "";
              listItems.push(<li key={i} className="mb-2 text-base">{trimmed}</li>);
              return;
            }
            // Section breaks
            if (trimmed === "") {
              if (inList && listItems.length) {
                elements.push(<ul key={`ul-${i}`}>{listItems}</ul>);
                inList = false;
                listItems = [];
              }
              elements.push(<div key={i} className="my-4" />);
              return;
            }
            // Regular paragraphs
            if (inList && listItems.length) {
              elements.push(<ul key={`ul-${i}`}>{listItems}</ul>);
              inList = false;
              listItems = [];
            }
            elements.push(<p key={i} className="mb-4 text-base">{trimmed}</p>);
          });
          if (inList && listItems.length) {
            elements.push(<ul key={`ul-end`}>{listItems}</ul>);
          }
          return elements;
        })()}
      </div>
      {project.githubUrl && (
        <div className="mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="neon-outline inline-flex items-center gap-2 px-3 py-1 rounded border-2 border-neon-blue hover:bg-neon-blue/10 transition"
          >
            View on GitHub
          </a>
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
