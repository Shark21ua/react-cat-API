import { createReducer } from '../utils';
import { FETCH_CATS_LIST, FETCH_BREED_BY_ID } from './types';

const initialState = {
  currentBreed: {},
  catsListData: [],
  isFetching: false,
  isSingleItemFetching: false,
  isError: false
};

const ACTION_HANDLERS = {
  [FETCH_CATS_LIST.request]: state => ({ ...state, isFetching: true, catsListData: [], isError: false }),
  [FETCH_CATS_LIST.success]: (state, action) => ({ ...state, isFetching: false, catsListData: action.data, isError: false }),
  [FETCH_CATS_LIST.failure]: state => ({ ...state, isFetching: false, isError: true }),
  [FETCH_BREED_BY_ID.request]: state => ({ ...state, isSingleItemFetching: true, currentBreed: {}, isError: false }),
  [FETCH_BREED_BY_ID.success]: (state, action) => ({ ...state, isSingleItemFetching: false, currentBreed: action.data, isError: false }),
  [FETCH_BREED_BY_ID.failure]: state => ({ ...state, isSingleItemFetching: false, isError: true })
};

const reducers = createReducer(initialState, ACTION_HANDLERS);

export default reducers;
