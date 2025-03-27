import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import './Register.css';

{/* Register Page */}
const Register = () => {
  {/* Logic for handling user form data. */}
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

   {/* handleChange function. */}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  {/* Sample handleSubmit function. */}
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await register(formData.firstName, formData.lastName, formData.email, formData.password); { /* Call register from AuthContext */ }
      navigate("/login"); { /* Redirect to login page after successfully registering. */} 
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="logo">
          <img src="/images/RealEstate.AI Logo White.png" alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className="register-form">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          {error && <p className="error-message">{error}</p>} {/* Show error if registration fails */}
          <button type="submit" className="register-btn"> Register </button>
          <p className="login-text">
            Already have an account?{" "}
            <a href="/login" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default Register;
