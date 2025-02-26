import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './components/rootReducer';

const store = createStore(
  rootReducer, // ใช้ rootReducer ที่รวม reducer ของ products
  applyMiddleware(thunk) // สำหรับจัดการกับ async actions
);

export default store;