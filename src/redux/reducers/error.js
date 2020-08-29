import { SET_ERROR } from "../contants/ActionTypes";

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case SET_ERROR:
      if (action.payload.length > 0) {
        return action.payload;
      } else return "Error, You must import into input!";

    default:
      return state;
  }
};

export default errorReducer;
