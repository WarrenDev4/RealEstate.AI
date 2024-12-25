import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <section className="main-content">
        
      <img src="/images/Landing Page Background_enhanced.jpg" alt="Background" className="background" />
      <img src="/images/RealEstate.AI Logo Black.png" href="/" alt="RealEstate.AI Black" className="realestate-logo" />
      <div className="content-wrapper">
        <div className="text-section">
          <h2 className="headline">Welcome to RealEstate.AI</h2>
          <p className="description"> RealEstate.AI is an AI-driven tool designed to analyze real estate market data that provides 
            insights into market trends, property valuations, neighborhood analysis, investment forecasting, and comparable sales data.
          </p>
          <a href="#cta" className="cta-button">Register Here</a>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
