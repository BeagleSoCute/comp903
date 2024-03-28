import React from "react";
import DeleteProductButton from "../great-grandchild-components/DeleteProductButton";
import Button from "../share-components/Button";
const ProductDetails = ({ details, onDelete, 
  onShowMessage
 }) => {

  // const handleShowMessage = (id) => {
  //   console.log('handleShowMessage')
  // }


  return (
    <div className="product-details">
      <div className="flex gap-10 items-center">
        {/* <span>Product ID:</span>
        {details.id}
        <span>Name:</span>
        {details.name} <span> Description:</span>
        {details.description} <span>Price:</span>
        {details.price} */}
        <Button
          onClick={
            // handleShowMessage
            onShowMessage
          }
        >
          Show Message
        </Button>
        {/* <DeleteProductButton onDelete={() => onDelete(details.id)} /> */}
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
