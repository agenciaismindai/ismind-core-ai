import { SectionLabel } from "./Concept";

const cases = [
  {
    sector: "Clínicas",
    t: "Gestión de citas autónoma",
    d: "Agentes que reservan, confirman, reprograman y reducen no-shows automáticamente.",
    metric: "−62% no-shows",
  },
  {
    sector: "Despachos legales",
    t: "Seguimiento de clientes",
    d: "Onboarding, recordatorios documentales y comunicación proactiva sin intervención manual.",
    metric: "+3× expedientes/mes",
  },
  {
    sector: "Centros de bienestar",
    t: "Operación 24/7",
    d: "Reservas, listas de espera y campañas de retención gestionadas por IA en todo canal.",
    metric: "+38% retención",
  },
  {
    sector: "Asesorías",
    t: "Procesos cliente automatizados",
    d: "Recogida de documentación, validación, recordatorios fiscales y reportes — sin tocar el correo.",
    metric: "−74% tareas manuales",
  },
];

export function UseCases() {
  return (
    <section id="casos" className="relative py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="07" label="Casos de uso" />
        <h2 className="reveal mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tighter max-w-2xl leading-[1.05]">
          Diseñado para negocios de servicios.
        </h2>

        <div className="mt-16 grid lg:grid-cols-2 gap-4" data-stagger="120">
          {cases.map((c) => (
            <div
              key={c.t}
              className="reveal group relative rounded-2xl border border-hairline bg-surface/60 p-8 hover:bg-surface transition-all"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.sector}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {c.t}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                    {c.d}
                  </p>
                </div>
                <div className="shrink-0 rounded-xl border border-hairline bg-background px-3 py-2 text-right">
                  <div className="font-mono text-[10px] text-muted-foreground uppercase">Resultado</div>
                  <div className="font-display text-lg font-semibold text-glow tracking-tight mt-0.5">
                    {c.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
