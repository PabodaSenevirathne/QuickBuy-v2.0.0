import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { message } from 'antd';
import axios from 'axios';

function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.email === '' || formData.password === '') {
      messageApi.info('Please fill all the fields to continue!');
    } else {
      try {
        // Send login credentials to the server
        const response = await axios.post('http://localhost:5001/api/users/login', formData);
        // Extract JWT from the response
        const token = response.data.token;
        // Store the token securely (e.g., in local storage)
        localStorage.setItem('token', token);
        // Inform user about successful login
        messageApi.success('Login successful!');
        // Redirect to dashboard or any other page upon successful login
        
        setTimeout(() => {
          navigate('/');
        }, 1000);
      
      } catch (error) {
        console.error(error);
        messageApi.error('Invalid credentials!');
      }
    }
  };



  return (
    <div className="login-container">
      <h2>Login</h2>
      {contextHolder}
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
