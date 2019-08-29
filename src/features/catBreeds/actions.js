import { FETCH_CATS_LIST, FETCH_BREED_BY_ID } from './types';

export const getCatsList = () => ({
  type: FETCH_CATS_LIST.request
});

export const receiveCatsList = payload => ({
  type: FETCH_CATS_LIST.success,
  data: payload
});

export const receiveCatsListError = () => ({
  type: FETCH_CATS_LIST.failure
});

export const getBreedByIdRequest = () => ({
  type: FETCH_BREED_BY_ID.request
});

export const getBreedByIdSuccess = payload => ({
  type: FETCH_BREED_BY_ID.success,
  data: payload
});

export const getBreedByIdFailure = () => ({
  type: FETCH_BREED_BY_ID.failure
});
