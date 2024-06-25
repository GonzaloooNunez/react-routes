import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
