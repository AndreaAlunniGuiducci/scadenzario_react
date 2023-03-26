import { USER_LOGGED_SUCCESS, ADD_PRODUCT } from "./costance";

const INIT_STATE = {
  user: localStorage.getItem('user') === null ? [] : JSON.parse(localStorage.getItem('user')),
  product: {}
};

export const myReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_SUCCESS:
      return { ...state, user: action.payload };
    case ADD_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
