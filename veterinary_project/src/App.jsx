import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Medications from "./pages/Medications";
import Pets from "./pages/Pets";
import PetForm from "./pages/PetForm";
import Pet from "./pages/Pet";

const App = () => {
  return (
    <>
    <Header />
    <Routes>
    
      <Route path="/" element={<Pets />} />
      <Route path="/pets/:id" element={<Pet />} />
      <Route path="/header" element={<Header />} />
      <Route path="/medications" element={<Medications />} />
      {/* <Route path="/pets/:id/add" element={<PetLogForm />} /> */}
      <Route path="/add-pet" element={<PetForm />} />
    </Routes>
    </>
  );
};

export default App;