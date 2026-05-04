import { ContactForm } from "./ContactForm";

export function CTA() {
  return (
    <section id="cta" className="relative py-32 border-t border-hairline overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, color-mix(in oklab, var(--glow) 25%, transparent), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid mask-radial opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Pitch */}
          <div className="text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-glow animate-pulse-glow" />
              Listo para desplegar
            </div>

            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[0.95] text-gradient">
              Automatiza tu negocio con ISMIND.AI
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Una llamada. Un diagnóstico. Un sistema que opera por ti.
            </p>

            <div className="mt-8 hidden lg:block space-y-3" data-stagger="100">
              {[
                "Diagnóstico gratuito de tu operación",
                "Propuesta personalizada en 48h",
                "Implementación en menos de 30 días",
              ].map((b) => (
                <div key={b} className="reveal flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-5 w-5 rounded-full border border-hairline bg-background flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="m2 5 2 2 4-5" stroke="var(--glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-scale">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
