import React, { useState, useCallback, useMemo, useEffect } from "react";
import Menu from "./child-components/Menu";
import ProductLists from "./child-components/ProductLists";
import AddingProductSection from "./child-components/AddingProductSection";
import SortingSection from "./child-components/SortingSection";
import ShowTotalPrice from "./child-components/ShowTotalPrice";
import Button from "./share-components/Button";
import PurchaseHistoryLogs from "./child-components/PurchaseHistoryLogs";
import { generateProduct } from "./services/product.service";
import { generateExpensiveComputationalFunc } from "./services/common.service";
const App = () => {
  const [products, setProducts] = useState([]);
  const [defaultProduct, setDefaultProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [currentTab, setCurrentTab] = useState("productPage");
  const [historyLogs, setHistoryLogs] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);
  useEffect(() => {
    const thisProducts = [];
    for (let i = 0; i < 10000; i++) {
      thisProducts.push(generateProduct());
      setProducts([...products, ...thisProducts]);
    }
  }, []);
  const generateProducts = () => {
    const thisProducts = [];
    for (let i = 0; i < 10000; i++) {
      thisProducts.push(generateProduct());
    }
    setDefaultProducts([...products, ...thisProducts]);
    setProducts([...products, ...thisProducts]);
  };
  const handleSort = (type) => {
    setSortOrder(type);
    // setProducts(sortedData);
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
    generateExpensiveComputationalFunc();
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

  const sortedProducts = useMemo(() => handleSortedProducts(), [products]);
  // const sortedProducts = handleSortedProducts();
  // const totalPrice = useMemo(() =>handleTotalPrice(),[products])
  const totalPrice = handleTotalPrice();
  //----------------------------------------Test third hypothesis-------------------------------------------------------------------

  // this scenario 2 when applying useCallback to this function and will pass it to child component (ProductDetails)
  const handleChangePrice = useCallback((setIncreasePrice) => {
    setIncreasePrice((pre) => pre + 1);
  }, []);
  //----------------------------------------End -----------------------------------------------------------------
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
                <p>The number of products: {products.length}</p>
                <ShowTotalPrice totalPrice={totalPrice} />
              </div>
              <AddingProductSection
                displayForm={displayForm}
                onAdd={handleAddProduct}
                onRandomAdd={generateProducts}
                onDisplayForm={handleOpenForm}
              />
              <ProductLists
                products={sortedProducts}
                onDelete={handleDeleteProduct}
                onDeleteAll={handleDeleteAllProduct}
                handleChangePrice={handleChangePrice}
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
