import React from "react";

const TodoMain = ({ onHandleChange, handleClick, children, input }) => {
  return (
    <>
      <input type="text" onChange={onHandleChange} value={input} required />
      <button onClick={() => handleClick(input)}>{children}</button>
    </>
  );
};

export default TodoMain;
