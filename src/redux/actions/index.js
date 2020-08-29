import * as Type from "../contants/ActionTypes";

export const addItem = (item) => ({
  type: Type.ADD_ITEM,
  payload: item
});

export const handleChange = (handle) => ({
  type: Type.HANDLE_CHANGE,
  payload: handle
});

export const removeItem = (item) => ({
  type: Type.REMOVE_ITEM,
  payload: item
});

export const setError = (err) => ({
  type: Type.SET_ERROR,
  payload: err
});
