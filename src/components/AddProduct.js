// src/components/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../components/action';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newProduct = { name, quantity, price, dateAdded: new Date() };
    axios.post('http://localhost:5000/api/inventory/add', newProduct)
      .then(response => {
        dispatch(addProduct(response.data));
        setName('');
        setQuantity(0);
        setPrice(0);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">เพิ่มสินค้า</h1>
      <input
        type="text"
        placeholder="ชื่อสินค้า"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        placeholder="จำนวน"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        placeholder="ราคา"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-2">
        เพิ่มสินค้า
      </button>
    </div>
  );
};

export default AddProduct;
