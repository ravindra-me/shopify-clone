import { combineReducers } from 'redux';
import products from './product';
import collection from './collection';

const rootReducer = combineReducers({
  products,
  collection,
});

export default rootReducer;
