
import React from 'react';
import './ProductList.css';

const products = [
  {
    id: 1,
    name: 'Čili Con Carne sriuba',
    description: 'Pagardinta „Čederio“sūriu',
    price: 2.80,
    image: 'https://cdn-dserve.imgix.net/ab8a3c3e-adbf-4e12-9cc9-044bc8424d0e.jpg?h=472&w=440', 
  },
  {
    id: 2,
    name: 'Lėtai keptas kiaulienos sprandinės kepsnys',
    description: 'Patiekiamas su burokėlių pagardu',
    price: 5.90,
    image: 'https://cdn-dserve.imgix.net/860fcdee-e755-4d07-8c7d-4d25036877bb.jpg?h=472&w=440', 
  },
  {
    id: 3,
    name: 'Traškūs cepelinai su mėsa',
    description: 'Patiekiami su spirgučių padažu arba grietine',
    price: 5.50,
    image: 'https://cdn-dserve.imgix.net/04608014-0385-499c-a264-c11f2721b6d9.jpg?h=472&w=440', 
  },
  {
    id: 4,
    name: 'BBQ kiaulienos šonkauliai',
    description: 'Patiekiami su BBQ padažu',
    price: 6.50,
    image: 'https://cdn-dserve.imgix.net/90fa3313-40f1-468b-9553-6501e578257a.jpg?h=472&w=440', 
  },
  {
    id: 5,
    name: 'Nicos salotos su šparaginėmis pupelėmis ir tunu',
    description: 'Patiekiamos su Provance žolelių padažu',
    price: 4.90,
    image: 'https://cdn-dserve.imgix.net/cad9a9ac-3050-4564-8c33-48a1e81d3ce4.jpg?h=472&w=440', 
  },

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
