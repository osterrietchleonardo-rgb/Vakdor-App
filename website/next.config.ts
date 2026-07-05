import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent URL duplication (e.g., /page vs /page/)
  trailingSlash: false,
  // Enable image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [50, 75],
  },
  // Enable compression
  compress: true,
  // Ofertas viejas (previas a PRISMA): redirigen a la home para no perder SEO ni dejar 404.
  async redirects() {
    return [
      { source: '/inmobiliaria', destination: '/', permanent: true },
      { source: '/asesor-top', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
