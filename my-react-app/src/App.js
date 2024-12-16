import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trends from './pages/Trends';
import Properties from './pages/Properties';
import Neighborhoods from './pages/Neighborhoods';
import Investments from './pages/Investments';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market-trends" element={<Trends />} />
          <Route path="/property-valuations" element={<Properties />} />
          <Route path="/neighborhood-analysis" element={<Neighborhoods />} />
          <Route path="/investment-forecasting" element={<Investments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;