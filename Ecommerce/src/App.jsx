import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";


function App() {
  
  return (
    
      <div className="App">
       
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        
       
      </div>
        
  );
};

export default App;
