import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../components/action";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"; 

Modal.setAppElement("#root");

const AddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = () => {
    const newProduct = { name, quantity, price, dateAdded: new Date() };
    dispatch(addProduct(newProduct));
    setName("");
    setQuantity(0);
    setPrice(0);
    setIsSuccessModalOpen(true)
  };

  const handleNavigateProduct = () => {
    navigate("/products");
  };

  const handleNavigateProductLog = () => {
    navigate("/product-logs");
  };

  return (
    <div className="max-w-3xl mx-auto mt-5 p-6">
      <div className="flex items-center justify-between mt-5 ">
        <button
          onClick={handleNavigateProduct}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          View Product
        </button>

        <button
          onClick={handleNavigateProductLog}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          View Log
        </button>
      </div>
      <div className="max-w-3xl mx-auto mt-5 p-6 bg-white rounded-lg shadow-md ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Product
        </h1>
        <div className="space-y-4">
          <label
            htmlFor="price"
            className="block text-sm/6 font-medium text-gray-900"
          >
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
          <label
            htmlFor="price"
            className="block text-sm/6 font-medium text-gray-900"
          >
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
          <label
            htmlFor="price"
            className="block text-sm/6 font-medium text-gray-900"
          >
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
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={() => setIsSuccessModalOpen(false)}
        contentLabel="Success Modal"
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg focus:outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-500">Success!</h2>
          <p className="text-lg mt-2 text-gray-700">
            The action was successful.
          </p>
          <button
            onClick={() => setIsSuccessModalOpen(false)}
            className="bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-5"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddProduct;
