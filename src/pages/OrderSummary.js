// OrderSummary.js
import React from 'react';
import { Link } from 'react-router-dom';
 

const OrderSummary = ({ cartItems, totalValue }) => {
  return (
    <div className="order-summary"> {/* Apply the "order-summary" class */}
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="total-value">Total Value: ${totalValue.toFixed(2)}</p>
      <Link to="/payment">
        <button className="checkout-button">Proceed to Payment</button>
      </Link>
    </div>
  );
};

export default OrderSummary;
