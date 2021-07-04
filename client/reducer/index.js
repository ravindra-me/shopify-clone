import { combineReducers } from 'redux';
import products from './product';
import collection from './collection';
import customer from "./user";

const rootReducer = combineReducers({
	products,
	collection,
	customer,
});

export default rootReducer;
