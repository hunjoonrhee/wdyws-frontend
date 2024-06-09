import api from '../utils/api';
import * as types from '../constants/order.constants';
import { cartActions } from './cartAction';
import { commonUiActions } from './commonUiAction';
import { GET_MY_ORDER_LIST_REQUEST } from '../constants/order.constants';

const createOrder = (payload, navigate) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_ORDER_REQUEST });
    const response = await api.post('/order', payload);
    dispatch({ type: types.CREATE_ORDER_SUCCESS, payload: response.data });
    dispatch(cartActions.getCartList());
    navigate('/payment/success');
  } catch (err) {
    dispatch({ type: types.CREATE_ORDER_FAIL, payload: err });
    dispatch(commonUiActions.showToastMessage(err.message, 'error'));
    navigate('/cart');
    console.error(err);
  }
};

const getOrderList = (query) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ORDER_LIST_REQUEST });
    const response = await api.get('/order', {
      params: { ...query },
    });
    dispatch({ type: types.GET_ORDER_LIST_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.GET_ORDER_LIST_FAIL, payload: err });
    dispatch(commonUiActions.showToastMessage(err.message, 'error'));
    console.error(err);
  }
};

const getMyOrderList = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_MY_ORDER_LIST_REQUEST });
    const response = await api.get('/order/me');
    dispatch({ type: types.GET_MY_ORDER_LIST_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.GET_MY_ORDER_LIST_FAIL, payload: err });
    dispatch(commonUiActions.showToastMessage(err.message, 'error'));
    console.error(err);
  }
};
const getOrder = () => async (dispatch) => {};

const updateOrder = (id, status) => async (dispatch) => {};

export const orderActions = {
  createOrder,
  getOrder,
  getOrderList,
  updateOrder,
  getMyOrderList,
};
