import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  outputFileTracingExcludes: {
    '*': ['.next/trace']
  }
};

export default nextConfig;
