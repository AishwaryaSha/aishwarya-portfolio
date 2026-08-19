import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  turbopack: {
    root: __dirname,
  },

  images: {
  unoptimized: true,

  remotePatterns: [
    {
      protocol: "https",
      hostname: "github-readme-stats.vercel.app",
    },
  ],
},
};

export default nextConfig;