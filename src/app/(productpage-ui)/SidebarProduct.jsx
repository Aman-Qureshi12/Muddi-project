import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products } from "../Constants/Constant";

const SidebarProduct = () => {
  return (
    <div>
      {products.map((product) => (
        <div className="bg-offwhite " key={product.id}>
          <Accordion type="single" collapsible className="py-2 px-10">
            <AccordionItem value={product.value}>
              <AccordionTrigger>{product.mainCategory}</AccordionTrigger>
              <AccordionContent>{product.firstType}</AccordionContent>
              <AccordionContent>{product.secondType}</AccordionContent>
              <AccordionContent>{product.thirdType}</AccordionContent>
              <AccordionContent>{product.fourthType}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default SidebarProduct;
