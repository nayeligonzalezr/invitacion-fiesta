import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// In Vercel, the host is inserted at BUILD TIME into the Open Graph tags,
// so WhatsApp receives an absolute preview-image URL without running JavaScript.
export default defineConfig({
  plugins: [
    react(),
    {
      name: "og-absolute-url",
      transformIndexHtml(html) {
        let url = process.env.VITE_PUBLIC_SITE_URL ||
          process.env.VERCEL_PROJECT_PRODUCTION_URL ||
          process.env.VERCEL_URL ||
          "http://localhost:4173";
        url = /^https?:\/\//i.test(url) ? url : `https://${url}`;
        return html.replaceAll("__SITE_URL__", url.replace(/\/$/, ""));
      },
    },
  ],
});
