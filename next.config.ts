import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Las páginas antiguas ahora son secciones de la home.
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/clients", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/disclaimer", destination: "/legal-notice", permanent: true },
      // Equivalentes en espanol de las rutas antiguas.
      { source: "/es/servicios", destination: "/es#services", permanent: true },
      { source: "/es/contacto", destination: "/es#contact", permanent: true },
      { source: "/es/clientes", destination: "/es", permanent: true },
    ];
  },
};

export default nextConfig;
