import React, { useState} from "react";
import "./register.css";


const Register = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };



    return ( 
        <div className="auth-form-container"> 
          <h1 className="header">Get Started</h1>
       <p className="header1">Already have an account?</p> 
       <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Log in</button>  
       <div className="sign-up-btn">
       <button className="google"><img src="https://freesvg.org/img/1534129544.png" width={5} height={5} alt="logo"/>sign up</button>
       <button className="fb"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" width={5} height={5} alt="logo"/>sign up</button>
       </div>
       <h2>Or</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="yourname" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="Password" placeholder="*******" id="Password" name="Password" />
        <button className="submit" type="submit">Submit</button>
    </form>
      
    </div> 
    );
};
export default Register;