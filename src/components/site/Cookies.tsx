import { useEffect } from "react";

export function Cookies() {
  useEffect(() => {
    document.title = "Política de Cookies | ISMIND.AI";
    window.scrollTo(0, 0);
  }, []);

  const resetConsent = () => {
    try {
      localStorage.removeItem("cookie-consent-v1");
      window.location.reload();
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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
        <div className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Legal · Cookies
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Política de Cookies
          </h1>
          <p className="mt-4 text-muted-foreground">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web
              instalan en tu dispositivo cuando los visitas. Sirven para que
              la web funcione correctamente, recordar tus preferencias,
              analizar el uso del sitio o mostrarte contenido relevante. Esta
              política se rige por el RGPD (Reglamento UE 2016/679), la
              LOPDGDD y el artículo 22.2 de la LSSI-CE.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
              2. ¿Quién utiliza las cookies?
            </h2>
            <p>
              El responsable del tratamiento de los datos recogidos a través
              de cookies en este sitio web es <strong>Ismael García</strong>,
              titular de ISMIND.AI, con dirección de contacto{" "}
              <a
                href="mailto:agencia@ismindai.es"
                className="text-foreground underline underline-offset-2 hover:text-glow"
              >
                agencia@ismindai.es
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
              3. Tipos de cookies que utilizamos
            </h2>
            <p className="mb-4">
              En ISMIND.AI utilizamos cookies propias y de terceros, agrupadas
              según su finalidad:
            </p>

            <div className="space-y-5">
              <div className="rounded-xl border border-hairline p-5 bg-surface">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  Cookies técnicas (necesarias)
                </h3>
                <p>
                  Imprescindibles para el funcionamiento del sitio web.
                  Permiten la navegación, el uso de elementos seguros y
                  recordar tu elección sobre el aviso de cookies. No requieren
                  consentimiento.
                </p>
                <p className="mt-2 text-xs font-mono text-foreground/70">
                  Ejemplo: <code>cookie-consent-v1</code> (almacenamiento
                  local, propio, ~12 meses).
                </p>
              </div>

              <div className="rounded-xl border border-hairline p-5 bg-surface">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  Cookies analíticas (terceros)
                </h3>
                <p>
                  Nos ayudan a entender cómo interactúan los visitantes con la
                  web (páginas vistas, origen del tráfico, dispositivos)
                  mediante información agregada y anónima, para mejorar la
                  experiencia. Solo se activan si aceptas su uso.
                </p>
                <p className="mt-2 text-xs font-mono text-foreground/70">
                  Proveedores potenciales: Google Analytics, Vercel Analytics
                  o similar (caducidad hasta 24 meses).
                </p>
              </div>

              <div className="rounded-xl border border-hairline p-5 bg-surface">
                <h3 className="font-display text-base font-semibold text-foreground mb-1">
                  Cookies de marketing (terceros)
                </h3>
                <p>
                  Permiten medir la eficacia de campañas publicitarias y
                  mostrar anuncios más relevantes en otras plataformas. Solo
                  se activan si aceptas su uso.
                </p>
                <p className="mt-2 text-xs font-mono text-foreground/70">
                  Proveedores potenciales: Meta Pixel, LinkedIn Insight Tag,
                  Google Ads (caducidad hasta 13 meses).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
              4. Base legal
            </h2>
            <p>
              Las cookies técnicas se utilizan en base al interés legítimo de
              garantizar el funcionamiento del sitio. El resto de cookies
              (analíticas y de marketing) se instalan únicamente con tu
              consentimiento expreso, prestado mediante el banner de cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
              5. ¿Cómo gestionar o desactivar las cookies?
            </h2>
            <p className="mb-4">
              Puedes aceptar, rechazar o configurar las cookies en cualquier
              momento desde el banner que aparece la primera vez que visitas
              la web. Si quieres modificar tu elección posteriormente, puedes
              restablecer tus preferencias aquí:
            </p>
            <button
              onClick={resetConsent}
              className="px-4 py-2 rounded-lg text-sm font-medium border border-hairline hover:bg-accent transition-colors text-foreground"
            >
              Restablecer preferencias de cookies
            </button>

            <p className="mt-6 mb-2">
              También puedes bloquearlas o eliminarlas directamente desde la
              configuración de tu navegador:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a
                  className="text-foreground underline underline-offset-2 hover:text-glow"
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  className="text-foreground underline underline-offset-2 hover:text-glow"
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  className="text-foreground underline underline-offset-2 hover:text-glow"
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  className="text-foreground underline underline-offset-2 hover:text-glow"
                  href="https://support.microsoft.com/es-es/microsoft-edge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs">
              Ten en cuenta que desactivar ciertas cookies puede afectar al
              funcionamiento de algunas partes del sitio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
              6. Cambios en esta política
            </h2>
            <p>
              Podemos actualizar esta Política de Cookies para reflejar
              cambios legales o de funcionamiento del sitio. Te recomendamos
              revisar esta página periódicamente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
              7. Contacto
            </h2>
            <p>
              Si tienes cualquier duda sobre el uso de cookies, escríbenos a{" "}
              <a
                href="mailto:agencia@ismindai.es"
                className="text-foreground underline underline-offset-2 hover:text-glow"
              >
                agencia@ismindai.es
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-hairline mt-10">
        <div className="mx-auto max-w-3xl px-6 py-8 text-xs text-muted-foreground flex flex-wrap gap-4 justify-between">
          <span>© {new Date().getFullYear()} ISMIND.AI</span>
          <div className="flex gap-4">
            <a href="/privacidad" className="hover:text-foreground transition-colors">
              Privacidad
            </a>
            <a href="/cookies" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
