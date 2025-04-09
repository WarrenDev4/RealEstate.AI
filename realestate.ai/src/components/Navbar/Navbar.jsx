import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaHome, FaChartLine, FaBuilding, FaBullseye, FaBell,} from "react-icons/fa";
import "./Navbar.css";

{/* Component for the Navbar */}
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/images/RealEstate.AI Logo White.png" alt="RealEstate.AI Logo" className="realestatelogo" height="50" width="210" />
      </Link>

      <div className={`navbar-links`}>
        <Link to="/home" className="navbar-link">
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/trends" className="navbar-link">
          <FaChartLine className="icon" /> Trends
        </Link>
        <Link to="/neighborhoods" className="navbar-link">
          <FaBuilding className="icon" /> Neighborhoods
        </Link>
        <Link to="/forecasting" className="navbar-link">
          <FaBullseye className="icon" /> Forecasting
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
