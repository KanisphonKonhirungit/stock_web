import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withdrawProduct, deleteProduct, fetchProducts } from '../components/action';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched products:", products);
  }, [products]);
  
  const handleWithdraw = (productId, quantity) => {
    dispatch(withdrawProduct(productId, quantity));
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  if (!Array.isArray(products) || products.length === 0) {
        return (
          <div className="flex justify-center items-center m-5">
            <p className="text-lg font-semibold text-gray-700">No products available.</p>
          </div>
        );
      }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Product List</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">Price: ${product.price}</p>
              </div>
              <span className="text-lg text-blue-500">{product.quantity} in stock</span>
              <button
                onClick={() => handleWithdraw(product.id, 1)} // เบิก 1 ชิ้น
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Withdraw
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)} // เบิก 1 ชิ้น
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
