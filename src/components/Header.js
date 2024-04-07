import React from 'react';
import logo from '../images/logo.jpg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Your Logo" width="100" height="100" />
      </div>
      <div className="title">
        <h2>Welcome to Concepta</h2>
        <p>Your One-Stop Shop for Quality Products</p>
      </div>
    </header>
  );
}

export default Header;
