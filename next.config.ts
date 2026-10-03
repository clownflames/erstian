import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Photography is hotlinked from the Unsplash CDN and listed in
       lib/images.ts. `search` is deliberately left open: Unsplash needs its own
       sizing parameters on the src and Next matches that field as an exact
       string, so pinning it would break every photo. Only the host and the
       /photo-<id> path shape are fixed, and no user input reaches the
       optimiser. */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-*",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;