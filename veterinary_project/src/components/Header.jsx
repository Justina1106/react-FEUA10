import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="container-pet">
        <img className="logo" src="Logo place.jpg" width={150} alt="vetbee Logo"/>
       
        <Link className="header-links" to="/pets">Pets</Link>
        <Link className="header-links" to="/medications">Medications</Link>
       
      </nav>
    </header>
  );
};

export default Header;