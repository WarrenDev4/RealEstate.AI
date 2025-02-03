import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        </form>
      </div>
    </div>
  );
};

export default Login;
