import { itemList } from "../data/itemList";

const initialState = {
  initialItems: itemList,
  currentItems: [],
  cartItems: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NICE_ONE":
      return {
        ...state,
      };
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};
