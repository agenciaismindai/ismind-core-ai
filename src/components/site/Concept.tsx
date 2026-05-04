export function Concept() {
  return (
    <section id="concepto" className="relative py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="01" label="Concepto" />

        <div className="mt-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.05]">
              Automatización de procesos con <span className="text-glow">IA</span> para tu negocio.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              ISMIND.AI no es una agencia. Es una infraestructura de inteligencia
              artificial para empresas españolas: un sistema que ejecuta tareas,
              decide y escala — conectado a las herramientas que ya usas.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-hairline bg-surface/60 p-1">
              <div className="rounded-xl bg-background p-6 space-y-4">
                {[
                  ["Capa de IA", "Agentes + automatizaciones"],
                  ["Tu negocio", "Personas, herramientas y datos"],
                  ["Operación", "Decisiones, ejecución, métricas"],
                ].map(([t, s], i) => (
                  <div key={t} className="flex items-start gap-4">
                    <div className="font-mono text-xs text-muted-foreground pt-0.5 w-6">
                      0{i + 1}
                    </div>
                    <div className="flex-1 border-l border-hairline pl-4">
                      <div className="text-sm font-medium">{t}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{s}</div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-glow mt-2 animate-pulse-glow" />
                  </div>
                ))}
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
    <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-widest">
      <span className="text-glow">{index}</span>
      <span className="h-px w-8 bg-hairline" />
      {label}
    </div>
  );
}
