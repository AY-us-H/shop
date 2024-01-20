// src/components/ProductList.js
import React from 'react';
// import Card from './Card';
import Cards from './Cards';

const ProductList = ({ products }) => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
