import React, {useMemo} from "react";
import DeleteProductButton from "../great-grandchild-components/DeleteProductButton";

const ProductDetails = ({ details, onDelete }) => {
  //   const memoizedInstances = () => {
  //     const data = details
  //   return 'hello world'
  // }

//   const memoizedInstances = () => {
//     const data = details
//   return 'hello world'
// }
// const test = useMemo(() => memoizedInstances(),[details])
// const test = memoizedInstances()
  return (
    <div className="product-details">
      <div className="flex gap-10 items-center">
        {test}
        <span>Product ID:</span>
        {details.id}
        <span>Name:</span>
        {details.name} <span> Description:</span>
        {details.description} <span>Price:</span>
        {details.price}
        <DeleteProductButton  onDelete={() => onDelete(details.id)}/>
      </div>
    </div>
  );
};

export default ProductDetails;
