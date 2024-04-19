// Offers.js

import React from 'react';
import '../styles/Offers.css'; // Import the CSS file
import offer1Image from '../images/c-5.jpg';
import offer2Image from '../images/c-6.jpg';
import offer3Image from '../images/p-7.jpg';

function Offers() {
  return (
    <div>
      <h2>Special Offers</h2>
      <p>Check out our latest special offers and discounts below:</p>
      <div className="offer-list">
        <div className="offer-item">
          <img src={offer1Image} alt="Offer 1" />
          <div className="offer-details">
            <h3>Offer 1</h3>
            <p>Description of Offer 1</p>
            <p className="discount">Discount: 10%</p>
          </div>
        </div>
        <div className="offer-item">
          <img src={offer2Image} alt="Offer 2" />
          <div className="offer-details">
            <h3>Offer 2</h3>
            <p>Description of Offer 2</p>
            <p className="discount">Discount: 20%</p>
          </div>
        </div>
        <div className="offer-item">
          <img src={offer3Image} alt="Offer 3" />
          <div className="offer-details">
            <h3>Offer 3</h3>
            <p>Description of Offer 3</p>
            <p className="discount">Discount: 15%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
