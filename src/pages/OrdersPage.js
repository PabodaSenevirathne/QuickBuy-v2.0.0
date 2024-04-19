// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { jwtDecode as jwt_decode } from 'jwt-decode';
// import '../styles/OrdersPage.css';

// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const isAuthenticated = localStorage.getItem('token');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login'); 
//     }

//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const decodedToken = jwt_decode(token);
//         const userId = decodedToken.userId;

//         const response = await axios.get(`http://localhost:5001/api/orders/user/${userId}`);
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     fetchOrders();
//   }, [navigate, isAuthenticated]);

//   return (
//     <div className="order-page">
//       <h2>My Orders</h2>
//       {orders.length === 0 ? (
//         <p className='message'>No orders found</p>
//       ) : (
//         <table>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={index}>
//                 <td>
//                   <ul>
//                     {order.products.map((product, index) => (
//                       <li key={index}>
//                         {/* Render product image */}
//                         <img src={`http://localhost:5001/api/products/${product}/image`} alt={`Product ${index}`} />
//                       </li>
//                     ))}
//                   </ul>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default OrdersPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import '../styles/OrdersPage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const isAuthenticated = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); 
    }

    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.userId;

        const response = await axios.get(`http://localhost:5001/api/orders/user/${userId}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [navigate, isAuthenticated]);

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
              <th>Products</th>
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
                      <li key={productIndex}>
                        <img
                          src={`http://localhost:5001/api/products/${product}/image`}
                          alt={`Product ${productIndex}`}
                          style={{ width: '50px', height: '50px' }}
                        />
                      </li>
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

