import React from "react";
import ProductDetails from "../grandchild-components/ProductDetails";

const ProductList = ({ products }) => {
  return (
    <div className="product-lists border-solid border-4 border-gray-700 px-32 py-10  ">
    <p className="font-bold text-center">Product Lists</p>
      {products.map((item, index) => {
        return( <div key={index} className="my-5"><ProductDetails details={item} /> </div>)
      })}
    </div>
  );
};

export default ProductList;
