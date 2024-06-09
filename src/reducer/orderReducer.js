import * as types from '../constants/order.constants';

const initialState = {
  orderNumber: null,
  createOrderError: null,
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
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
