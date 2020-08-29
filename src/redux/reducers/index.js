import inputReducer from "./input";
import itemsReducer from "./items";
import errorReducer from "./error";

import { combineReducers } from "redux";

const reducer = combineReducers({
  input: inputReducer,
  error: errorReducer,
  items: itemsReducer
});

export default reducer;
