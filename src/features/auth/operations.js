import axios from 'axios';
import {
  signInSuccess,
  signInFailure,
  logOutSuccess,
  logOutFailure,
  checkAuthSuccess,
  checkAuthFailure,
  checkAuthRequest
} from './actions';

const SIGN_IN_URL = '/sign_in';
const LOG_OUT = '/log_out';
const CHECK_AUTH_URL = '/check_auth';

export const signInUser = payload => async (dispatch) => {
  try {
    await axios.post(SIGN_IN_URL, payload);
    dispatch(signInSuccess());
  } catch (e) {
    dispatch(signInFailure(e.message));
  }
};

export const checkAuth = () => async (dispatch) => {
  dispatch(checkAuthRequest());

  try {
    await axios.get(CHECK_AUTH_URL);
    dispatch(checkAuthSuccess());
  } catch (e) {
    dispatch(checkAuthFailure());
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await axios.get(LOG_OUT);
    dispatch(logOutSuccess());
  } catch (e) {
    dispatch(logOutFailure());
  }
};
