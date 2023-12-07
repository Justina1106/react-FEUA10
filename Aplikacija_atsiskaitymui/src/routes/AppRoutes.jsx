import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { PATHS } from "./consts";
import AboutUs from "./pages/AboutUs";
import CompletedWorks from "./pages/CompletedWorks";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Services from "./pages/Services";
import Main from "./pages/Main";


const AppRoutes = () => {
  return (
    <>
     
      <Routes>
      <Route path="/main" element={<Main />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/completedWorks" element={<CompletedWorks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path={PATHS.Login} element={<Login />} />
        <Route path={PATHS.Register} element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoutes;