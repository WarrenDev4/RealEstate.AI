import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <section class="main-content">
  <img src="/images/Landing Page Background_enhanced.jpg" alt="Background" class="background" />
  
  <div class="header">
    <a href="/">
      <img src="/images/RealEstate.AI Logo Black.png" alt="RealEstate.AI Black" class="realestate-logo" />
    </a>
    <a href="#login" class="login-button">Log In</a>
  </div>

  <div class="content-wrapper">
    <div class="text-section">
      <h2 class="headline">Welcome to RealEstate.AI</h2>
      <p class="description">
        RealEstate.AI is an AI-driven real estate tool designed to analyze data that provides
        insights into market trends, property valuations, neighborhood analysis, investment forecasting, and comparable sales data.
      </p>
      <a href="#register" class="register-button">Register Here</a>
    </div>
  </div>
</section>
  );
};

export default MainContent;

