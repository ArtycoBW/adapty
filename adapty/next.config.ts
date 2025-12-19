import type { NextConfig } from "next";

const repo = "adapty";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? `/${repo}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repo}/` : "",
};

export default nextConfig;
