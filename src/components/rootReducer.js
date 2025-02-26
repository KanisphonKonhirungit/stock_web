
import { combineReducers } from 'redux';
import productReducer from './reducer.js';

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
