import { Link } from "@tanstack/react-router";

const socialLinks = [
  { label: "Twitter/X", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Goodreads", href: "#" },
];

export function Footer() {
  return (
    <footer className="grain-overlay border-t border-gold/10" style={{ backgroundColor: "oklch(0.09 0.02 250)" }}>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span className="font-display text-xl italic text-foreground">John Bolla</span>
            <p className="text-muted-foreground text-sm mt-1">Published by Parker Publishers</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { to: "/faq", label: "FAQ" },
              { to: "/donate", label: "Donate" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-nav text-sm tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-muted-foreground hover:text-gold transition-colors text-sm font-nav tracking-wider"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="gold-divider mt-8 mb-4" />

        <p className="text-center text-muted-foreground text-xs tracking-wider">
          © 2026 John Bolla. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
