import React, { useCallback, useState } from "react";
import DeleteProductButton from "../great-grandchild-components/DeleteProductButton";
import Button from "../share-components/Button"
const ProductDetails = ({ details,
   handleChangePrice
    }) => {
  const [price, setIncreasePrice] = useState(details.price);
  //This function is for scenario 1 on the third hypothesis
  // const handleChangePrice = () => {
  //   setIncreasePrice((pre) => pre + 1);
  // };
  return (
    <div className="product-details">
      <div className="flex gap-10 items-center">
        <span>Product ID:</span>
        {details.id}
        <span>Name:</span>
        {details.name} <span> Description:</span>
        {details.description} <span>Price:</span>
        {price}
        <Button onClick={handleChangePrice} >Increase price</Button>
        {/* <DeleteProductButton onDelete={() => onDelete(details.id)} /> */}
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
