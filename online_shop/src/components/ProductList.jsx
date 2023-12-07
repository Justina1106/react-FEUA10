// src/components/ProductList.js
import React from 'react';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: 19.99,
    image: 'https://placekitten.com/200/300', // replace with your image URL
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    price: 29.99,
    image: 'https://placekitten.com/201/301', // replace with your image URL
  },
  // Add more products as needed
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
