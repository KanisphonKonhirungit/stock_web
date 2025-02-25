// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../components/action";
import React from "react";

// import axios from "axios";

const ProductList = ({ products }) => {
  if (!Array.isArray(products)) {
    return <p>No products available.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">รายการสินค้า</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border-b py-2">
            {product.name} - {product.quantity} ชิ้น
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ProductList;
