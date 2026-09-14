import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Las páginas antiguas ahora son secciones de la home.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/clients", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/disclaimer", destination: "/legal-notice", permanent: true },
    ];
  },
};

export default nextConfig;
