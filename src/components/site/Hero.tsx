import { useParallax } from "@/hooks/use-parallax";
import { Hero3DBackground, Hero3DCore } from "./HeroScene3D";

export function Hero() {
  const gridRef = useParallax<HTMLDivElement>(0.4);
  const glowRef = useParallax<HTMLDivElement>(0.25);

  return (
    <section id="top" className="relative pt-40 pb-40 overflow-hidden">
      {/* Background grid — parallax */}
      <div
        ref={gridRef}
        className="parallax absolute inset-0 bg-dot mask-fade-b opacity-40"
        aria-hidden
      />
      {/* 3D particle network behind everything */}
      <Hero3DBackground />
      {/* Radial glow — slower parallax */}
      <div
        ref={glowRef}
        className="parallax absolute inset-x-0 top-0 h-[700px] pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden
      />
      {/* Extra color blobs for vibrancy */}
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -top-20 -right-32 h-[400px] w-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow badge */}
          <div className="animate-float-up inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-glow opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-glow" />
            </span>
            Inteligencia artificial para empresas en España
          </div>

          {/* Headline */}
          <h1
            className="animate-float-up font-display text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-black tracking-tighter max-w-5xl leading-[0.92] py-[10px]"
            style={{
              animationDelay: "60ms",
              background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 40%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Automatización con IA<br />para empresas<br />en España.
          </h1>

          {/* Subheadline */}
          <p
            className="animate-float-up mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "120ms" }}
          >
            Reduce tareas manuales, ahorra costes y escala tu operación sin
            contratar. Diagnóstico gratuito en menos de 24h.
          </p>

          {/* CTAs */}
          <div
            className="animate-float-up mt-10 flex flex-col sm:flex-row items-center gap-3"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all shadow-lg hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
            >
              Contactar gratis
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#concepto"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-all"
            >
              <span className="font-mono text-glow text-xs">/</span> Ver cómo funciona
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="animate-float-up mt-20 grid grid-cols-3 gap-px rounded-2xl overflow-hidden max-w-3xl w-full"
            style={{
              animationDelay: "240ms",
              background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(37,99,235,0.3))",
              padding: "1px",
            }}
          >
            <div className="col-span-3 grid grid-cols-3 gap-px bg-hairline rounded-2xl overflow-hidden">
              {[
                { v: "−74%", l: "tareas manuales", color: "#a78bfa" },
                { v: "24/7", l: "operación autónoma", color: "#60a5fa" },
                { v: "3×", l: "capacidad sin contratar", color: "#34d399" },
              ].map((s) => (
                <div key={s.l} className="bg-background/90 backdrop-blur px-6 py-6 text-left">
                  <div
                    className="font-display text-3xl font-black tracking-tight"
                    style={{ color: s.color }}
                  >
                    {s.v}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System mockup */}
        <SystemPreview />
      </div>
    </section>
  );
}

function SystemPreview() {
  return (
    <div
      className="animate-float-up relative mt-24 mx-auto max-w-5xl"
      style={{ animationDelay: "320ms" }}
    >
      {/* Glow behind mockup */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
        aria-hidden
      />
      <div className="relative rounded-2xl border border-hairline bg-surface/80 backdrop-blur overflow-hidden shadow-soft">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-hairline">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="ml-3 font-mono text-xs text-muted-foreground">ismind.ai / control</div>
          <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-glow animate-pulse-glow" />
            Live
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 gap-px bg-hairline">
          {/* Sidebar */}
          <div className="col-span-3 bg-surface p-4 space-y-1">
            {["Agentes", "Workflows", "Integraciones", "Logs", "Métricas"].map((i, idx) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                  idx === 1
                    ? "text-white font-medium"
                    : "text-muted-foreground"
                }`}
                style={
                  idx === 1
                    ? { background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(37,99,235,0.4))" }
                    : {}
                }
              >
                <div className="h-1 w-1 rounded-full bg-current opacity-60" />
                {i}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="col-span-9 bg-surface-elevated p-5 space-y-3">
            {[
              { name: "Agente · Recepción de citas", status: "Activo", count: "142 hoy", color: "#a78bfa" },
              { name: "Workflow · Onboarding cliente", status: "Activo", count: "31 hoy", color: "#60a5fa" },
              { name: "Integración · CRM ↔ WhatsApp", status: "Sync", count: "1.2k msg", color: "#34d399" },
              { name: "Agente · Seguimiento post-visita", status: "Activo", count: "88 hoy", color: "#f472b6" },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between rounded-lg border border-hairline bg-background/60 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-7 w-7 rounded-md flex items-center justify-center"
                    style={{ background: `${row.color}22` }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full" style={{ background: row.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-medium">{row.name}</div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      {row.status.toLowerCase()} · {row.count}
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium"
                  style={{ background: `${row.color}18`, color: row.color }}
                >
                  <span className="h-1 w-1 rounded-full animate-pulse-glow" style={{ background: row.color }} />
                  {row.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
