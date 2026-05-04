import { useParallax } from "@/hooks/use-parallax";

export function Concept() {
  const cardRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section id="concepto" className="relative py-40 overflow-hidden">
      {/* Fondo diferenciado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 50%, transparent 100%)",
        }}
        aria-hidden
      />
      {/* Blob decorativo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel index="01" label="Concepto" />

        <div className="mt-10 grid lg:grid-cols-12 gap-16 items-start">

          {/* Sticky text */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 self-start reveal">
            {/* Eyebrow */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{
                background: "rgba(124,58,237,0.12)",
                color: "#a78bfa",
              }}
            >
              Por qué ISMIND.AI
            </span>

            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.02]"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #93c5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              No es una agencia.<br />Es tu infraestructura<br />de IA.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Un sistema que ejecuta tareas, decide y escala — conectado a las
              herramientas que ya usas. Sin fricción, sin contratar.
            </p>

            {/* Mini stat */}
            <div className="mt-10 flex items-center gap-6">
              {[
                { v: "120+", l: "empresas activas" },
                { v: "30d", l: "implementación" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="font-display text-2xl font-black"
                    style={{ color: "#a78bfa" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card con parallax */}
          <div className="lg:col-span-6 lg:min-h-[60vh] flex items-start">
            <div
              ref={cardRef}
              className="parallax w-full reveal reveal-scale"
              style={{ padding: "1px", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(37,99,235,0.2))" }}
            >
              <div className="rounded-2xl bg-surface/80 backdrop-blur p-8 space-y-6">

                {/* Header del card */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-muted-foreground">sistema / capas</span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "#34d399" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    Operativo
                  </span>
                </div>

                {/* Capas */}
                {[
                  {
                    num: "01",
                    t: "Capa de IA",
                    s: "Agentes + automatizaciones",
                    color: "#a78bfa",
                    bg: "rgba(167,139,250,0.08)",
                  },
                  {
                    num: "02",
                    t: "Tu negocio",
                    s: "Personas, herramientas y datos",
                    color: "#60a5fa",
                    bg: "rgba(96,165,250,0.08)",
                  },
                  {
                    num: "03",
                    t: "Operación",
                    s: "Decisiones, ejecución, métricas",
                    color: "#34d399",
                    bg: "rgba(52,211,153,0.08)",
                  },
                ].map(({ num, t, s, color, bg }) => (
                  <div
                    key={t}
                    className="reveal flex items-start gap-4 rounded-xl p-4 transition-all"
                    style={{ background: bg }}
                  >
                    <div
                      className="font-mono text-xs font-bold pt-0.5 w-6 shrink-0"
                      style={{ color }}
                    >
                      {num}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold" style={{ color }}>
                        {t}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{s}</div>
                    </div>
                    <div
                      className="h-2 w-2 rounded-full mt-1.5 shrink-0 animate-pulse"
                      style={{ background: color }}
                    />
                  </div>
                ))}

                {/* Footer del card */}
                <div className="pt-2 border-t border-hairline flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Conectado a tus herramientas</span>
                  <div className="flex gap-1.5">
                    {["#a78bfa", "#60a5fa", "#34d399"].map((c) => (
                      <div key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-widest reveal">
      <span style={{ color: "#a78bfa" }}>{index}</span>
      <span className="h-px w-8 bg-hairline" />
      {label}
    </div>
  );
}
