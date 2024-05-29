import api from '../utils/api';
import * as types from '../constants/user.constants';
import { commonUiActions } from './commonUiAction';
import * as commonTypes from '../constants/commonUI.constants';
const loginWithToken = () => async (dispatch) => {};
const loginWithEmail = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    const response = await api.post('/user/login', payload);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
    dispatch(commonUiActions.showToastMessage('Log in succeed! Happy shopping!', 'success'));
    sessionStorage.setItem('token', response.data.token);
  } catch (err) {
    dispatch({ type: types.LOGIN_FAIL, payload: err });
    console.error(err);
  }
};
const logout = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOGOUT });
    sessionStorage.removeItem('token');
  } catch (err) {
    console.error(err);
  }
};

const loginWithGoogle = (token) => async (dispatch) => {};

const registerUser =
  ({ email, name, password }, navigate) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.REGISTER_USER_REQUEST });
      const response = await api.post('/user', { email, name, password });
      dispatch({ type: types.REGISTER_USER_SUCCESS });
      dispatch(commonUiActions.showToastMessage('Sign up succeed!', 'success'));
      navigate('/login');
    } catch (err) {
      dispatch({ type: types.REGISTER_USER_FAIL, payload: err });
      console.error(err);
    }
  };
export const userActions = {
  loginWithToken,
  loginWithEmail,
  logout,
  loginWithGoogle,
  registerUser,
};
