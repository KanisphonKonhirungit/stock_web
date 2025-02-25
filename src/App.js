import React from 'react';
import ProductList from '../src/components/ProductList';
import AddProduct from '../src/components/AddProduct';

function App() {
  return (
    <div className="container mx-auto">
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default App;
