import React from "react";
import DeleteProductButton from "../great-grandchild-components/DeleteProductButton";

const ProductDetails = ({ details }) => {
  return (
    <div className="product-details">
      <div className="flex gap-10 items-center">
        <span>Product ID:</span>
        {details.id}
        <span>Name:</span>
        {details.name} <span> Description:</span>
        {details.description} <span>Price:</span>
        {details.price}
        <DeleteProductButton/>
      </div>
    </div>
  );
};

export default ProductDetails;
