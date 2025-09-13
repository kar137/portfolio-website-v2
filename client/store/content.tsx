import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Project } from "@/components/sections/Projects";
import type { Certification } from "@/components/sections/Certifications";
import type { BlogPost } from "@/components/sections/Blog";
import { initialProjects, initialCerts, initialPosts } from "@/data/initial";

export type ContentState = {
  projects: Project[];
  certs: Certification[];
  posts: BlogPost[];
  addProject: (p: Project) => void;
  addCert: (c: Certification) => void;
  addPost: (p: BlogPost) => void;
};

const Ctx = createContext<ContentState | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(() => {
    const v = localStorage.getItem("content.projects");
    return v ? JSON.parse(v) : initialProjects;
  });
  const [certs, setCerts] = useState<Certification[]>(() => {
    const v = localStorage.getItem("content.certs");
    return v ? JSON.parse(v) : initialCerts;
  });
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const v = localStorage.getItem("content.posts");
    return v ? JSON.parse(v) : initialPosts;
  });

  useEffect(() => {
    localStorage.setItem("content.projects", JSON.stringify(projects));
  }, [projects]);
  useEffect(() => {
    localStorage.setItem("content.certs", JSON.stringify(certs));
  }, [certs]);
  useEffect(() => {
    localStorage.setItem("content.posts", JSON.stringify(posts));
  }, [posts]);

  const value = useMemo<ContentState>(
    () => ({
      projects,
      certs,
      posts,
      addProject: (p) => setProjects((prev) => [p, ...prev]),
      addCert: (c) => setCerts((prev) => [c, ...prev]),
      addPost: (p) => setPosts((prev) => [p, ...prev]),
    }),
    [projects, certs, posts],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useContent() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}
