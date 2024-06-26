import React, { useState } from 'react';
import '../styles/Register.css';
import axios from 'axios';
import { message } from 'antd'; 

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    shippingAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      message.error('Password and confirm password do not match');
      return;
    }
  
    try {
      // Check if the email already exists
      const checkEmailResponse = await axios.get(`http://localhost:5001/api/users/check-email?email=${formData.email}`);
      if (checkEmailResponse.data.exists) {
        message.error('Email address is already registered');
        return;
      }
  
      // If email doesn't exist, proceed with registration
      const response = await axios.post('http://localhost:5001/api/users/register', formData);
      console.log(response.data);
      message.success('User registered successfully');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="registration-container">
      <h1 className="registration-heading">Register</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div>
          <label>Shipping Address</label>
          <textarea name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
