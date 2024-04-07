import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

function Navbar({ cartItems }) {
  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/cart">
            <Badge size="small" count={totalQuantity}> {/* Set the count to the totalQuantity */}
              <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </Badge>
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
