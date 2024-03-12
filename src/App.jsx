import React, { useState } from "react";
import Menu from "./child-components/Menu";
import ProductLists from "./child-components/ProductLists";
import AddingProductSection from "./child-components/AddingProductSection";
const products = [
  { id: 0, name: "Product1", price: 5, description: "sadsd" },
  { id: 1, name: "Product2", price: 2, description: "gasdsadasad" },
  { id: 2, name: "Product3", price: 56, description: "wfawxsx" },
  { id: 3, name: "Product4", price: 12, description: "sadsa" },
];
const App = () => {
  return (
    <div className="app">
      <Menu />
      <div className="content-wrapper flex items-center justify-center  ">
        <div className="grid  grid-cols-1">
          <div className="grid justify-end">
            <AddingProductSection />
          </div>
          <ProductLists products={products} />
        </div>
      </div>
    </div>
  );
};

export default App;
