import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import { useContent } from "@/store/content";

export default function Index() {
  const { projects, certs, posts } = useContent();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
  <Projects projects={projects} />
  <Certifications />
      <Blog posts={posts} />
      <Contact />
    </main>
  );
}
