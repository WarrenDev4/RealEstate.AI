import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img src="/images/RealEstate.AI Logo White.png" alt="RealEsate.AI Logo" class="realestatelogo" height="45" width="220"></img>
      </a>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
      <a href="/">Home</a>
        <a href="/market-trends">Trends</a>
        <a href="/property-valuations">Properties</a>
        <a href="/neighborhood-analysis">Neighborhoods</a>
        <a href="/investment-forecasting">Investments</a>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;

