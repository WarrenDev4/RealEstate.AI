import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./LandingPageNav.css";

const LandingPageNav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="landingnavbar">
      <a href="/" className="landingnavbar-brand">
        <img src="/images/RealEstate.AI Logo Black.png" alt="RealEsate.AI Black" class="realestateblack" height="55" width="245"></img>
      </a>
      <div className={`landingnavbar-links ${menuOpen ? "active" : ""}`}>
        <a href="/sign-up">Sign Up</a>
        <a href="/login">Login</a>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default LandingPageNav;