import * as types from '../constants/user.constants';
const initialState = {
  user: null,
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default userReducer;
