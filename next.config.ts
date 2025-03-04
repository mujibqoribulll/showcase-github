import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
