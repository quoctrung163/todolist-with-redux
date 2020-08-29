import React from "react";

import TodoTitle from "../components/TodoTitle";
import TodoMain from "../components/TodoMain";
import TodoItem from "../components/TodoItem";

import {
  handleChange,
  removeItem,
  setError,
  addItem
} from "../redux/actions/index";

import { connect } from "react-redux";

const TodoList = ({
  items,
  input,
  error,
  addItem,
  setError,
  removeItem,
  handleChange
}) => {
  // const [input, setInput] = useState("");
  // const [error, setError] = useState("");
  // const [items, setItems] = useState([]);

  // const addItem = () => {
  //   if (input.length > 0) {
  //     setItems((prevItems) => {
  //       return [...prevItems, input];
  //     });
  //     setError("");
  //   } else {
  //     setError("Error, You must import into input!");
  //   }
  //   setInput("");
  // };

  // const removeItem = (id) => {
  //   setItems((prevData) => {
  //     return prevData.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // };

  // const handleChange = (event) => {
  //   const result = setInput(event.target.value);
  //   return result;
  // };

  const multiHanleChange = (value) => {
    handleChange(value);
    setError(value);
  };

  console.log(input);
  console.log("err" + error);

  return (
    <div className="todolist">
      <TodoTitle />
      <TodoMain
        onHandleChange={(event) => multiHanleChange(event.target.value)}
        handleClick={addItem}
        input={input}
      >
        Add
      </TodoMain>
      <div className="items">
        <ul>
          {items.map((item, index) => (
            <TodoItem
              keyItem={index}
              id={index}
              item={item}
              onRemoveItem={removeItem}
              key={index}
            />
          ))}
        </ul>
        {error.length > 0 && error === "Error, You must import into input!" ? (
          <div className="error-empty heading">{error}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
  error: state.error,
  input: state.input
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (valueInput) => dispatch(handleChange(valueInput)),
  removeItem: (id) => dispatch(removeItem(id)),
  setError: (err) => dispatch(setError(err)),
  addItem: (id) => dispatch(addItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
