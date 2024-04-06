import React from "react";
import ProductDetails from "../grandchild-components/ProductDetails";
import DeleteAllProductButton from "../grandchild-components/DeleteAllProductButton";

const ProductList = ({ products, onDelete, onDeleteAll, 
  handleChangePrice 
}) => {
  return (
    <div className="product-lists border-solid border-4 border-gray-700 px-32 py-5  ">
      <div className="flex justify-between mb-10 items-center">
        <div></div>
        <p className="font-bold text-center">Product Lists</p>
        <DeleteAllProductButton onDelete={onDeleteAll} />
      </div>
      {products.map((item, index) => {
        return (
          <div key={index} className="my-5">
            <ProductDetails details={item}  
            handleChangePrice={handleChangePrice} 
            
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
