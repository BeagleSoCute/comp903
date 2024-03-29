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

// Child Component
const ChildComponent = React.memo(({ onClick }) => {
  // const handleOnClick = () => {
  //   onClick((pre) => pre+1);
  // }

  console.log("Child Component Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const App = () => {
  const [count, setCount] = useState(0);

  // Define callback function within Parent Component
  const handleClick = useCallback(() => {
    setCount((pre) => pre + 1);
    // console.log('count call')
  }, [count]);

  console.log("Parent Component Rendered");

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      {/* Render multiple Child Components */}
      {[...Array(50000)].map((_, index) => (
        <ChildComponent
          key={index}
          // onClick={setCount}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default App;
