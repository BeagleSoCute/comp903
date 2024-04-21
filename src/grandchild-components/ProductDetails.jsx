import React, { useMemo } from "react";
import DeleteProductButton from "../great-grandchild-components/DeleteProductButton";

const ProductDetails = ({ details, onDelete }) => {
  //test second hypothesis here
  const handleShowDiscount = () => {
    return details.price - 20;
  };
  // const discount =  useMemo(() => handleShowDiscount(),[details]) 
  const discount = handleShowDiscount();
  return (
    <div className="product-details">
      <div className="flex gap-10 items-center">
        <span>Product ID:</span>
        {details.id}
        <span>Name:</span>
        {details.name} <span> Description:</span>
        {details.description} <span>Price:</span>
        {details.price}
        <span>Discount</span>
        {discount}
        <DeleteProductButton onDelete={() => onDelete(details.id)} />
      </div>
    </div>
  );
};

export default ProductDetails;
