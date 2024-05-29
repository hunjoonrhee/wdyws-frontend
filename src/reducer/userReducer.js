import * as types from '../constants/user.constants';
const initialState = {
  user: null,
  logInError: null,
  registerError: null,
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
        logInError: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case types.REGISTER_USER_FAIL:
      return {
        ...state,
        registerError: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
