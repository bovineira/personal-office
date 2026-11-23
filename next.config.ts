import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A página de teste aprovada virou a /sala-reuniao (23/11/2026): o link antigo leva para ela.
  async redirects() {
    return [{ source: "/v2/:path*", destination: "/sala-reuniao", permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
