import { SectionLabel } from "./Concept";

const problems = [
  {
    k: "Procesos manuales",
    d: "Tu equipo repite las mismas tareas cada día. Tiempo que no escala.",
  },
  {
    k: "Pérdida de tiempo",
    d: "Horas atrapadas entre herramientas, hojas de cálculo y mensajes.",
  },
  {
    k: "Equipos saturados",
    d: "Más clientes significa más carga. La calidad empieza a romperse.",
  },
  {
    k: "Sin escalabilidad",
    d: "Crecer implica contratar. Contratar implica más coste y más caos.",
  },
];

export function Problem() {
  return (
    <section className="relative py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionLabel index="02" label="Problema" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tighter max-w-2xl leading-[1.05]">
              Operar manualmente tiene un techo.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Los negocios de servicios pierden hasta un 40% de su capacidad en
            tareas que no requieren un humano.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-2xl border border-hairline overflow-hidden">
          {problems.map((p, i) => (
            <div
              key={p.k}
              className="bg-background p-7 hover:bg-surface transition-colors group"
            >
              <div className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </div>
              <div className="mt-6 text-base font-medium">{p.k}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.d}
              </div>
              <div className="mt-6 h-px w-8 bg-foreground/20 group-hover:w-16 group-hover:bg-glow transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
