import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  },
  basePath: '/showcase-github',
  trailingSlash: true,
};

export default nextConfig;
