import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});

export default store;
