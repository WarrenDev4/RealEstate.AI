import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import MainContent from './pages/LandingPage/MainContent';
import Register from './pages/RegisterPage/Register'; 
import Login from './pages/LoginPage/Login'; 
import Home from './pages/MainPage/Home';
import Trends from './pages/MainPage/Trends'; 
import Neighborhoods from './pages/MainPage/Neighborhoods';
import Forecasting from './pages/MainPage/Forecasting'; 
import Investments from './pages/MainPage/Recommendations/InvestmentOpportunities';
import TopNeighborhoods from './pages/MainPage/Recommendations/TopNeighborhoods';
import RisingValues from './pages/MainPage/Recommendations/RisingValues';
import { AuthProvider } from './context/AuthContext'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/neighborhoods" element={<Neighborhoods />} />
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/investment-opportunities" element={<Investments />} />
          <Route path="/top-neighborhoods" element={<TopNeighborhoods />} />
          <Route path="/rising-values" element={<RisingValues />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
