import React from 'react';
import './MainContent.css';
import LoginButton from '../../components/Login/LoginButton';
import RegisterButton from '../../components/Register/RegisterButton/RegisterButton';

{/* Landing Page */}
const MainContent = () => {
  return (
    <section class="main-content">
  <img src="/images/Landing Page Background_enhanced.jpg" alt="Background" class="background" />
  
  <div class="header">
    <a href="/">
      <img src="/images/RealEstate.AI Logo Black.png" alt="RealEstate.AI Black" class="realestate-logo" />
    </a>
  
  </div>

  <div class="content-wrapper">
    <div class="text-section">
      <h2 class="headline">Welcome to RealEstate.AI</h2>
      <p class="description">
        RealEstate.AI was supposed to be an AI-driven real estate tool designed to analyze data that provides
        insights into market trends, neighborhood analysis, investment forecasting, and comparable sales data. However, due to 
        unforseen circumstances over the past year I wasn't able do all the other work I wanted to do on it. But I did alot of 
        frontend and UI work with React.js. So please browse the application to view the frontend work I did for it!

        - Warren
      </p>
      <LoginButton />
    </div>
  </div>
</section>
  );
};

export default MainContent;

