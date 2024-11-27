import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  //   console.log(products);
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
      {products.map((product) => (
        <Product key={Math.random()} product={product} />
      ))}
    </div>
  );
};

export default Products;
