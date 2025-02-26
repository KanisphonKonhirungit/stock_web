// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import productReducer from './reducer.js'; // นำเข้าจากไฟล์ที่สร้างไว้

const rootReducer = combineReducers({
  products: productReducer, // กำหนดให้ products ใช้ reducer นี้
});

export default rootReducer;
