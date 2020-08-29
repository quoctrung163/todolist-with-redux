import { HANDLE_CHANGE } from "../contants/ActionTypes";

const inputReducer = (state = "", action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return action.payload;
    default:
      return state;
  }
};

export default inputReducer;
