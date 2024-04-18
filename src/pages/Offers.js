import React from 'react';
import '../styles/Offers.css'; // Import the CSS file

function Offers() {
  return (
    <div>
      <h2>Special Offers</h2>
      <p>Check out our latest special offers and discounts below:</p>
      <div className="offer-list">
        <div className="offer-item">
          <h3>Offer 1</h3>
          <p>Description of Offer 1</p>
          <p>Discount: 10%</p>
        </div>
        <div className="offer-item">
          <h3>Offer 2</h3>
          <p>Description of Offer 2</p>
          <p>Discount: 20%</p>
        </div>
        <div className="offer-item">
          <h3>Offer 3</h3>
          <p>Description of Offer 3</p>
          <p>Discount: 15%</p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
