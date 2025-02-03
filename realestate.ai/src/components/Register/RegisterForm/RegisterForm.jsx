import React from 'react';
import { Link } from 'react-router-dom';
import "./RegisterForm.css"

const RegisterForm = () => {
    return (
        <div className="register-container">
            <div className="register-card">
        <div className="logo">
          <img src="your-logo.png" alt="Logo" />
        </div>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
    );
};

export default RegisterForm