import { SectionLabel } from "./Concept";

export function Solution() {
  return (
    <section id="solucion" className="relative py-32 border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 bg-dot mask-radial opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel index="03" label="Solución" />

        <div className="mt-8 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
            Un sistema que <span className="text-glow">opera por ti.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            ISMIND.AI funciona como infraestructura: agentes inteligentes,
            workflows y conexiones que ejecutan tu operación de forma continua.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-4">
          {[
            {
              t: "Sistema de automatización",
              d: "Workflows que reemplazan procesos manuales completos, end-to-end.",
              icon: "M3 12h4l2-7 4 14 2-7h4",
            },
            {
              t: "Infraestructura de IA",
              d: "Agentes que entienden, deciden y ejecutan dentro de tus herramientas.",
              icon: "M12 3a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a4 4 0 0 0 8 0v-1a4 4 0 0 0 0-8V7a4 4 0 0 0-4-4Z",
            },
            {
              t: "Motor de eficiencia",
              d: "Métricas en tiempo real. Optimización continua. Operación sin fricción.",
              icon: "M3 3v18h18M7 14l3-3 4 4 5-7",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="group relative rounded-2xl border border-hairline bg-surface/60 p-6 hover:bg-surface transition-all"
            >
              <div className="h-10 w-10 rounded-lg border border-hairline bg-background flex items-center justify-center text-glow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d={c.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-glow transition-colors">
                <span>activo</span>
                <span className="h-1 w-1 rounded-full bg-glow animate-pulse-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
