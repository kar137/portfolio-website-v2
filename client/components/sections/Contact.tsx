import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✨ Ping received! I’ll decode it and get back to you shortly. Thanks for connecting!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message");
      }
    } catch {
      setStatus("Failed to send message");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Send Me a Neural Ping</h2>
        </Reveal>
        <div ref={ref} className="relative mt-8 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="holo-card">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm text-muted-foreground">Your alias or real name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40"
                    placeholder="Your alias or real name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Message</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 w-full rounded-lg bg-transparent border border-neon-cyan/40 px-3 py-2 outline-none focus:ring-2 focus:ring-neon-cyan/40"
                    placeholder="Tell me about your project, idea, or let’s chat over coffee ☕"
                  />
                </div>
                <button className="neon-btn w-full" type="submit">
                  Beam It Up 🚀
                </button>
                {status && (
                  <div className="mt-4 text-center text-neon-cyan font-semibold">
                    {status}
                  </div>
                )}
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
                    className="neon-outline border-github flex items-center justify-center gap-2"
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-5 w-5" /> GitHub
                  </a>
                  <a
                    className="neon-outline border-linkedin flex items-center justify-center gap-2"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </a>
                  <a
                    className="neon-outline border-twitter flex items-center justify-center gap-2"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="h-5 w-5" /> Twitter
                  </a>
                  <a
                    className="neon-outline border-email flex items-center justify-center gap-2"
                    href="mailto:bistak297@gmail.com"
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
