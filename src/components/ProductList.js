// import React from 'react';

// const ProductList = ({ products = [] }) => {
//   if (!Array.isArray(products) || products.length === 0) {
//     return (
//       <div className="flex justify-center items-center m-5">
//         <p className="text-lg font-semibold text-gray-700">No products available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-4 mt-5">
//       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Product List</h2>
//       <ul className="space-y-4">
//         {products.map((product) => (
//           <li key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//                 <p className="text-sm text-gray-500">Price: ${product.price}</p>
//               </div>
//               <span className="text-lg text-blue-500">${product.quantity} in stock</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

import React from 'react';
import { useDispatch } from 'react-redux';
import { withdrawProduct } from '../components/action';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleWithdraw = (productId, quantity) => {
    dispatch(withdrawProduct(productId, quantity));
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
