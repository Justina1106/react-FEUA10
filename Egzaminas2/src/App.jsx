import React, { useState } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  const handleRegistrationSubmit = (formData) => {
  
    console.log('Registration Data:', formData);
    setIsModalOpen(false);
  };

  return (
    <div className="container">
        <div className="App">
          <img src="https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg" alt="Logo" />
          </div>
          <div className="auth-form-container">   
  <h1 className="header">Get Started</h1>
  <p className="header1">Already have an account?</p> 
  <Button className="login" onClick={handleSignUpClick}>Log In</Button>
  <div className="sign-up-btn">
  <button className="google"><img src="https://freesvg.org/img/1534129544.png" width={20} height={20} alt="logo"/>sign up</button>
  <button className="fb"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" width={20} height={20} alt="logo"/>sign up</button>
  </div>
  <h2 className="or">Or</h2>      
            </div>
      {isModalOpen && (
        <div className="modal">
          <Form>
            <RegistrationForm onSubmit={handleRegistrationSubmit} />
          </Form>
        </div>
      )}
    </div>
  );
};

export default App;
