import * as types from '../constants/cart.constants';

const initialState = {
  productsInCart: [],
  cartItemCount: 0,
  addToCartError: null,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CART_LIST_SUCCESS:
      const cartItems = typeof action.payload === 'string' ? [] : action.payload.cartItems;
      return {
        ...state,
        productsInCart: cartItems,
        cartItemCount: cartItems.length,
      };
    case types.GET_CART_LIST_FAIL:
      return {
        ...state,
        addToCartError: action.payload,
      };
    case types.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    case types.ADD_TO_CART_FAIL:
      return {
        ...state,
        addToCartError: action.payload,
      };
    default:
      return state;
  }
}
export default cartReducer;
