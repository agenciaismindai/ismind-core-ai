import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, date: new Date().toISOString() }),
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-40 p-3 sm:p-4 animate-float-up"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-hairline bg-surface-elevated/95 backdrop-blur-md shadow-soft p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium mb-1">
              Usamos cookies 🍪
            </p>
            <p>
              Utilizamos cookies propias y de terceros para mejorar tu
              experiencia, analizar el tráfico y personalizar el contenido.
              Puedes aceptarlas todas, rechazarlas o consultar más información
              en nuestra{" "}
              <a
                href="/cookies"
                className="underline underline-offset-2 text-foreground hover:text-glow transition-colors"
              >
                política de cookies
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:shrink-0">
            <button
              onClick={() => decide("rejected")}
              className="px-5 py-2.5 rounded-lg text-sm font-medium border border-hairline text-foreground hover:bg-accent transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={() => decide("accepted")}
              className="px-5 py-2.5 rounded-lg text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
