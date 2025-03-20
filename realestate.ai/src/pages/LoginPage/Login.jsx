import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';

{/* Login Page */}
const Login = () => {
  {/* Sample logic for handling form data. MySQL database logic will be added soon! */}
  const navigate = useNavigate();

  {/* Sample logic for handling form data. */}
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  {/* Sample handleChange function. */}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  {/* Sample handleSubmit function. It currently only accesses the home page for development and testing purposes for now. */}
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const isAuthenticated = true; 

    if (isAuthenticated) {
      navigate('/home'); 
    } else {
      alert('Login failed. Please check your credentials.');
    }

    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src="/images/RealEstate.AI Logo White.png" alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit" className="login-btn"> Log In </button>
          <p className="register-text">
          Don't have an account?{" "}
          <a href="/register" onClick={(e) => { e.preventDefault(); navigate("/register"); }}>
          Sign Up
          </a> 
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;