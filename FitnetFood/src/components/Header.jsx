import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="top-header">
      <nav>
       
        <img src="https://fitnetfood.lt/wp-content/uploads/2019/11/subalansuotas-maistas-i-namus-fitnetfood.lt-logo-120x128.png" width={75} alt="Logo" />
        <Link to="/">Pradžia</Link>
        <Link to="/">Maisto rinkiniai</Link>
        <Link to="/">Meniu šiai savaitei</Link>
        <Link to="/">Planų kainos</Link>
        <Link to="/cart">Krepšelis</Link>
        <Link to="/new">Naujas mitybos planas</Link>
       
      </nav>
    </header>
  );
};

export default Header;