import React from "react";
import Button from "../share-components/Button";

const ControlHistoryLogsAction = ({ onClick }) => {
  return (
    <div className="flex gap-x-2">
      <Button onClick={() => onClick("start")}>Start</Button>
      <Button onClick={() => onClick("stop")}>Stop</Button>
    </div>
  );
};

export default ControlHistoryLogsAction;
