import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './pages/LandingPage/MainContent';
import Register from './pages/RegisterPage/Register'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/register" element={<Register />} />  
      </Routes>
    </Router>
  );
}

export default App;
