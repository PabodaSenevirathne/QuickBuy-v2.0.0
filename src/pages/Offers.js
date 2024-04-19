import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import '../styles/Offers.css';
import offer1Image from '../images/offer-1.jpg';
import offer2Image from '../images/offer-2.jpg';
import offer3Image from '../images/offer-3.jpg';

function Offers() {
  const isAuthenticated = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h2 className='title'>Special Offers</h2>
      <p>Check out our latest special offers and discounts below:</p>
      <div className="offer-list">
        <div className="offer-item">
          <img src={offer1Image} alt="Offer 1" />
          <div className="offer-details">
            <h3 className='offer-name'>Offer 1</h3>
            <p>Buy One Get One Free</p>
            <p className="discount">Discount: 10%</p>
          </div>
        </div>
        <div className="offer-item">
          <img src={offer2Image} alt="Offer 2" />
          <div className="offer-details">
            <h3 className='offer-name'>Offer 2</h3>
            <p>Buy One Get One Free</p>
            <p className="discount">Discount: 20%</p>
          </div>
        </div>
        <div className="offer-item">
          <img src={offer3Image} alt="Offer 3" />
          <div className="offer-details">
            <h3 className='offer-name'>Offer 3</h3>
            <p>Buy One Get One Free</p>
            <p className="discount">Discount: 40%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
