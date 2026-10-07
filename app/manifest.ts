import type { MetadataRoute } from "next";

import { brand } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brand.name} — ${brand.tagline}`,
    short_name: brand.name,
    description:
      "Erstian builds practical software for businesses and everyday users.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#07070a",
    theme_color: "#07070a",
    lang: "en",
    dir: "ltr",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}