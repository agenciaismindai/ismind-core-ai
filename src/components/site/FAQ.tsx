import { useState } from "react";
import { SectionLabel } from "./Concept";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "¿Es caro?",
    a: "Depende del alcance, pero trabajamos con un modelo basado en ROI: el sistema se paga solo en los primeros meses. Antes de cualquier propuesta, te entregamos una estimación clara de coste y retorno esperado. Sin sorpresas.",
    featured: true,
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Entre 2 y 6 semanas según la complejidad. Empiezas a ver los primeros automatismos funcionando desde la semana 1, y vamos liberando módulos por fases para que el impacto sea progresivo.",
  },
  {
    q: "¿Necesito un equipo técnico?",
    a: "No. Nosotros nos encargamos del diseño, despliegue, integración y formación. Tu equipo solo necesita usar las herramientas que ya conoce. Si tienes equipo técnico, encajamos con su flujo de trabajo.",
  },
  {
    q: "¿Qué tipo de empresas pueden beneficiarse?",
    a: "Operadores con procesos repetitivos y volumen: clínicas, despachos, ecommerce, agencias, servicios B2B, hospitality. Si tu equipo invierte horas en tareas que se podrían sistematizar, encajas.",
  },
  {
    q: "¿Cuándo veré resultados?",
    a: "Resultados operativos visibles en 2–4 semanas (tareas automatizadas, tiempos reducidos). Impacto medible en P&L (ahorro en horas, conversión, retención) entre el mes 2 y 3.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Tres fases: llamada inicial sin compromiso, diagnóstico gratuito con plan de acción, e implementación guiada. Te acompañamos desde la primera reunión hasta ver las métricas funcionando en producción.",
  },
  {
    q: "¿Qué pasa si no funciona?",
    a: "Definimos KPIs medibles antes de empezar. Si no alcanzamos los objetivos acordados en el plazo definido, iteramos sin coste adicional hasta lograrlos. Trabajamos por resultados, no por horas.",
  },
  {
    q: "¿Es complicado de mantener?",
    a: "No. El sistema funciona en automático y se conecta a tus herramientas actuales. Incluimos soporte continuo, monitorización y mejoras evolutivas. Tú te centras en tu negocio, nosotros del sistema.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<string>("item-0");

  return (
    <section id="faq" className="relative py-32 border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="09" label="Preguntas frecuentes" />

        <div className="mt-10 grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: heading + reassurance */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.02]">
              Resolvemos{" "}
              <span className="text-glow">tus dudas.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Todo lo que necesitas saber antes de empezar. Si tu pregunta no
              está aquí, te respondemos en menos de 24 horas.
            </p>

            <div className="mt-8 hidden lg:block">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all hover:bg-foreground/90 hover:shadow-glow"
              >
                ¿Tienes otra duda? Agenda una llamada
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="mt-4 text-xs text-muted-foreground font-mono">
                Respuesta garantizada en menos de 24h
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              value={open}
              onValueChange={setOpen}
              className="space-y-3"
            >
              {faqs.map((f, i) => {
                const id = `item-${i}`;
                const isOpen = open === id;
                return (
                  <AccordionItem
                    key={id}
                    value={id}
                    className={`group rounded-2xl border border-hairline bg-surface/40 backdrop-blur-sm border-b transition-colors duration-300 ${
                      isOpen ? "bg-surface/70 border-glow/30" : "hover:bg-surface/60"
                    }`}
                  >
                    <AccordionTrigger className="px-6 py-5 text-left text-base font-medium hover:no-underline [&[data-state=open]>svg]:text-glow">
                      <div className="flex items-center gap-3 pr-4">
                        <span className="font-mono text-xs text-muted-foreground/70 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display tracking-tight">
                          {f.q}
                        </span>
                        {f.featured && (
                          <span className="ml-1 inline-flex items-center gap-1 rounded-full border border-glow/30 bg-glow/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-glow">
                            <Sparkles className="h-2.5 w-2.5" />
                            Top
                          </span>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0">
                      <div className="ml-9 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {/* Mobile CTA */}
            <div className="mt-10 lg:hidden flex flex-col items-start gap-3">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all hover:bg-foreground/90"
              >
                ¿Tienes otra duda? Agenda una llamada
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="text-xs text-muted-foreground font-mono">
                Respuesta garantizada en menos de 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
