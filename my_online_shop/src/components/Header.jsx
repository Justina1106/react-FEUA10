// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UGoC8YHHD8tEfu1i0cEv_GUotP470hD56K5KHU0Jdw&s" alt="Shop Logo" className="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products">ShoppingCart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
