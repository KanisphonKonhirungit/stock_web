const initialState = {
    products: [],
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'WITHDRAW_PRODUCT':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.productId
              ? { ...product, quantity: action.payload.quantity }
              : product
          ),
        };
      default:
        return state;
    }
  };