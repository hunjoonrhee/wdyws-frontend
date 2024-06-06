import api from '../utils/api';
import * as types from '../constants/cart.constants';
import { commonUiActions } from '../action/commonUiAction';
const addToCart =
  ({ productId, size }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.ADD_TO_CART_REQUEST });
      const response = await api.post('/cart', { productId, size });
      dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: response.data });
      dispatch(commonUiActions.showToastMessage('successfully added!', 'success'));
      dispatch(getCartList());
    } catch (err) {
      dispatch({ type: types.ADD_TO_CART_FAIL, payload: err });
      dispatch(commonUiActions.showToastMessage(err, 'error'));
      console.error(err);
    }
  };

const getCartList = () => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');
    dispatch({ type: types.GET_CART_LIST_REQUEST });
    const response = await api.get('/cart');
    console.log(response);
    dispatch({ type: types.GET_CART_LIST_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.GET_CART_LIST_FAIL, payload: err });
    dispatch(commonUiActions.showToastMessage(err, 'error'));
    console.error(err);
  }
};
const deleteCartItem = (id) => async (dispatch) => {};

const updateQty = (id, value) => async (dispatch) => {};
const getCartQty = () => async (dispatch) => {};
export const cartActions = {
  addToCart,
  getCartList,
  deleteCartItem,
  updateQty,
  getCartQty,
};
