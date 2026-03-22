import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaHome,
  FaChartLine,
  FaBuilding,
  FaBullseye,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img
          src="/images/RealEstate.AI Logo White.png"
          alt="RealEstate.AI Logo"
          height="50"
        />
      </Link>

      {/* Hamburger Button */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/home" className="navbar-link" onClick={() => setMenuOpen(false)}>
          <FaHome /> Home
        </Link>
        <Link to="/trends" className="navbar-link" onClick={() => setMenuOpen(false)}>
          <FaChartLine /> Trends
        </Link>
        <Link to="/neighborhoods" className="navbar-link" onClick={() => setMenuOpen(false)}>
          <FaBuilding /> Neighborhoods
        </Link>
        <Link to="/forecasting" className="navbar-link" onClick={() => setMenuOpen(false)}>
          <FaBullseye /> Forecasting
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/profile" className="profile-icon">
          <FaUserCircle size={30} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
