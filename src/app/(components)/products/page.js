import ProductGrid from "@/app/(productpage-ui)/ProductGrid";
import SidebarProduct from "@/app/(productpage-ui)/SidebarProduct";
import React from "react";

export default function Products() {
  return (
    <div className="my-60 mx-14  space-x-14 flex">
      <SidebarProduct />
      <ProductGrid />
    </div>
  );
}
