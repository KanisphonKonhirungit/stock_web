// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ใช้ react-dom/client แทน react-dom
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// สร้าง root โดยใช้ createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// เรนเดอร์แอปพลิเคชันด้วย createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
