import registration from "./components/registration";
import newAccount from "./components/newAccount";

const App = () => {
  return (
    <div className="App">
      
    <div style={{ padding: 20 }}>
      <registration />
      <newAccount />
    </div>
    </div>
  );
};

export default App;