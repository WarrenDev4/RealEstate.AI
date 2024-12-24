import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Trends from './pages/Trends';
import Properties from './pages/Properties';
import Neighborhoods from './pages/Neighborhoods';
import Investments from './pages/Investments';
import logo from './logo.svg';
import './App.css';
import LandingPageNav from './components/LandingPageNav';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data
  const slides = [
    { title: "Market Trends", content: <Trends /> },
    { title: "Properties", content: <Properties /> },
    { title: "Neighborhoods", content: <Neighborhoods /> },
    { title: "Investments", content: <Investments /> },
  ];

  // Handle next and previous slide navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <Router>
      <LandingPageNav />
      <div className="landing-page">
        <h1>RealEstate.AI</h1>

        {/* Slideshow container */}
        <div className="slideshow">
          <button onClick={prevSlide} className="arrow left">{"<"}</button>

          <div className="slide-content">
            <h2>{slides[currentSlide].title}</h2>
            {slides[currentSlide].content}
          </div>

          <button onClick={nextSlide} className="arrow right">{">"}</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
