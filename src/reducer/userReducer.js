import * as types from '../constants/user.constants';
const initialState = {
  user: null,
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  return state;
}

export default userReducer;
