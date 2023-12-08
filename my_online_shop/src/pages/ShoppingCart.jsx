
import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
