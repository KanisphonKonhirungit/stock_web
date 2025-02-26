import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  withdrawProduct,
  deleteProduct,
  fetchProducts,
} from "../components/action";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"; 

Modal.setAppElement("#root");

const ProductList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [isConfirmWithdrawOpen, setIsConfirmWithdrawOpen] = useState(false);
    const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [withdrawQuantity, setWithdrawQuantity] = useState(1);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  
    const handleWithdraw = (productId, name , quantity) => {
      setCurrentProduct({ id: productId, name: name, quantity: quantity });
      setWithdrawQuantity(1);
      setIsConfirmWithdrawOpen(true);
    };
  
    const handleDeleteProduct = (productId) => {
      setCurrentProduct({ id: productId });
      setIsConfirmDeleteOpen(true);
    };
  
    const handleNavigateAddProduct = () => {
      navigate("/");
    };
  
    const handleNavigateProductLog = () => {
      navigate("/product-logs");
    };
  
    const confirmWithdraw = () => {
      dispatch(withdrawProduct(currentProduct.id, withdrawQuantity));
      setIsConfirmWithdrawOpen(false);
      setIsSuccessModalOpen(true);
    };
  
    const confirmDelete = () => {
      dispatch(deleteProduct(currentProduct.id));
      setIsConfirmDeleteOpen(false);
      setIsSuccessModalOpen(true);
    };
  
    const cancelAction = () => {
      setIsConfirmWithdrawOpen(false);
      setIsConfirmDeleteOpen(false);
    };
  
    const handleQuantityChange = (event) => {
      setWithdrawQuantity(event.target.value);
    };
  
    if (!Array.isArray(products) || products.length === 0) {
      return (
        <div className="flex justify-center items-center m-5">
          <p className="text-lg font-semibold text-gray-700">
            No products available.
          </p>
        </div>
      );
    }
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center justify-between mt-5 ">
          <button
            onClick={handleNavigateAddProduct}
            className="bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          >
            + Add Product
          </button>
          <button
            onClick={handleNavigateProductLog}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            View Log
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Product List
        </h2>
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700">Price: ${product.price}</p>
                  <span className="text-lg text-blue-500">
                    {product.quantity} in stock
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => handleWithdraw(product.id, product.name, product.quantity)}
                    className="bg-amber-500 text-white px-2 py-2 mx-1 rounded-md"
                  >
                    Withdraw
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
  
        {/* Success Modal */}
        <Modal
          isOpen={isSuccessModalOpen}
          onRequestClose={() => setIsSuccessModalOpen(false)}
          contentLabel="Success Modal"
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg focus:outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-500">Success!</h2>
            <p className="text-lg mt-2 text-gray-700">The action was successful.</p>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mt-5"
            >
              Close
            </button>
          </div>
        </Modal>
  
        {/* Confirm Withdraw Modal */}
        <Modal
          isOpen={isConfirmWithdrawOpen}
          onRequestClose={cancelAction}
          contentLabel="Confirm Withdraw"
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg focus:outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Confirm Withdraw</h2>
            <p className="mt-2 text-lg text-gray-700">
              Are you sure you want to withdraw <br/>
              <b>{currentProduct?.name} </b>?
            </p>
            <div className="mt-4">
              <label htmlFor="withdrawQuantity" className="block text-left text-gray-700">
                Enter Quantity:
              </label>
              <input
                type="number"
                id="withdrawQuantity"
                value={withdrawQuantity}
                min="1"
                max={currentProduct?.quantity}
                onChange={handleQuantityChange}
                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mt-4 flex justify-around">
              <button
                onClick={confirmWithdraw}
                className="bg-transparent hover:bg-red-600 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt-5"
              >
                Yes
              </button>
              <button
                onClick={cancelAction}
                className="py-2 px-4 mt-5 bg-red-400 text-white rounded-md hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
  
        {/* Confirm Delete Modal */}
        <Modal
          isOpen={isConfirmDeleteOpen}
          onRequestClose={cancelAction}
          contentLabel="Confirm Delete"
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg focus:outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-500">Confirm Delete</h2>
            <p className="mt-2 text-lg text-gray-700">Are you sure you want to delete this product?</p>
            <div className="mt-4 flex justify-around">
              <button
                onClick={confirmDelete}
                className="bg-transparent hover:bg-red-600 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt-5"
              >
                Yes
              </button>
              <button
                onClick={cancelAction}
                className="py-2 px-4 mt-5 bg-red-400 text-white rounded-md hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  };

export default ProductList;
