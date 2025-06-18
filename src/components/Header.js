import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Shastra
        </Link>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/workshops">Workshops</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Add more navigation items */}
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; 
        </div>
      </div>
    </header>
  );
};

export default Header;

