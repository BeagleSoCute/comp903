import React from "react";
import Button from "../share-components/Button";

const DeleteProductButton = ({ onDelete }) => {
  return <Button onClick={onDelete}>Delete</Button>;
};

export default DeleteProductButton;
