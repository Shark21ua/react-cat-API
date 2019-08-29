import { SIGN_IN, LOG_OUT, CHECK_AUTHORIZATION } from './types';

export const signInSuccess = () => ({
  type: SIGN_IN.success
});

export const signInFailure = payload => ({
  type: SIGN_IN.failure,
  body: payload
});

export const logOutSuccess = () => ({
  type: LOG_OUT.success
});

export const logOutFailure = payload => ({
  type: LOG_OUT.failure,
  body: payload
});

export const checkAuthRequest = () => ({
  type: CHECK_AUTHORIZATION.request
});

export const checkAuthSuccess = () => ({
  type: CHECK_AUTHORIZATION.success
});

export const checkAuthFailure = () => ({
  type: CHECK_AUTHORIZATION.failure
});
