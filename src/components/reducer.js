// const initialState = {
//     products: [],
//   };
  
//  // src/reducers/productReducer.js

const initialState = {
  products: [], // กำหนดค่าตั้งต้นของ products เป็น array ว่าง
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload, // รับข้อมูลที่ได้จาก API มาตั้งเป็น products
      };
    default:
      return state;
  }
};

export default productReducer;
