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
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    // Ignore thread-stream test files and LICENSE
    config.module?.rules.push({
      test: /thread-stream\/.*\.(test|LICENSE|zip|sh|mjs)$/,
      loader: "ignore-loader",
    });

    // Optionally mark 'desm' as external if it causes issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        desm: false,
      };
    }

    return config;
  },
};

export default nextConfig;
