import React from "react";

const ProductDetails = ({ details }) => {
  return (
    <div className="product-details">
      <p className="flex gap-10">
        <span>Product ID:</span>
        {details.id}
        <span>Name:</span>
        {details.name} <span> Description:</span>
        {details.description} <span>Price:</span>
        {details.price}
      </p>
    </div>
  );
};

export default ProductDetails;
