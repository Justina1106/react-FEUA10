import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import CompletedWorks from "./pages/CompletedWorks";
import Contacts from "./pages/Contacts";
import Imagine from "./pages/Image";
import News from "./pages/News";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/completedWorks" element={<CompletedWorks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/imagine" element={<Imagine />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;