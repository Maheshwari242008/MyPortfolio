import React from 'react';
import './navbar.css';
import logo from '../../assets/logoo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="deskTopMenu">
        <Link to="/" className="desktopMenuListiItem">
          Home
        </Link>

        <Link to="/about" className="desktopMenuListiItem">
          About
        </Link>

        <Link to="/skills" className="desktopMenuListiItem">
          Skills
        </Link>

        <Link to="/projects" className="desktopMenuListiItem">
          Projects
        </Link>
      </div>

      <Link to="/contact" className="deskTopMenuBtn">
        <img
            src={contactImg}
            alt="Contact"
            className="deskTopMenuImg"
        />
          Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;