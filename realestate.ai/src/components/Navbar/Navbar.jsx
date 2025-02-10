import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon
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
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/market-trends" className="navbar-link">Trends</Link>
        <Link to="/property-valuations" className="navbar-link">Properties</Link>
        <Link to="/forecasting" className="navbar-link">Forecasting</Link>
      </div>

      <div className="navbar-right">
        <Link to="/profile" className="profile-icon">
          <FaUserCircle size={30} />
        </Link>
        <div className="menu-btn" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
