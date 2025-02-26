import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../src/components/ProductList";
import AddProduct from "../src/components/AddProduct";
import ProductLogPage from "../src/components/ProductLogPage"; // นำเข้า ProductLogPage

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<AddProduct />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product-logs" element={<ProductLogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
