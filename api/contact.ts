// Vercel serverless function: POST /api/contact
// Mirrors netlify/functions/contact.mts. Vercel auto-routes files under /api.
// Env vars (configure in Vercel project settings):
//   RESEND_API_KEY
//   CONTACT_TO    (optional, defaults to agencia@ismindai.es)
//   CONTACT_FROM  (optional, defaults to "ISMIND.AI <onboarding@resend.dev>")

import { z } from "zod";

export const config = { runtime: "edge" };

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(120),
  sector: z.string().trim().min(1).max(80),
  message: z.string().trim().min(1).max(1500),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") return json({ error: "Método no permitido." }, 405);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Cuerpo inválido." }, 400);
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return json(
      { error: "Datos del formulario no válidos.", details: parsed.error.flatten() },
      400,
    );
  }

  const { name, email, company, sector, message } = parsed.data;

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO || "agencia@ismindai.es";
  const FROM = process.env.CONTACT_FROM || "ISMIND.AI <onboarding@resend.dev>";

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY env var");
    return json({ error: "El servicio de email no está configurado." }, 503);
  }

  const subject = `Nueva solicitud de contacto · ${company}`;
  const text = [
    `Nueva solicitud desde ismindai.es`,
    ``,
    `Nombre:   ${name}`,
    `Email:    ${email}`,
    `Empresa:  ${company}`,
    `Sector:   ${sector}`,
    ``,
    `Mensaje:`,
    message,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0b0b0d;background:#ffffff;">
      <div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#7a7a85;margin-bottom:8px;">ISMIND.AI · nueva solicitud</div>
      <h1 style="font-size:22px;font-weight:600;letter-spacing:-0.02em;margin:0 0 20px;">${escapeHtml(subject)}</h1>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;color:#7a7a85;width:110px;">Nombre</td><td style="padding:8px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;color:#7a7a85;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#0b0b0d;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#7a7a85;">Empresa</td><td style="padding:8px 0;">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:8px 0;color:#7a7a85;">Sector</td><td style="padding:8px 0;">${escapeHtml(sector)}</td></tr>
      </table>
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #ececf0;">
        <div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#7a7a85;margin-bottom:8px;">Mensaje</div>
        <div style="font-size:14px;line-height:1.55;white-space:pre-wrap;">${escapeHtml(message)}</div>
      </div>
      <div style="margin-top:32px;font-size:11px;color:#9a9aa3;">Enviado desde el formulario de ismindai.es</div>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error("Resend error", res.status, data);
      return json(
        { error: "No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos." },
        502,
      );
    }
    return json({ ok: true, id: (data as { id?: string })?.id ?? null });
  } catch (err) {
    console.error("Contact form send failed", err);
    return json({ error: "Error inesperado al enviar el mensaje." }, 500);
  }
}
