import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";



const App = () => {
  return (
    <>
      <Header />

      <UserProvider>
      <AppRoutes />
    </UserProvider>
    
     
      <Footer />
    </>
  );
};

export default App;