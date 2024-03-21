import React, { useState, useCallback, useMemo } from "react";
import Menu from "./child-components/Menu";
import ProductLists from "./child-components/ProductLists";
import AddingProductSection from "./child-components/AddingProductSection";
import SortingSection from "./child-components/SortingSection";
import ShowTotalPrice from "./child-components/ShowTotalPrice";
import Button from "./share-components/Button";
import PurchaseHistoryLogs from "./child-components/PurchaseHistoryLogs";
import { generateProduct } from "./services/product.service";

const App = () => {
  const [products, setProducts] = useState([]);
  const [defaultProduct, setDefaultProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [currentTab, setCurrentTab] = useState("productPage");
  const [historyLogs, setHistoryLogs] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const [displayForm, setDisplayForm] = useState(false);

  //-----------------SECTION Heavy computational functions-----------------
  const generateProducts = useCallback(() => {
    const thisProducts = [];
    for (let i = 0; i < 40000; i++) {
      thisProducts.push(generateProduct());
    }
    setDefaultProducts([...products, ...thisProducts]);
    setProducts([...products, ...thisProducts]);
  }, [products]);
  const handleSort = (type) => {
    // const sortedData = [...products].sort((a, b) => {
    //   const nameA = a.name.toUpperCase();
    //   const nameB = b.name.toUpperCase();
    //   if (type === "asc") {
    //     return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    //   } else {
    //     return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
    //   }
    // })
    setSortOrder(type);
    // setProducts(sortedData);
  };

  const handleTotalPrice = useCallback(() => {
    let sum = 0;
    let random = 0;
    // Introduce a deliberate delay
    for (let i = 0; i <= 100000000; i++) {
      random += Math.random();
    }
    for (let i = 0; i <= products.length; i++) {
      if (products[i]) {
        const result = products[i].price + sum;
        sum = result;
      }
    }
    return sum;
  }, [products]);

  const handleSortedProducts = () => {
    // Simulate an expensive computation
    let expensiveComputation = 0;
    for (let i = 0; i < 100000000; i++) {
      expensiveComputation += Math.random();
    }

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

  // const sortedProducts = useMemo(() => handleSortedProducts(), [products]);
  const sortedProducts = handleSortedProducts()

  // const totalPrice = useMemo(() =>handleTotalPrice(),[products])
  const totalPrice = handleTotalPrice();
  const handleDeleteProduct = (id) => {
    //Delete when products over 10,000
    const removedProduct = products.filter((item) => item.id !== id);
    setProducts(removedProduct);
  };
  //----------------------------------------------------END----------------------------------------------------
  //-----------------SECTION Light computational functions-----------------
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
  //----------------------------------------------------END----------------------------------------------------
  //-----------------SECTION Frequent updates states-----------------
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
  //----------------------------------------------------END----------------------------------------------------
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
