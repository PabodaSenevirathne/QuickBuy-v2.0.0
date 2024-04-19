import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { message } from 'antd';

import '../styles/PaymentForm.css';

const PaymentForm = ({ handlePayment, cartItems }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentData = {
      userId: getUserIdFromToken(),
      products: cartItems.map(item => item.productId),
      quantities: cartItems.map(item => item.quantity),
      totalAmount: calculateTotalAmount(cartItems),
      orderDate: new Date().toISOString()
    };

    try {
      const res = await axios.post('http://localhost:5001/api/orders', paymentData);
      console.log(res.data);
      message.success('Order placed successfully!');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.userId;
    } else {
      return null;
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2 className='payment-information'>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;