import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { componentTagger } from "lovable-tagger";

// Dev-only plugin: serve POST /api/contact by invoking the Vercel-style handler.
// In production this same logic runs as a Netlify Function or Vercel Edge Function.
function devContactApi(): Plugin {
  return {
    name: "dev-contact-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        try {
          if (req.method !== "POST") {
            res.statusCode = 405;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Método no permitido." }));
            return;
          }

          // Read body
          const chunks: Buffer[] = [];
          for await (const chunk of req) chunks.push(chunk as Buffer);
          const bodyText = Buffer.concat(chunks).toString("utf8");

          // Build a Web Request and call the same handler used in production
          const url = `http://localhost${req.url ?? "/api/contact"}`;
          const headers = new Headers();
          for (const [k, v] of Object.entries(req.headers)) {
            if (typeof v === "string") headers.set(k, v);
            else if (Array.isArray(v)) headers.set(k, v.join(","));
          }
          const request = new Request(url, {
            method: "POST",
            headers,
            body: bodyText,
          });

          const mod = await server.ssrLoadModule("/api/contact.ts");
          const handler = mod.default as (req: Request) => Promise<Response>;
          const response = await handler(request);

          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          const text = await response.text();
          res.end(text);
        } catch (err) {
          console.error("[dev-contact-api] error:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              error:
                "Error en el servidor de desarrollo al procesar /api/contact. Revisa la consola.",
            }),
          );
        }
      });
    },
  };
}

// SPA build — outputs static dist/ with index.html for Netlify/Vercel.
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    devContactApi(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
}));
