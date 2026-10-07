import type { Metadata } from "next";

import { ProductsPage } from "@/components/site/products-page";
import { productsPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description: productsPage.standfirst,
  path: "/products",
});

export default function Products() {
  return <ProductsPage />;
}
