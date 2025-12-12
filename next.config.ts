import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st2.depositphotos.com",
      },
    ],
  },
  basePath: "",
  assetPrefix: "./",
  trailingSlash: true
};

export default nextConfig;