import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8080/api/users/forgot-password", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error("Failed to send reset email");
      }

      setMessage("A password reset email has been sent. Please check your inbox.");
      setError(null);
    } catch (err) {
      setError("There was an error sending the password reset email. Please try again.");
      setMessage(null);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Password?</h2>
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="forgot-password-btn">Reset Password</button>
        </form>
        
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <p>
          Remembered your password?{" "}
          <a href="/login" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
