import { useEffect } from "react";

export function Privacy() {
  useEffect(() => {
    document.title = "Política de Privacidad | ISMIND.AI";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="border-b border-hairline">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="relative h-6 w-6">
              <div className="absolute inset-0 rounded-md bg-gradient-accent opacity-90" />
              <div className="absolute inset-[3px] rounded-[5px] bg-background flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-glow" />
              </div>
            </div>
            <span className="font-display font-semibold tracking-tight text-sm">
              ISMIND<span className="text-glow">.AI</span>
            </span>
          </a>
          <a
            href="/"
            className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            ← volver al inicio
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        {/* Hero */}
        <div className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Legal · Privacidad
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Política de Privacidad
          </h1>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
            En ISMIND.AI nos tomamos en serio tu privacidad. Esta política explica, de forma
            clara y sin tecnicismos, qué datos recogemos, para qué los usamos y qué control
            tienes sobre ellos. Cumplimos con el Reglamento General de Protección de Datos
            (RGPD) de la Unión Europea y con la Ley Orgánica 3/2018 de Protección de Datos
            Personales y Garantía de los Derechos Digitales (LOPDGDD).
          </p>
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">
            Última actualización: 27 de abril de 2026
          </p>
        </div>

        <article className="space-y-12">
          <Section title="1. Responsable del tratamiento">
            <p>
              El responsable del tratamiento de los datos personales recogidos a través de
              esta web es el titular de la marca comercial <strong>Ismind AI</strong>, con
              sede en España.
            </p>
            <p>
              Para cualquier consulta relacionada con tus datos, puedes contactarnos en{" "}
              <a
                href="mailto:agencia@ismindai.es"
                className="text-foreground underline underline-offset-4 decoration-hairline hover:decoration-glow transition-colors"
              >
                agencia@ismindai.es
              </a>
              .
            </p>
          </Section>

          <Section title="2. Datos que recogemos">
            <p>
              Solo solicitamos los datos estrictamente necesarios para poder atenderte. A
              través de los formularios de contacto recogemos:
            </p>
            <ul className="space-y-2 pl-1">
              <Bullet>Nombre y apellidos</Bullet>
              <Bullet>Dirección de correo electrónico</Bullet>
              <Bullet>Empresa y sector (cuando lo indicas)</Bullet>
              <Bullet>El contenido del mensaje que nos envías</Bullet>
            </ul>
            <p>
              No recopilamos información sensible ni datos de categorías especiales. No usamos
              cookies de seguimiento publicitario.
            </p>
          </Section>

          <Section title="3. Finalidad del tratamiento">
            <p>Utilizamos tus datos únicamente para:</p>
            <ul className="space-y-2 pl-1">
              <Bullet>Responder a tus consultas y solicitudes de información.</Bullet>
              <Bullet>
                Gestionar el contacto comercial y preparar propuestas de servicios cuando lo
                solicitas.
              </Bullet>
              <Bullet>
                Enviarte, en su caso, información directamente relacionada con los servicios
                que has solicitado.
              </Bullet>
            </ul>
            <p>No usaremos tus datos para fines distintos a los que motivaron su recogida.</p>
          </Section>

          <Section title="4. Legitimación">
            <p>
              La base legal para tratar tus datos es <strong>tu consentimiento</strong>,
              otorgado al cumplimentar y enviar voluntariamente cualquier formulario de esta
              web. Puedes retirar ese consentimiento en cualquier momento escribiéndonos a{" "}
              <a
                href="mailto:agencia@ismindai.es"
                className="text-foreground underline underline-offset-4 decoration-hairline hover:decoration-glow transition-colors"
              >
                agencia@ismindai.es
              </a>
              .
            </p>
          </Section>

          <Section title="5. Conservación de los datos">
            <p>
              Conservamos tus datos solo durante el tiempo necesario para cumplir con la
              finalidad por la que se recogieron y, en su caso, para atender posibles
              responsabilidades legales. Cuando dejen de ser necesarios, se eliminan de forma
              segura.
            </p>
          </Section>

          <Section title="6. Derechos del usuario">
            <p>Tienes derecho a:</p>
            <ul className="space-y-2 pl-1">
              <Bullet>
                <strong>Acceder</strong> a los datos personales que tenemos sobre ti.
              </Bullet>
              <Bullet>
                <strong>Rectificar</strong> los datos inexactos o incompletos.
              </Bullet>
              <Bullet>
                <strong>Suprimir</strong> tus datos cuando ya no sean necesarios.
              </Bullet>
              <Bullet>
                <strong>Oponerte</strong> al tratamiento o solicitar su{" "}
                <strong>limitación</strong>.
              </Bullet>
              <Bullet>
                Solicitar la <strong>portabilidad</strong> de tus datos.
              </Bullet>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, basta con que nos escribas a{" "}
              <a
                href="mailto:agencia@ismindai.es"
                className="text-foreground underline underline-offset-4 decoration-hairline hover:decoration-glow transition-colors"
              >
                agencia@ismindai.es
              </a>{" "}
              indicando tu solicitud. También puedes presentar una reclamación ante la Agencia
              Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 decoration-hairline hover:decoration-glow transition-colors"
              >
                aepd.es
              </a>
              ) si consideras que tus derechos no han sido atendidos.
            </p>
          </Section>

          <Section title="7. Cesión de datos a terceros">
            <p>
              No vendemos, alquilamos ni cedemos tus datos personales a terceros, salvo
              obligación legal.
            </p>
            <p>
              Para prestar nuestros servicios podemos apoyarnos en proveedores tecnológicos de
              confianza (por ejemplo, infraestructura de envío de email o hosting). Estos
              proveedores actúan como encargados del tratamiento bajo contrato y aplican
              garantías equivalentes a las exigidas por el RGPD.
            </p>
          </Section>

          <Section title="8. Seguridad de los datos">
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger tu
              información frente a accesos no autorizados, pérdida o alteración. Trabajamos
              únicamente con proveedores que ofrecen niveles adecuados de seguridad.
            </p>
          </Section>

          <Section title="9. Cambios en esta política">
            <p>
              Podemos actualizar esta Política de Privacidad para reflejar cambios legales,
              técnicos u operativos. Cuando lo hagamos, publicaremos la nueva versión en esta
              misma página, indicando la fecha de actualización.
            </p>
          </Section>

          <Section title="10. Compromiso de transparencia">
            <p>
              Creemos que la confianza se construye con claridad. Si tienes cualquier duda
              sobre cómo tratamos tus datos o quieres entender mejor algún punto, escríbenos
              sin compromiso a{" "}
              <a
                href="mailto:agencia@ismindai.es"
                className="text-foreground underline underline-offset-4 decoration-hairline hover:decoration-glow transition-colors"
              >
                agencia@ismindai.es
              </a>
              . Te responderemos con el mismo cuidado con el que tratamos tu información.
            </p>
          </Section>
        </article>

        <div className="mt-16 pt-8 border-t border-hairline flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-all shadow-soft"
          >
            ← Volver al inicio
          </a>
          <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline">
            ISMIND.AI · España
          </span>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-glow" />
      <span>{children}</span>
    </li>
  );
}
