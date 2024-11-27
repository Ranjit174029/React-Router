import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { category, price, description, id } = product;
  return (
    <div className="border-2 border-red-800 ">
      <h1>{category}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <Link to={`/product/${id}`}>
        <button className="bg-red-600 text-white p-2">Show Data</button>
      </Link>
    </div>
  );
};

export default Product;
