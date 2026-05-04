import { SectionLabel } from "./Concept";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote:
      "En 4 meses redujimos un 74% el tiempo dedicado a gestionar citas y mensajes. Hoy atendemos un 38% más de pacientes con el mismo equipo.",
    name: "Lucía Hernández",
    role: "Directora General",
    company: "Clínica Dental Avanza · Madrid",
    avatar: testimonial1,
  },
  {
    quote:
      "Procesamos 3× expedientes con la misma plantilla. El ROI fue positivo al segundo mes. ISMIND.AI no nos vendió un servicio, nos montó infraestructura.",
    name: "Javier Domínguez",
    role: "Socio Director",
    company: "Domínguez & Riera Abogados · Barcelona",
    avatar: testimonial2,
  },
  {
    quote:
      "Automatizamos onboarding, seguimiento y renovaciones. Subimos retención un 38% y ahorramos 120 horas operativas al mes en 6 centros.",
    name: "Marta Solé",
    role: "CEO & Cofundadora",
    company: "Núa Wellness Group",
    avatar: testimonial3,
  },
];

const metrics = [
  { v: "+120", l: "operadores activos" },
  { v: "+312%", l: "ROI medio en 6 meses" },
  { v: "−74%", l: "tareas manuales" },
  { v: "24/7", l: "ejecución continua" },
];

const logos = [
  "AVANZA",
  "DOMÍNGUEZ & RIERA",
  "NÚA",
  "MERIDIA",
  "KAIROS",
  "NORDIK",
  "VECTRA",
];

export function SocialProof() {
  return (
    <section className="relative py-32 border-t border-hairline">
      {/* subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="08" label="Prueba social" />

        <div className="mt-6 max-w-3xl reveal">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.02]">
            Resultados reales,{" "}
            <span className="text-glow">clientes reales.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Más de 120 operadores en España ya escalan con ISMIND.AI. Estos son
            algunos de los equipos que hoy facturan más con menos esfuerzo
            operativo.
          </p>
        </div>

        {/* Metrics row */}
        <div
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-2xl border border-hairline overflow-hidden"
          data-stagger="80"
        >
          {metrics.map((m) => (
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

        {/* Testimonials */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger="140">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal group relative flex flex-col rounded-2xl border border-hairline bg-surface/40 p-7 backdrop-blur-sm transition-all duration-500 hover:bg-surface/70 hover:border-glow/30 hover:-translate-y-1 hover:shadow-soft"
            >
              {/* Quote mark */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-glow opacity-80"
                aria-hidden
              >
                <path
                  d="M7 7h4v4H7c0 3 2 4 4 4v2c-4 0-6-3-6-7V7Zm10 0h4v4h-4c0 3 2 4 4 4v2c-4 0-6-3-6-7V7Z"
                  fill="currentColor"
                />
              </svg>

              <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground/90 flex-1">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-hairline pt-5">
                <img
                  src={t.avatar}
                  alt={`Retrato de ${t.name}`}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-hairline grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:ring-glow/40"
                />
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Logo strip */}
        <div className="mt-20">
          <div className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground/70 font-mono">
            Operadores que confían en ISMIND.AI
          </div>

          <div className="relative mt-8 overflow-hidden">
            {/* edge fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex w-max animate-marquee gap-16 py-2">
              {[...logos, ...logos].map((name, i) => (
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
