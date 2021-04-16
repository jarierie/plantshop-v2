import { ADD_TO_CART } from "../actionString/ADD_TO_CART";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
