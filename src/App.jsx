import React, { useState, useEffect } from "react";
import Menu from "./child-components/Menu";
import ProductLists from "./child-components/ProductLists";
import AddingProductSection from "./child-components/AddingProductSection";
import SortingSection from "./child-components/SortingSection";
import ShowTotalPrice from "./child-components/ShowTotalPrice";
import Button from "./share-components/Button";
import PurchaseHistoryLogs from "./child-components/PurchaseHistoryLogs";
import { generateProduct } from "./services/product.service";
const productsEx = [
  { id: 0, name: "Product1", price: 5, description: "sadsd" },
  { id: 1, name: "Product2", price: 2, description: "gasdsadasad" },
  { id: 2, name: "Product3", price: 56, description: "wfawxsx" },
  { id: 3, name: "Product4", price: 12, description: "sadsa" },
];
const App = () => {
  const [products, setProducts] = useState([]);
  const [defaultProduct, setDefaultProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [currentTab, setCurrentTab] = useState("productPage");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPrice = () => {
    console.log(products)
    let sum = 0;
    for (let i = 0; i <= products.length; i++) {
      if(products[i]){
        const result = (products[i].price + sum);
        sum = result;
      }
 
    }
    console.log("products", products);
    console.log("sum is", sum);
    setTotalPrice(sum);
  };

  useEffect(() => {
    console.log("useEffect called");
      handleTotalPrice();
    
  }, [products]);

  const generateProducts = () => {
    const thisProducts = [];
    for (let i = 0; i < 1000; i++) {
      thisProducts.push(generateProduct());
    }
    setDefaultProducts([...products, ...thisProducts])
     setProducts([...products, ...thisProducts]);
  };

  const handleAddProduct = (newProduct) => {
    setDefaultProducts([newProduct, ...products])
     setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (id) => {
    //Might test heavy computational functionh (Hypo 1)
    const removedProduct = products.filter((item) => item.id !== id);
    setProducts(removedProduct);
  };
  const handleSort = (type) => {
    const sortedData = [...products].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (type === "asc") {
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      } else {
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      }
    });
    setSortOrder(type);
    setProducts(sortedData);
  };

  const handleDeleteAllProduct = () => {
    setProducts([]);
  };

  const handleClearSort = () => {
    setSortOrder(null)
    setProducts(defaultProduct)
  }
  return (
    <div className="app">
      <Menu />
      <div className="content-wrapper">
        <div>
          <div className="flex justify-center mt-3 mb-6">
            <Button onClick={() => setCurrentTab("productPage")}>
              Product page
            </Button>
            <Button onClick={() => setCurrentTab("historyPage")}>
              History page
            </Button>
          </div>
          {currentTab === "productPage" ? (
            <>
              <div className="flex justify-between mb-5">
                <SortingSection
                  sortOrder={sortOrder}
                  onChange={handleSort}
                  onClear={handleClearSort}
                />
                <ShowTotalPrice totalPrice={totalPrice} />
              </div>
              <AddingProductSection
                onAdd={handleAddProduct}
                onRandomAdd={generateProducts}
              />
              <ProductLists
                products={products}
                onDelete={handleDeleteProduct}
                onDeleteAll={handleDeleteAllProduct}
              />
            </>
          ) : (
            <PurchaseHistoryLogs logs={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
