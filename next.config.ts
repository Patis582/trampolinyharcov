import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/trampolinyharcov', // název vašeho GitHub repozitáře
  assetPrefix: '/trampolinyharcov',
};

export default nextConfig;
