import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 'localhost', '127.0.2.2'],
};

export default nextConfig;
