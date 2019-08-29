import { createReducer } from '../utils';
import { SIGN_IN, LOG_OUT, CHECK_AUTHORIZATION } from './types';

const initialState = {
  isLogged: false,
  isFetching: false
};

const ACTION_HANDLERS = {
  [SIGN_IN.success]: state => ({ ...state, isLogged: true }),
  [LOG_OUT.success]: state => ({ ...state, isLogged: false }),
  [CHECK_AUTHORIZATION.request]: state => ({ ...state, isLogged: false, isFetching: true }),
  [CHECK_AUTHORIZATION.success]: state => ({ ...state, isLogged: true, isFetching: false }),
  [CHECK_AUTHORIZATION.failure]: state => ({ ...state, isLogged: false, isFetching: false }),
};

const reducers = createReducer(initialState, ACTION_HANDLERS);

export default reducers;
