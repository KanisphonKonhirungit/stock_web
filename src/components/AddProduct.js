import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../components/action';


const AddProduct = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newProduct = { name, quantity, price, dateAdded: new Date() };
    dispatch(addProduct(newProduct));
    setName('');
    setQuantity(0);
    setPrice(0);
  };

  return (
    <div className="max-w-3xl mx-auto mt-5 p-6 bg-white rounded-lg shadow-md ">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Product</h1>
      <div className="space-y-4">
        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Product Name
        </label>
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Quantity
        </label>
        <input
          type="number"
          placeholder="Quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Price
        </label>
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

