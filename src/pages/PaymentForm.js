import React, { useState } from 'react';
import '../styles/PaymentForm.css';

const PaymentForm = ({ handlePayment }) => {
  // State variables to capture user and credit card information
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Handle submission of payment information
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate user and credit card information
    // If validation passes, call handlePayment function
    // Pass both user and credit card information to the handlePayment function
    const paymentData = {
      user: { name, email },
      card: { cardNumber, expiryDate, cvv }
    };
    handlePayment(paymentData);
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
          {/* Input fields for credit card information */}
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
          {/* Button to submit payment information */}
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;



// // PaymentForm.js
// import React, { useState } from 'react';

// const PaymentForm = ({ handlePayment }) => {
//   // State variables to capture user and credit card information
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');

//   // Handle submission of payment information
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate user and credit card information
//     // If validation passes, call handlePayment function
//     // Pass both user and credit card information to the handlePayment function
//     const paymentData = {
//       user: { name, email },
//       card: { cardNumber, expiryDate, cvv }
//     };
//     handlePayment(paymentData);
//   };

//   return (
//     <div>
//       <h2>Payment Information</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Input fields for user information */}
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         {/* Input fields for credit card information */}
//         <label htmlFor="cardNumber">Card Number:</label>
//         <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
//         <label htmlFor="expiryDate">Expiry Date:</label>
//         <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
//         <label htmlFor="cvv">CVV:</label>
//         <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
//         {/* Button to submit payment information */}
//         <button type="submit">Submit Payment</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;
