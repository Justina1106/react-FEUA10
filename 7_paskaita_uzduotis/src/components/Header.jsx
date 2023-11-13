import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          gap: 16,
          backgroundColor: "green",
          color: "white",
          textDecoration: "none",
          padding: 32,
          fontSize: 20,
        }}
      >
        <img src="https://www.farmandfleet.com/uploads/brand-pages/105/mainhead-20190417090738@2x.jpg" width={150} alt="Stihl Logo"/>
        <Link to="/main">Main</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/completedWorks">Completed Works</Link>
        <Link to="/imagine">Imagine</Link>
        <Link to="/news">News</Link>
        <Link to="/services">Services</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;