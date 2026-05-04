import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/NEXORA",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

