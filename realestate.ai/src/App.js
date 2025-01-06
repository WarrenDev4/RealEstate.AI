import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MainContent from './components/LandingPage/MainContent';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

export default App;