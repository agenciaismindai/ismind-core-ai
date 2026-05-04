export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" aria-hidden />
      {/* Radial glow */}
      <div
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="animate-float-up inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-glow opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-glow" />
            </span>
            Inteligencia artificial para empresas en España
          </div>

          {/* Headline */}
          <h1
            className="animate-float-up font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-tighter mt-6 max-w-4xl text-gradient leading-[0.95] my-[0px] py-[8px]"
            style={{ animationDelay: "60ms" }}
          >
            Automatización con IA<br />para empresas en España.
          </h1>

          {/* Subheadline */}
          <p
            className="animate-float-up mt-7 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "120ms" }}
          >
            Soluciones de automatización con IA para empresas y pymes españolas.
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
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-all shadow-soft"
            >
              Contactar
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#concepto"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 backdrop-blur px-5 py-2.5 text-sm font-medium text-foreground hover:bg-surface transition-all"
            >
              <span className="font-mono text-glow text-xs">/</span> Ver cómo funciona
            </a>
          </div>

          {/* Stats / proof bar */}
          <div
            className="animate-float-up mt-20 grid grid-cols-3 gap-px bg-hairline rounded-2xl border border-hairline overflow-hidden max-w-3xl w-full"
            style={{ animationDelay: "240ms" }}
          >
            {[
              { v: "−74%", l: "tareas manuales" },
              { v: "24/7", l: "operación autónoma" },
              { v: "3×", l: "capacidad sin contratar" },
            ].map((s) => (
              <div key={s.l} className="bg-background/80 backdrop-blur px-6 py-5 text-left">
                <div className="font-display text-2xl font-semibold tracking-tight">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
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
      <div className="absolute -inset-px rounded-2xl bg-gradient-accent opacity-30 blur-xl" aria-hidden />
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
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs ${
                  idx === 1 ? "bg-accent text-foreground" : "text-muted-foreground"
                }`}
              >
                <div className="h-1 w-1 rounded-full bg-current opacity-60" />
                {i}
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="col-span-9 bg-surface-elevated p-5 space-y-3">
            {[
              { name: "Agente · Recepción de citas", status: "Activo", count: "142 hoy" },
              { name: "Workflow · Onboarding cliente", status: "Activo", count: "31 hoy" },
              { name: "Integración · CRM ↔ WhatsApp", status: "Sync", count: "1.2k msg" },
              { name: "Agente · Seguimiento post-visita", status: "Activo", count: "88 hoy" },
            ].map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between rounded-lg border border-hairline bg-background/60 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-md bg-gradient-accent opacity-80 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-background" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">{row.name}</div>
                    <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      {row.status.toLowerCase()} · {row.count}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-hairline px-2 py-0.5 text-[10px] text-glow">
                  <span className="h-1 w-1 rounded-full bg-glow animate-pulse-glow" />
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
