import React from "react";

const TodoItem = ({ item, id, onRemoveItem }) => {
  return <li onClick={() => onRemoveItem(id)}>{item}</li>;
};

export default TodoItem;
