import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";


const App = () => {



  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Products />} />
          <Route path="/" element={<ShoppingCart />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;