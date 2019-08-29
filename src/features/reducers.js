import { combineReducers } from 'redux';
import catBreeds from './catBreeds/reducers';
import auth from './auth/reducers';

export default combineReducers({
  auth,
  catBreeds
});
