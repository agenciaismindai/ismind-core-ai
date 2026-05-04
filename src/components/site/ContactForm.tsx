import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const sectores = [
  "Clínica / Centro médico",
  "Despacho legal",
  "Asesoría / Consultoría",
  "Centro de bienestar / Spa",
  "Otro",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    sector: sectores[0],
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          sector: form.sector.trim(),
          message: form.message.trim(),
        }),
      });

      const contentType = res.headers.get("content-type") || "";
      const isJson = contentType.includes("application/json");
      const data: { error?: string; ok?: boolean } = isJson
        ? await res.json().catch(() => ({}))
        : {};

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error(
            "El endpoint /api/contact no está disponible en esta vista previa. Funcionará al desplegar en Netlify o Vercel.",
          );
        }
        if (res.status === 503) {
          throw new Error(
            "El servicio de email aún no está configurado (falta RESEND_API_KEY en el hosting).",
          );
        }
        throw new Error(data?.error || `No se pudo enviar el mensaje (HTTP ${res.status}).`);
      }

      if (!isJson) {
        throw new Error(
          "Respuesta inesperada del servidor. Verifica que la función /api/contact esté desplegada.",
        );
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", sector: sectores[0], message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Error inesperado al enviar el mensaje. Inténtalo de nuevo.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-hairline bg-surface/60 p-8 text-center">
        <div className="mx-auto h-12 w-12 rounded-full border border-hairline bg-background flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-glow animate-pulse-glow" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">Mensaje enviado</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
          Hemos recibido tu solicitud. El equipo de ISMIND.AI te contactará en menos de 24h.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          ← enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-hairline bg-surface/60 p-6 sm:p-8 text-left space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Nombre" htmlFor="name">
          <input
            id="name"
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={update("name")}
            className={inputClass}
            placeholder="Tu nombre"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            type="email"
            required
            maxLength={255}
            value={form.email}
            onChange={update("email")}
            className={inputClass}
            placeholder="tu@empresa.com"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Empresa" htmlFor="company">
          <input
            id="company"
            type="text"
            required
            maxLength={120}
            value={form.company}
            onChange={update("company")}
            className={inputClass}
            placeholder="Nombre de tu empresa"
          />
        </Field>
        <Field label="Sector" htmlFor="sector">
          <select
            id="sector"
            value={form.sector}
            onChange={update("sector")}
            className={inputClass}
          >
            {sectores.map((s) => (
              <option key={s} value={s} className="bg-background">
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="¿Qué quieres automatizar?" htmlFor="message">
        <textarea
          id="message"
          required
          maxLength={1500}
          rows={4}
          value={form.message}
          onChange={update("message")}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntanos brevemente tu operación actual y dónde te gustaría aplicar IA."
        />
      </Field>

      {status === "error" && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-xs text-destructive">
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <p className="text-[11px] text-muted-foreground">
          Respondemos en menos de 24h hábiles.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-all shadow-soft disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
        >
          {status === "loading" ? (
            <>
              <span className="h-3 w-3 rounded-full border-2 border-background/30 border-t-background animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Contactar
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 7h8m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-hairline bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-glow/60 focus:ring-2 focus:ring-glow/20 transition-all appearance-none";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}
