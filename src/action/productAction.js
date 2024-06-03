import api from '../utils/api';
import * as types from '../constants/product.constants';
import { toast } from 'react-toastify';
import { commonUiActions } from './commonUiAction';

const getProductList = (query) => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_GET_REQUEST });
    const response = await api.get('/product');
    console.log('response', response);
    dispatch({ type: types.PRODUCT_GET_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.PRODUCT_GET_FAIL, payload: err });
    dispatch(commonUiActions.showToastMessage(err, 'error'));
    console.error(err);
  }
};
const getProductDetail = (id) => async (dispatch) => {};

const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_CREATE_REQUEST });
    const response = await api.post('/product', formData);
    console.log('response', response);
    dispatch({ type: types.PRODUCT_CREATE_SUCCESS, payload: response.data });
    dispatch(commonUiActions.showToastMessage('creating a new product succeed!', 'success'));
  } catch (err) {
    dispatch({ type: types.PRODUCT_CREATE_FAIL, payload: err });
    dispatch(commonUiActions.showToastMessage(err, 'error'));
    console.error(err);
  }
};
const deleteProduct = (id) => async (dispatch) => {};

const editProduct = (formData, id) => async (dispatch) => {};

export const productActions = {
  getProductList,
  createProduct,
  deleteProduct,
  editProduct,
  getProductDetail,
};
