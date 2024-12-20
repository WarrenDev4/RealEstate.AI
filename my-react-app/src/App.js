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
import LandingPageNav from './components/LandingPageNav';

function App() {
  return (
    <Router>
      <LandingPageNav />
      <img src="/images/Home Logo.jpg" alt="Home" className="House" />
    </Router>
  );
};

export default App;