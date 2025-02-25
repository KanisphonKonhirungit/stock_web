export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });
  
  export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
  });

  export const withdrawProduct = (productId, quantity) => async (dispatch) => {
    try {
      const response = await fetch(`/api/withdraw`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        dispatch({
          type: 'WITHDRAW_PRODUCT',
          payload: { productId, quantity: data.remainingStock },
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error withdrawing product:', error);
      alert('Error withdrawing product');
    }
  };