import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Páginas de teste (aprovação do cliente): fora do Google também pelo cabeçalho HTTP.
  async headers() {
    return [
      {
        source: "/v2/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
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
