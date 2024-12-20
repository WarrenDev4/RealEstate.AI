import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./LandingPageNav.css";

const LandingPageNav = () => {

  return (
    <nav className="landingnavbar">
      <a href="/" className="landingnavbar-brand">
        <img src="/images/RealEstate.AI Logo Black.png" alt="RealEsate.AI Black" class="realestateblack" height="55" width="245"></img>
      </a>
    </nav>
  );
};

export default LandingPageNav;