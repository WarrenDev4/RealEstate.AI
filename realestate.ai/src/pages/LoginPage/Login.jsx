import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home'); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <img src="/images/RealEstate.AI Logo White.png" alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <p className="demo-notice">
            This project is just a demo. No need to enter any credentials!
          </p>
          <button type="submit" className="login-btn">Log In</button>
          <p className="register-text">
            Don't have an account?{" "}
            <a href="/register" onClick={(e) => { e.preventDefault(); navigate("/register"); }}>
              Sign Up
            </a>
          </p>
          <p className="forgot-password">
            <a href="/forgot-password" onClick={(e) => { e.preventDefault(); navigate("/forgot-password"); }}>
              Forgot Password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;