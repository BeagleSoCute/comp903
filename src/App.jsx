import React, { useState, useCallback, useMemo } from "react";
import Menu from "./child-components/Menu";
import ProductLists from "./child-components/ProductLists";
import AddingProductSection from "./child-components/AddingProductSection";
import SortingSection from "./child-components/SortingSection";
import ShowTotalPrice from "./child-components/ShowTotalPrice";
import Button from "./share-components/Button";
import PurchaseHistoryLogs from "./child-components/PurchaseHistoryLogs";
import {
  generateProduct,
  lightweightGenProduct,
} from "./services/product.service";
import { generateExpensiveComputationalFunc } from "./services/common.service";

const App = () => {
  const [products, setProducts] = useState([]);
  const [defaultProduct, setDefaultProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [currentTab, setCurrentTab] = useState("productPage");
  const [historyLogs, setHistoryLogs] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);

  const generateProducts = () => {
    const thisProducts = [];
    for (let i = 0; i < 10; i++) {
      thisProducts.push(lightweightGenProduct());
    }
    setDefaultProducts([...products, ...thisProducts]);
    setProducts([...products, ...thisProducts]);
  };
  const handleSort = (type) => {
    setSortOrder(type);
  };

  const handleTotalPrice = () => {
    // generateExpensiveComputationalFunc();
    let sum = 0;
    for (let i = 0; i <= products.length; i++) {
      if (products[i]) {
        const result = products[i].price + sum;
        sum = result;
      }
    }
    return sum;
  };

  const handleSortedProducts = () => {
    // generateExpensiveComputationalFunc();
    if (!sortOrder) return products;
    return [...products].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return sortOrder === "asc"
        ? nameA < nameB
          ? -1
          : 1
        : nameA > nameB
        ? -1
        : 1;
    });
  };


  const handleDeleteProduct = (id) => {
    //Delete when products over 10,000
    const removedProduct = products.filter((item) => item.id !== id);
    setProducts(removedProduct);
  };


  const handleAddProduct = (newProduct) => {
    setDefaultProducts([newProduct, ...products]);
    setProducts([newProduct, ...products]);
  };

  const handleDeleteAllProduct = () => {
    setProducts([]);
  };

  const handleClearSort = () => {
    setSortOrder(null);
    setProducts(defaultProduct);
  };
  const handleOpenForm = (value) => {
    setDisplayForm(value);
  };
  const handleTotalProducts = () => {
    return products.length;
  };

  const totalProducts = handleTotalProducts();

  const startGeneratingHistoryLogs = () => {
    const id = setInterval(() => {
      const newProduct = generateProduct();
      setHistoryLogs((prevProducts) => [...prevProducts, newProduct]);
    }, 1000);
    setIntervalId(id);
  };
  const stopGeneratingHistoryLogs = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  //----------------------------------------------------Test Section----------------------------------------------------

  // test hypothesis 2 => prove negative effect of applying useMemo on lightweight function
  const handleShowTotalDelete = () => {
    return 'Helloworld';
  };
  //50000000
  const numInstances = 10; // Adjust the number of instances as needed
  const instances = Array.from({ length: numInstances }, () => handleShowTotalDelete());
console.log('instances',instances)
  // const memoizedInstances = useMemo(() => {
  //   return instances.map((instance) => instance);
  // }, [instances]);
  // const memoizedInstances = () => {
  //   return instances.map((instance) => instance);
  // };
  
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
                <p>The number of products: {totalProducts}</p>
                {/* <ShowTotalPrice totalPrice={totalPrice} /> */}
              </div>
              <AddingProductSection
                displayForm={displayForm}
                onAdd={handleAddProduct}
                onRandomAdd={generateProducts}
                onDisplayForm={handleOpenForm}
              />
              <ProductLists
                // products={sortedProducts}
                products={products}
                onDelete={handleDeleteProduct}
                onDeleteAll={handleDeleteAllProduct}
              />
            </>
          ) : (
            <PurchaseHistoryLogs
              logs={historyLogs}
              onStart={startGeneratingHistoryLogs}
              onStop={stopGeneratingHistoryLogs}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
