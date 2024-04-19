import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { message } from 'antd';

import '../styles/PaymentForm.css';

const PaymentForm = ({ handlePayment, cartItems }) => {
  // State variables to capture user information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handle submission of payment information
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate user information
    const paymentData = {
      userId: getUserIdFromToken(), // Function to get userId from token
      products: cartItems.map(item => item.productId),
      quantities: cartItems.map(item => item.quantity),
      totalAmount: calculateTotalAmount(cartItems),
      orderDate: new Date().toISOString()
    };

    try {
      // Save the order data to the backend
      const res = await axios.post('http://localhost:5001/api/orders', paymentData);
      console.log(res.data); // Assuming the response contains the saved order data
      // Optionally, you can handle success response (e.g., show success message)
      message.success('Order placed successfully!');
    } catch (err) {
      console.error(err.response.data); // Log error response from the server
      // Optionally, you can handle error response (e.g., show error message)
    }

    // Call handlePayment function (if needed)
    //handlePayment(paymentData);
  };

  // Function to calculate total amount
  const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to get userId from token (dummy implementation, replace with actual logic)
  const getUserIdFromToken = () => {
    // Implement logic to extract userId from JWT token
    // For example, if the token is stored in localStorage:
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.userId;
    } else {
      // Handle case where token is not found
      return null;
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields for user information */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          {/* Button to submit payment information */}
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
