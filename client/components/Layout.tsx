import { Link, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-grid-fade">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/#home", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/#skills", label: "Skills" },
    { to: "/#experience", label: "Experience" },
    { to: "/#education", label: "Education" },
    { to: "/#projects", label: "Projects" },
    { to: "/#certifications", label: "Certifications" },
    { to: "/#blog", label: "Blog" },
    { to: "/#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl border-b border-glass-border/60 glass">
        <div className="container flex items-center justify-between py-3">
          <Link
            to="/"
            className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink"
          >
            Karan Bista
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                className="text-sm text-muted-foreground hover:text-white transition"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden neon-outline"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass border-b border-glass-border">
          <div className="container py-3 grid gap-2">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                className="text-sm text-muted-foreground hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-glass-border/60">
      <div className="container py-10 text-sm text-muted-foreground flex items-center justify-between flex-wrap gap-3">
        <p>© {new Date().getFullYear()} Karan Bista. All rights reserved.</p>
        <p>Built with modern web + AI/ML aesthetics.</p>
      </div>
    </footer>
  );
}
