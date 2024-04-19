import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import '../styles/Navbar.css';

function Navbar({ cartItems, isAuthenticated, handleLogout }) {
  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/register">
            Sign In
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <>
              <Link to="/offers">Offers</Link>
              <Link style={{ marginLeft: '16px', marginRight: '16px' }} to="/my-orders">My Orders</Link>
              <Link to="/logout" onClick={handleLogout}>Logout</Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          <Link to="/cart">
            <Badge size="small" count={totalQuantity}>
              <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
