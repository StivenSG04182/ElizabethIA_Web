import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'img.clerk.com',
      // otros dominios que uses para imágenes
    ],
  },
  /* config options here */
};

export default nextConfig;
