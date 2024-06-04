import * as types from '../constants/product.constants';
const initialState = {
  products: [],
  product: {},
  createProductError: null,
  getProductError: null,
  deleteProductError: null,
  editProductError: null,
  getProductDetailError: null,
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
    case types.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case types.GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        getProductDetailError: action.payload,
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
    case types.PRODUCT_EDIT_SUCCESS:
      let editedProduct = { ...state.selectedProduct, ...action.payload };
      let newProducts = state.products.map((product) => (product.sku === editedProduct.sku ? editedProduct : product));
      return {
        ...state,
        products: newProducts,
      };
    case types.PRODUCT_EDIT_FAIL:
      return {
        ...state,
        editProductError: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
