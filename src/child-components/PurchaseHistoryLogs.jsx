import React from "react";
import ControlHistoryLogsAction from "../grandchild-components/ControlHistoryLogsAction";
const PurchaseHistoryLogs = ({ logs, onStart, onStop }) => {
  return (
    <div className="product-lists border-solid border-4 border-gray-700 px-32 py-5  ">
      <div className="flex justify-between mb-10 items-center">
        <div></div>
        <p className="font-bold text-center">Purchase history logs</p>
        <ControlHistoryLogsAction onStart={onStart} onStop={onStop}  />
      </div>
      {logs.map((item, index) => {
        return (
          <div key={index} className="my-5">
            <div className="product-details">
              <div className="flex gap-10 items-center">
                <span>Product ID:</span>
                {item.id}
                <span>Name:</span>
                {item.name} <span> Description:</span>
                {item.description} <span>Price:</span>
                {item.price}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PurchaseHistoryLogs;
