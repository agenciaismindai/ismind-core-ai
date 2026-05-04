import { useEffect, useState } from "react";

const links = [
  { href: "#concepto", label: "Concepto" },
  { href: "#solucion", label: "Sistema" },
  { href: "#servicios", label: "Producto" },
  { href: "#casos", label: "Casos" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative h-6 w-6">
            <div className="absolute inset-0 rounded-md bg-gradient-accent opacity-90" />
            <div className="absolute inset-[3px] rounded-[5px] bg-background flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-glow animate-pulse-glow" />
            </div>
          </div>
          <span className="font-display font-semibold tracking-tight text-[15px]">
            ISMIND<span className="text-glow">.AI</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Iniciar
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:bg-foreground/90 transition-all shadow-soft"
          >
            Contactar
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
