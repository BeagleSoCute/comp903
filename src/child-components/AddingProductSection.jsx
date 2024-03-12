import React from "react";
import Button from "../share-components/Button";
const AddingProductSection = () => {
  return (
    <div className="grid grid-cols-2 mb-2 gap-5">
      <Button className="p-2">Add Product</Button>
      <Button className="p-2">Generate 1,000 products</Button>
    </div>
  );
};

export default AddingProductSection;
