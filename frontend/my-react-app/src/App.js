import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-trends" element={<MarketTrends />} />
          <Route path="/property-valuations" element={<PropertyValuations />} />
          <Route path="/neighborhood-analysis" element={<NeighborhoodAnalysis />} />
          <Route path="/investment-forecasting" element={<InvestmentForecasting />} />
          <Route path="/comparable-sales" element={<ComparableSales />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;