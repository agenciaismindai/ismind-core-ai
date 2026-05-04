import { SectionLabel } from "./Concept";

const benefits = [
  { v: "Tiempo", t: "Ahorra horas cada semana", d: "Tareas repetitivas eliminadas. Tu equipo se centra en lo que importa." },
  { v: "Coste", t: "Reduce costes operativos", d: "Menos errores, menos retrabajo, menos contrataciones reactivas." },
  { v: "Escala", t: "Crece sin contratar", d: "Más clientes con la misma estructura. La capacidad deja de ser un límite." },
  { v: "Output", t: "Más productividad real", d: "Tu negocio produce más, mejor y de forma consistente." },
];

export function Benefits() {
  return (
    <section className="relative py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="06" label="Beneficios" />
        <h2 className="mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tighter max-w-3xl leading-[1.05]">
          Resultados que se ven en operaciones, equipo y P&amp;L.
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div
              key={b.t}
              className="rounded-2xl border border-hairline bg-surface/40 p-6 hover:border-foreground/20 transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-glow">
                {b.v}
              </div>
              <div className="mt-4 font-display text-lg font-semibold tracking-tight">{b.t}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
