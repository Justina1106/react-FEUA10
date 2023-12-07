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
        <Link to="/main">Pagrindinis</Link>
        <Link to="/aboutUs">Apie mus</Link>
        <Link to="/news">Naujienos</Link>
        <Link to="/services">Paslaugos</Link>
        <Link to="/completedWorks">Produkcija</Link>
        <Link to="/contacts">Kontaktai</Link>
      </nav>
    </header>
  );
};

export default Header;