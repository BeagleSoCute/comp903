import React from "react";
import Button from "../share-components/Button";

const DeleteAllProductButton = ({ onDelete }) => {
  return <Button onClick={() => onDelete()}>Delete All</Button>;
};

export default DeleteAllProductButton;
