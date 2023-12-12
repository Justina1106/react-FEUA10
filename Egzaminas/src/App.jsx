import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
      setCurrentForm(formName);
  }

  return ( 
      <div className="container">
        <div className="App">
          <img src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg" alt="Logo" />
        {
          currentForm === "login" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} /> 
        }
        
      </div>
      </div>

  );
};

export default App;
