import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      canvas: false, // Ignore canvas for client-side
    };
    return config;
  },
};

export default nextConfig;
