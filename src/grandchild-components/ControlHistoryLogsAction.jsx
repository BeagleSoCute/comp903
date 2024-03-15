import React from "react";
import Button from "../share-components/Button";

const ControlHistoryLogsAction = ({ onStart, onStop }) => {
  return (
    <div className="flex gap-x-2">
      <Button onClick={() => onStart()}>Start</Button>
      <Button onClick={() => onStop()}>Stop</Button>
    </div>
  );
};

export default ControlHistoryLogsAction;
