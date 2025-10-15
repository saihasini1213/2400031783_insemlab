import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/courses" className={({isActive}) => isActive ? "active" : ""}>Courses</NavLink>
      <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
    </nav>
  );
}

export default Navbar;