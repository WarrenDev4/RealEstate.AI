import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './pages/LandingPage/MainContent';
import Register from './pages/RegisterPage/Register'; 
import Login from './pages/LoginPage/Login'; 
import Home from './pages/MainPage/Home'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
