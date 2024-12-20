import React from 'react';
import "./LandingPageNav.css";

const LandingPageNav = () => {
  return (
    <nav className="landingnavbar">
      <a href="/" className="landingnavbar-brand">
        <img
          src="/images/RealEstate.AI Logo Black.png"
          alt="RealEstate.AI Black"
          className="realestateblack"
          height="55"
          width="245"
        />
      </a>
    </nav>
  );
};

export default LandingPageNav;
