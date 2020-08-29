import { ADD_ITEM } from "../contants/ActionTypes";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default itemsReducer;
