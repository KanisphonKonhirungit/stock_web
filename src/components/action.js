export const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

// export const addProduct = (product) => ({
//   type: "ADD_PRODUCT",
//   payload: product,
// });

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5031/api/products");

    if (!response.ok) {
      throw new Error('Failed to fetch products, server returned: ' + response.status);
    }
    const data = await response.json();

    dispatch(setProducts(data));
  } catch (error) {
    console.error('Error fetching products:', error);
    alert('Error fetching products: ' + error.message);
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5031/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: 'ADD_PRODUCT',
        payload: data,
      });
    } else {
      alert('Error adding product');
    }

    dispatch(fetchProducts())

  } catch (error) {
    console.error('Error adding product:', error);
    alert('Error adding product');
  }
};

export const withdrawProduct = (productId, quantity) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5031/api/products/${productId}`);
    if (!response.ok) {
      const errorMessage = await response.text(); // รับข้อความผิดพลาดจากเซิร์ฟเวอร์
      alert(`Error fetching product: ${errorMessage}`);
      return;
    }

    const product = await response.json();
    
    if (!product) {
      alert('Product not found');
      return;
    }

    product.quantity -= quantity;

    const updateResponse = await fetch(`http://localhost:5031/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!updateResponse.ok) {
      const errorMessage = await updateResponse.text();
      alert(`Error updating product: ${errorMessage}`);
      return;
    }

    dispatch(fetchProducts())

  } catch (error) {
    console.error('Error withdrawing product:', error);
    alert('Error withdrawing product');
  }
};



export const deleteProduct = (productId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5031/api/products/${productId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      dispatch({
        type: 'DELETE_PRODUCT',
        payload: productId,
      });
    } else {
      alert('Error deleting product');
    }

    dispatch(fetchProducts())

  } catch (error) {
    console.error('Error deleting product:', error);
    alert('Error deleting product');
  }
};

