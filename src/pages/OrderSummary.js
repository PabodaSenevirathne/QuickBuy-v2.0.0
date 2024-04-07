// OrderSummary.js
import React from 'react';

const OrderSummary = ({ cartItems, totalValue, handleProceedToPayment }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
      <button onClick={handleProceedToPayment}>Proceed to Payment</button>
    </div>
  );
};

export default OrderSummary;




// // OrderSummary.js
// import React from 'react';

// const OrderSummary = ({ cartItems, totalValue }) => {
//   return (
//     <div>
//       <h2>Order Summary</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             <p>{item.name}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Price: ${item.price}</p>
//           </li>
//         ))}
//       </ul>
//       <p>Total Value: ${totalValue.toFixed(2)}</p>
//     </div>
//   );
// };

// export default OrderSummary;
