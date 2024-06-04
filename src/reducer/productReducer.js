import * as types from '../constants/product.constants';
const initialState = {
  products: [],
  createProductError: null,
  getProductError: null,
  deleteProductError: null,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCT_GET_SUCCESS:
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
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case types.PRODUCT_CREATE_FAIL:
      return {
        ...state,
        createProductError: action.payload,
      };
    case types.PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        products: state.products.filter((p) => p.sku !== action.payload),
      };
    case types.PRODUCT_DELETE_FAIL:
      return {
        ...state,
        deleteProductError: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
