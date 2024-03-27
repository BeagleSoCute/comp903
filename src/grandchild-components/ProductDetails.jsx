import React, { useMemo } from "react";
import DeleteProductButton from "../great-grandchild-components/DeleteProductButton";
import Button from "../share-components/Button";

const ProductDetails = ({ details, onDelete }) => {
  const shandleSold = (action=false) => {
    return action? "Have been sold": "Still avaliable";
  };
  const numInstances = 1000000; // Adjust the number of instances as needed
  const instances = Array.from({ length: numInstances }, () => shandleSold());
console.log('instances',instances)
  const memoryBefore = window.performance.memory;

  // const memoizedInstances = useMemo(() => {
  //   return instances.map(instance => instance);
  // }, [instances]);

  const memoizedInstances = () => {
    return instances.map(instance => instance);
  }

  // const isSold = useMemo(() => shandleSold(),[details]);
  const isSold = shandleSold();
const test = memoizedInstances;
  const memoryAfter = window.performance.memory;

  console.log('memoryBefore',memoryBefore)
  console.log('memoryAfter',memoryAfter)

  return (
    <div className="product-details">
      <div className="flex gap-10 items-center">
        <span>Product ID:</span>
        {details.id}
        <span>Name:</span>
        {details.name} <span> Description:</span>
        {details.description} <span>Price:</span>
        {details.price}
        <span>Is sold:</span> {isSold? isSold : 'Not sold'}
        <Button onClick={() => shandleSold}>Sold</Button>
        <DeleteProductButton onDelete={() => onDelete(details.id)} />
      </div>
    </div>
  );
};

export default ProductDetails;
