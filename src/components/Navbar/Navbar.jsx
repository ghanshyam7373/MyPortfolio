import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" srcSet="" className="myLogo" />
      </div>
      <ul className={`routes ${isNavOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={`navlink ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`navlink ${activeLink === "about" ? "active" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`navlink ${activeLink === "projects" ? "active" : ""}`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </Link>
        </li>
      </ul>
      <div className="toggleGroup">
        <input
          type="checkbox"
          name="toggleNav"
          id="toggleNav"
          checked={isNavOpen}
          onChange={toggleNav}
        />
        <label htmlFor="toggleNav">
          <i className="fa-solid fa-bars-staggered navIcon" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
