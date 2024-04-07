import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Account.css';
import { message } from 'antd';

function Account() {

  const [messageApi, contextHolder] = message.useMessage();
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    if (redirecting) {
      timeoutId = setTimeout(() => {
        navigate('/');
      }, 1500);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [redirecting, navigate]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    shippingAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.shippingAddress === '') {
      messageApi.info('Please fill all the fields to continue!');
    } else {
      // alert(`Account created sucessfully!`);
      messageApi.info('Account created sucessfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        shippingAddress: '',
      });
      setRedirecting(true);
    }
  };

  return (
    <div className="account-container">
      <h2>Create an Account</h2>
      {contextHolder}
      <form onSubmit={handleSubmit} className="account-form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <textarea id="shippingAddress" name="shippingAddress" value={formData.shippingAddress} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Account;
