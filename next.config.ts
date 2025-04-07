import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages with custom domain
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig;
