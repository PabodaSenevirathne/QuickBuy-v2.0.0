import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import '../styles/OrdersPage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const decodedToken = jwt_decode(token); // Decode the token to get user ID
        const userId = decodedToken.userId; // Get the user ID from the decoded token

        const response = await axios.get(`http://localhost:5001/api/orders/user/${userId}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="order-page">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p className='message'>No orders found</p>
      ) : (
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderId}</td>
              <td>{order.user}</td>
              <td>{new Date(order.orderDate).toLocaleDateString()}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
                <ul>
                  {order.products.map((product, productIndex) => (
                    <li key={productIndex}>{product}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {order.quantities.map((quantity, quantityIndex) => (
                    <li key={quantityIndex}>{quantity}</li>
                  ))}
                </ul>
              </td>
              <td>
                <Link to={`/orders/${order.orderId}`}>
                  <button className="view-details-button">Status</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       )}
    </div>
  );
};

export default OrdersPage;