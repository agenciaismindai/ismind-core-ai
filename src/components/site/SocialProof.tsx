import { SectionLabel } from "./Concept";

const guarantees = [
  {
    icon: "⚡",
    title: "Primeros resultados en 7 días",
    desc: "El primer automatismo en producción antes de que acabe la primera semana. Sin esperas de meses.",
    color: "#a78bfa",
  },
  {
    icon: "📊",
    title: "ROI medible desde el mes 2",
    desc: "Definimos KPIs contigo antes de empezar. Si no los alcanzamos, iteramos sin coste adicional.",
    color: "#60a5fa",
  },
  {
    icon: "🔒",
    title: "Sin permanencia",
    desc: "Sin contratos de 12 meses. Trabajamos por resultados y nos quedamos porque funciona, no por contrato.",
    color: "#34d399",
  },
  {
    icon: "🛠️",
    title: "Soporte incluido siempre",
    desc: "Monitorización continua, ajustes y mejoras evolutivas incluidas. El sistema nunca se queda estancado.",
    color: "#f472b6",
  },
];

const stack = [
  "OpenAI", "Anthropic", "n8n", "Make", "HubSpot",
  "WhatsApp API", "Zapier", "Supabase", "Notion", "Google Workspace",
];

const stats = [
  { v: "−74%", l: "tareas manuales (media sector)" },
  { v: "2–6 sem", l: "implementación completa" },
  { v: "24/7", l: "ejecución autónoma" },
  { v: "mes 2", l: "ROI positivo típico" },
];

export function SocialProof() {
  return (
    <section className="relative py-32 border-t border-hairline">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="08" label="Garantías" />

        <div className="mt-6 max-w-3xl reveal">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.02]">
            Compromisos claros,{" "}
            <span className="text-glow">resultados medibles.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Somos una agencia nueva y lo sabemos. Por eso no prometemos lo que
            no podemos demostrar — prometemos lo que podemos garantizar.
          </p>
        </div>

        {/* Stats row */}
        <div
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-2xl border border-hairline overflow-hidden"
          data-stagger="80"
        >
          {stats.map((m) => (
            <div
              key={m.l}
              className="reveal bg-background px-6 py-7 transition-colors hover:bg-surface/60"
            >
              <div className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-glow">
                {m.v}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2">
                {m.l}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-5" data-stagger="100">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="reveal group relative rounded-2xl border border-hairline bg-surface/40 p-7 backdrop-blur-sm transition-all duration-500 hover:bg-surface/70 hover:border-glow/30 hover:-translate-y-1"
            >
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-xl mb-5"
                style={{ background: `${g.color}18` }}
              >
                {g.icon}
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight" style={{ color: g.color }}>
                {g.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack strip */}
        <div className="mt-20">
          <div className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground/70 font-mono">
            Tecnologías con las que trabajamos
          </div>

          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex w-max animate-marquee gap-16 py-2">
              {[...stack, ...stack].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-muted-foreground/50 hover:text-foreground/80 transition-colors whitespace-nowrap"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
