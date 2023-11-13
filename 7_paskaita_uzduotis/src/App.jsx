import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import CompletedWorks from "./pages/CompletedWorks";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Services from "./pages/Services";
import Main from "./pages/Main";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/completedWorks" element={<CompletedWorks />} />
        <Route path="/contacts" element={<Contacts />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;