import React, { useEffect, useState } from 'react';
import './Register.css';

{/* Register Page */}
const Register = () => {
   {/* Sample logic for handling form data. MySQL database logic will be added soon! */}
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

  {/* Sample handleSubmit function. */}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
          <button type="submit" className="register-btn"> Register </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
