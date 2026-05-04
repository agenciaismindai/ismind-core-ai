import { SectionLabel } from "./Concept";

const problems = [
  {
    k: "Procesos manuales",
    d: "Tu equipo repite las mismas tareas cada día. Tiempo que no escala.",
    icon: "M12 6v6l4 2M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Z",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
  },
  {
    k: "Pérdida de tiempo",
    d: "Horas atrapadas entre herramientas, hojas de cálculo y mensajes.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8Z",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
  },
  {
    k: "Equipos saturados",
    d: "Más clientes significa más carga. La calidad empieza a romperse.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    color: "#f87171",
    bg: "rgba(248,113,113,0.08)",
  },
  {
    k: "Sin escalabilidad",
    d: "Crecer implica contratar. Contratar implica más coste y más caos.",
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
  },
];

export function Problem() {
  return (
    <section className="relative py-40 overflow-hidden border-t border-hairline">
      {/* Fondo oscuro diferenciado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(251,146,60,0.03) 50%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
          <div>
            <SectionLabel index="02" label="Problema" />
            <h2
              className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter max-w-2xl leading-[1.02]"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #fdba74 60%, #f87171 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Operar manualmente tiene un techo.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-muted-foreground leading-relaxed">
              Los negocios de servicios pierden hasta un{" "}
              <span className="font-bold" style={{ color: "#fb923c" }}>40%</span>{" "}
              de su capacidad en tareas que no requieren un humano.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          data-stagger="100"
        >
          {problems.map((p, i) => (
            <div
              key={p.k}
              className="reveal group relative rounded-2xl p-7 border border-hairline transition-all hover:scale-[1.02] cursor-default"
              style={{ background: p.bg }}
            >
              {/* Número */}
              <div
                className="font-mono text-xs font-bold mb-6"
                style={{ color: p.color }}
              >
                0{i + 1}
              </div>

              {/* Icono */}
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${p.color}18` }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={p.icon} />
                </svg>
              </div>

              {/* Texto */}
              <div className="text-base font-semibold mb-2">{p.k}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{p.d}</div>

              {/* Línea hover */}
              <div
                className="mt-6 h-0.5 w-8 rounded-full transition-all group-hover:w-16"
                style={{ background: p.color }}
              />
            </div>
          ))}
        </div>

        {/* Stat grande central */}
        <div className="mt-20 reveal flex flex-col items-center text-center">
          <div
            className="font-display text-8xl font-black tracking-tighter"
            style={{
              background: "linear-gradient(135deg, #fb923c, #f87171)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            40%
          </div>
          <p className="mt-3 text-muted-foreground text-sm max-w-xs">
            de capacidad perdida en tareas que la IA puede ejecutar por ti
          </p>
        </div>
      </div>
    </section>
  );
}
