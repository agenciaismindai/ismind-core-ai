import { SectionLabel } from "./Concept";
import { PhoneCall, ScanSearch, Rocket, ArrowRight, Check } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: PhoneCall,
    duration: "30 min · Sin compromiso",
    title: "Llamada inicial",
    description:
      "Una conversación corta para entender tu negocio, tu operación actual y qué quieres conseguir en los próximos 6 meses.",
    deliverables: [
      "Agendamos en menos de 24h",
      "Hablamos de objetivos, no de tecnología",
      "Sales sabiendo si encajamos",
    ],
    youDo: "Cuéntanos cómo opera tu equipo hoy.",
  },
  {
    n: "02",
    icon: ScanSearch,
    duration: "5–7 días · Sin coste",
    title: "Diagnóstico",
    description:
      "Auditamos procesos, herramientas y cuellos de botella. Identificamos dónde la IA genera ROI real en tu operación.",
    deliverables: [
      "Auditoría operativa documentada",
      "Plan de acción por fases",
      "Estimación de ahorro y ROI",
    ],
    youDo: "Compartes accesos de solo lectura a tus herramientas clave.",
  },
  {
    n: "03",
    icon: Rocket,
    duration: "2–6 semanas · Implementación guiada",
    title: "Implementación",
    description:
      "Desplegamos agentes, automatizaciones e integraciones sobre tu stack actual. Te acompañamos hasta ver los primeros resultados medibles.",
    deliverables: [
      "Sistema en producción",
      "Equipo formado en su uso",
      "Métricas y soporte continuo",
    ],
    youDo: "Validas hitos. Nosotros ejecutamos.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="04" label="Cómo funciona" />

        <div className="mt-6 max-w-3xl reveal">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.02]">
            Así es como{" "}
            <span className="text-glow">trabajamos.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Un proceso simple, claro y enfocado en resultados. Desde la primera
            llamada hasta el sistema funcionando, sabes exactamente qué pasa en
            cada fase.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* connecting line */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[3.25rem] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-hairline to-transparent"
          />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.n}
                  className="relative group animate-float-up"
                  style={{ animationDelay: `${i * 140}ms` }}
                >
                  {/* Arrow connector (desktop) */}
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden lg:flex absolute top-12 -right-5 z-10 h-6 w-6 items-center justify-center rounded-full border border-hairline bg-background text-muted-foreground"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  )}

                  <div className="relative h-full flex flex-col rounded-2xl border border-hairline bg-surface/40 backdrop-blur-sm p-7 transition-all duration-500 hover:bg-surface/70 hover:border-glow/30 hover:-translate-y-1 hover:shadow-soft">
                    {/* Step header */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 rounded-xl border border-hairline bg-background flex items-center justify-center shrink-0">
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-xl bg-glow/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <Icon className="relative h-6 w-6 text-glow" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-muted-foreground">
                          PASO {s.n}
                        </div>
                        <h3 className="font-display text-xl font-semibold tracking-tight mt-0.5">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    {/* Duration chip */}
                    <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-glow animate-pulse-glow" />
                      {s.duration}
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm text-foreground/85 leading-relaxed">
                      {s.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mt-6 border-t border-hairline pt-5">
                      <div className="text-[11px] uppercase tracking-[0.14em] font-mono text-muted-foreground/80 mb-3">
                        Qué obtienes
                      </div>
                      <ul className="space-y-2">
                        {s.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 text-sm text-foreground/90"
                          >
                            <Check className="h-4 w-4 text-glow shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Your role */}
                    <div className="mt-auto pt-6">
                      <div className="rounded-lg bg-background/60 border border-hairline p-3">
                        <div className="text-[11px] uppercase tracking-[0.14em] font-mono text-muted-foreground/80">
                          Tu parte
                        </div>
                        <div className="mt-1 text-xs text-foreground/80 leading-relaxed">
                          {s.youDo}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reassurance + CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-hairline bg-surface/40 backdrop-blur-sm p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-glow" strokeWidth={2.5} />
              Sin compromiso
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-glow" strokeWidth={2.5} />
              Respuesta en 24h
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-glow" strokeWidth={2.5} />
              Diagnóstico gratuito
            </span>
          </div>

          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all hover:bg-foreground/90 hover:shadow-glow"
          >
            Agenda tu llamada
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
