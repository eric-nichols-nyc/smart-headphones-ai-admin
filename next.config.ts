import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverMinification: true,
  },
  env: {
    PORT: "3002",
  },
  server: {
    port: 3002,
  },
};

export default nextConfig;
