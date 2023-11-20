import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";
import { FaRegSun, FaRegMoon } from "react-icons/fa";



import "./Header.scss";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="top-header">
      <nav>
      <div className="links">
        <img src="https://fitnetfood.lt/wp-content/uploads/2019/11/subalansuotas-maistas-i-namus-fitnetfood.lt-logo-120x128.png" width={75} alt="Logo" />
        <Link to="/">Pradžia</Link>
        <Link to="/">Maisto rinkiniai</Link>
        <Link to="/">Meniu šiai savaitei</Link>
        <Link to="/">Planų kainos</Link>
        <Link to="/cart">Krepšelis</Link>
        <Link to="/new">Naujas mitybos planas</Link>
        </div>
        <Button onClick={toggleTheme}>
          {isDarkMode ? <FaRegSun /> : <FaRegMoon />}
        </Button>
      </nav>
    </header>
  );
};

export default Header;