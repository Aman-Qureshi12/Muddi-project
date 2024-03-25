import React from "react";
import { productGrid } from "../Constants/Constant";
import Image from "next/image";
const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6 ">
      {productGrid.map((product) => (
        <div key={product.id}>
          <div>
            <Image
              width={300}
              height={300}
              src={product.image}
              alt={product.alt}
              className=" object-cover shadow-lg rounded-md md:w-full md:h-full "
            />
          </div>
          <div className="bg-offwhite px-4 py-2 rounded-bl-md rounded-br-md ">
            <p className="text-newgold font-semibold">{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
