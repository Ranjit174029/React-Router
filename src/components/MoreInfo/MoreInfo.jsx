import React from "react";
import { useLoaderData } from "react-router-dom";

const MoreInfo = () => {
  const moreInfo = useLoaderData();
  const { title, image, price } = moreInfo;

  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{price}</p>
    </div>
  );
};

export default MoreInfo;
