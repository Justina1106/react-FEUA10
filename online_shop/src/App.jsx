import React, { useState } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';
import Login from './pages/Login';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <Routes>
      <div className="App">
        <Header />
        <div className="shopping-cart">
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/products"
            render={(props) => <Products {...props} addToCart={addToCart} />}
          />
          <Route
            path="/shopping-cart"
            render={(props) => (
              <ShoppingCart {...props} cart={cart} removeFromCart={removeFromCart} />
            )}
          />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Routes>
  );
};

export default App;
