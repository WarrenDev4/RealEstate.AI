import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaHome, FaChartLine, FaBuilding, FaBullseye, FaBell } from 'react-icons/fa'; // Import icons
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="/images/RealEstate.AI Logo White.png" alt="RealEstate.AI Logo" className="realestatelogo" height="50" width="210" />
      </Link>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-link">
          <FaHome size={20} style={{ marginRight: '5px', marginTop: '7px' }} /> Home
        </Link>
        <Link to="/market-trends" className="navbar-link">
          <FaChartLine size={20} style={{ marginRight: '5px', marginTop: '7px' }} /> Trends
        </Link>
        <Link to="/property-valuations" className="navbar-link">
          <FaBuilding size={20} style={{ marginRight: '5px', marginTop: '7px' }} /> Properties
        </Link>
        <Link to="/forecasting" className="navbar-link">
          <FaBullseye size={20} style={{ marginRight: '5px', marginTop: '7px' }} /> Forecasting
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/notifications" className="notification-icon">
          <FaBell size={24} style={{ marginRight: '10px', cursor: 'pointer', color: 'white' }} />
        </Link>
        <Link to="/profile" className="profile-icon">
          <FaUserCircle size={30} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
