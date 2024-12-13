import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Navbar = () => {

const Home = () => <div>Home Page</div>;
const MarketTrends = () => <div>Market Trends Page</div>;
const PropertyValuations = () => <div>Property Valuations Page</div>;
const NeighborhoodAnalysis = () => <div>Neighborhood Analysis Page</div>;
const InvestmentForecasting = () => <div>Investment Forecasting Page</div>;
const ComparableSales = () => <div>Comparable Sales Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;


  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">RealEstate.AI</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/market-trends" className="hover:underline">Market Trends</Link></li>
          <li><Link to="/property-valuations" className="hover:underline">Property Valuations</Link></li>
          <li><Link to="/neighborhood-analysis" className="hover:underline">Neighborhood Analysis</Link></li>
          <li><Link to="/investment-forecasting" className="hover:underline">Investment Forecasting</Link></li>
          <li><Link to="/comparable-sales" className="hover:underline">Comparable Sales</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

