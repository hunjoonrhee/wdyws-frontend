import * as types from '../constants/product.constants';
const initialState = {
  products: [],
  createProductError: null,
  getProductError: null,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCT_GET_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };
    case types.PRODUCT_GET_FAIL:
      return {
        ...state,
        getProductError: action.payload,
      };
    case types.PRODUCT_CREATE_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case types.PRODUCT_CREATE_FAIL:
      return {
        ...state,
        createProductError: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
