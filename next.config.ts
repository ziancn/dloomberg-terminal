import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages 兼容
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // 局域网设备可访问 dev server
  allowedDevOrigins: [
    "localhost:3000",
    "192.168.0.*",
    "192.168.0.243",
  ],

  // Disable minification for Turbopack
  experimental: {
    turbopackMinify: false,
  },
};

export default nextConfig;
