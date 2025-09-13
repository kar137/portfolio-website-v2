import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

import Reveal from "@/components/Reveal";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Contact</h2>
        </Reveal>
        <div ref={ref} className="relative mt-8 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="holo-card">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks, I'll be in touch!");
                }}
                className="space-y-5"
              >
                <div>
                  <label className="text-sm text-muted-foreground">Name</label>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40"
                    placeholder="Tell me about your project"
                  />
                </div>
                <button className="neon-btn w-full" type="submit">
                  Send
                </button>
              </form>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative holo-card overflow-hidden">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(120px 120px at var(--mx,50%) var(--my,50%), hsla(var(--neon-pink),0.25), transparent 60%)",
                }}
              />
              <h3 className="text-xl font-semibold">
                Let's build something intelligent
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Open to collaborations, freelance projects, and full-time roles.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  className="neon-outline flex items-center justify-center gap-2"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a
                  className="neon-outline flex items-center justify-center gap-2"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
                <a
                  className="neon-outline flex items-center justify-center gap-2"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="h-5 w-5" /> Twitter
                </a>
                <a
                  className="neon-outline flex items-center justify-center gap-2"
                  href="mailto:karan@example.com"
                >
                  <Mail className="h-5 w-5" /> Email
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
