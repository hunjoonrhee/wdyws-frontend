import * as types from '../constants/order.constants';

const initialState = {
  orderNumber: null,
  createOrderError: null,
  orderList: [],
  myOrderList: [],
  getOrderListError: null,
  getMyOrderListError: null,
  totalPageNum: 0,
  pageSize: 0,
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ORDER_LIST_SUCCESS:
      return {
        ...state,
        orderList: action.payload.response.data,
        pageSize: action.payload.response.pageSize,
        totalPageNum: action.payload.response.totalPageNum,
      };
    case types.GET_ORDER_LIST_FAIL:
      return {
        ...state,
        getOrderListError: action.payload,
      };
    case types.GET_MY_ORDER_LIST_SUCCESS:
      return {
        ...state,
        myOrderList: action.payload,
      };
    case types.GET_MY_ORDER_LIST_FAIL:
      return {
        ...state,
        getMyOrderListError: action.payload,
      };
    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orderNumber: action.payload.orderNum,
      };
    case types.CREATE_ORDER_FAIL:
      return {
        ...state,
        createOrderError: action.payload,
      };
    default:
      return state;
  }
}
export default orderReducer;
