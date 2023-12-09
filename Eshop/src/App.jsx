import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shopContext";
import LoginForm from "./components/LoginForm";
import LoginFormFormik from "./components/LoginFormFormik";
import RegisterFormFormik from "./components/RegisterFormFormik";

function App() {
  
  return (
    
      <div className="App">
        <ShopContextProvider>
          <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />}/>
              <Route path="/" element={<LoginForm />} />
              <Route path="/login-formik" element={<LoginFormFormik />} />
              <Route path="/register-formik" element={<RegisterFormFormik />} />
            </Routes>  
          </ShopContextProvider>         
      </div>
         
  );
};

export default App;
