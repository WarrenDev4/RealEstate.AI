import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AuthContext from "../../context/AuthContext";
import './Login.css';

{/* Login Page */}
const Login = () => {
  {/* Database logic for handling user form data. */}
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  {/* Logic for handling user form data. */}
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  {/* HandleChange function. */}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  {/* HandleSubmit function for handling form data. */}
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await login(formData.email, formData.password); { /* Call login data from AuthContext. */ }
      navigate("/home"); { /* Redirect to homepage on login data successfully submitted. */ } 
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src="/images/RealEstate.AI Logo White.png" alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          {error && <p className="error-message">{error}</p>} {/* Display error message if login fails */}
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