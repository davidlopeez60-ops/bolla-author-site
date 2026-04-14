import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/book", label: "The Book" },
  { to: "/faq", label: "FAQ" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold/20 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group">
          <span className="font-display text-2xl italic text-foreground tracking-wide">
            John Bolla
          </span>
          <span className="block h-px w-full bg-gold/60 transition-all group-hover:bg-gold" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-nav text-sm tracking-widest uppercase text-muted-foreground gold-glow-hover hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-gold/20">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-nav text-lg tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </header>
  );
}
