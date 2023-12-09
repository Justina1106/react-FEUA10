import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";


const Navbar = () => {
    return ( 
    <div className="navbar">
        <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-YQl34CiVAwf5WYc4PKTvwvQYqAxIWttJT-2fBZzIA&s" alt="Shop Logo" />
        </div>
        <div className="links">
        <Link to="/login-formik"> Login </Link>
        <Link to="/register-formik"> Registration </Link>
        <Link to="/"> Shop </Link>
            <Link to="/cart"> 
            <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
    );
};
export default Navbar;