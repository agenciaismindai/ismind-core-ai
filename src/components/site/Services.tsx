import { SectionLabel } from "./Concept";

const services = [
  {
    tag: "Agents",
    t: "AI Agents",
    d: "Agentes autónomos que conversan, califican, agendan y dan seguimiento. 24/7.",
    code: "agent.run({ task: 'book_appointment' })",
  },
  {
    tag: "Workflows",
    t: "Workflow Automation",
    d: "Procesos completos automatizados: onboarding, facturación, recordatorios, reporting.",
    code: "workflow.deploy('client_onboarding')",
  },
  {
    tag: "Integrations",
    t: "Integraciones",
    d: "Conectamos tu CRM, calendario, WhatsApp, ERP y herramientas internas.",
    code: "connect(['hubspot', 'calendly', 'wpp'])",
  },
  {
    tag: "Optimization",
    t: "Optimización de procesos",
    d: "Rediseñamos operaciones con IA en el centro. Más rápido. Más barato. Más estable.",
    code: "optimize.process({ kpi: 'cycle_time' })",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="05" label="Producto" />
        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tighter max-w-2xl leading-[1.05]">
            Cuatro módulos. Una sola infraestructura.
          </h2>
          <p className="text-muted-foreground max-w-sm">
            Combina lo que necesitas. ISMIND.AI se adapta a tu operación, no al revés.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-4" data-stagger="120">
          {services.map((s) => (
            <div
              key={s.t}
              className="reveal group relative rounded-2xl border border-hairline bg-surface/60 p-7 hover:bg-surface transition-all overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-glow/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-glow" />
                  {s.tag}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{s.d}</p>

                <div className="mt-6 rounded-lg border border-hairline bg-background/80 px-4 py-3 font-mono text-xs text-muted-foreground">
                  <span className="text-glow">$</span> {s.code}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
