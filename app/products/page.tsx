import type { Metadata } from "next";

import { ProductsPage } from "@/components/site/products-page";
import { internbird } from "@/lib/content";
import { productsPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: productsPage.standfirst,
  path: "/products",
  keywords: [
    "Erstian products",
    internbird.name,
    "internship platform",
    "internship opportunities",
    "career opportunities",
    "business software",
    "productivity tools",
  ],
});

export default function Products() {
  return <ProductsPage />;
}
