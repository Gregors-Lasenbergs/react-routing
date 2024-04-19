import logo from '/Users/gregorslasenbergs/WebDev/Homeworks/react-routing/src/assets/square-movie-logo-template-design_316488-683.avif'
import {Link} from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
      <nav>
          <img src={logo} className="brand-logo" alt="Logo"/>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/movies">Movies</Link></li>
      </nav>
  );
}

export default NavBar;