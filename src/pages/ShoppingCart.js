import React, { useState, useEffect } from 'react';
import '../styles/ShoppingCart.css';
import { message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import OrderSummary from './OrderSummary';

function ShoppingCart({ cartItems, removeFromCart, updateQuantity }) {
  const [totalValue, setTotalValue] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (index, quantity) => {
    updateQuantity(index, quantity);
    updateTotalValue();
  };

  const handleRemoveFromCart = (index) => {
    const removedItem = cartItems[index].name;
    removeFromCart(index);
    messageApi.info(`${removedItem} removed from the cart.`);
    updateTotalValue();
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  // Calculate total value
  const calculateTotalValue = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.quantity * item.price;
    });
    return total;
  };

  // Update total value
  const updateTotalValue = () => {
    setTotalValue(calculateTotalValue());
  };

  useEffect(() => {
    updateTotalValue();
  }, [cartItems]);

  return (
    <div className="shopping-cart">
      {contextHolder}
      <h2>Shopping Cart</h2>
      {isCheckingOut ? (
        <OrderSummary cartItems={cartItems} totalValue={totalValue} />
      ) : (
        <div>
          {cartItems.length === 0 ? (
            <p className='message'>Your shopping cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <div className="quantity-input">
                        <label htmlFor={`quantity-${index}`}>Quantity: </label>
                        <input
                          type="number"
                          id={`quantity-${index}`}
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                          min={1}
                        />
                      </div>
                      <p>Price: ${item.price}</p>
                    </div>
                    <button className="remove-button" onClick={() => handleRemoveFromCart(index)}><CloseOutlined /></button>
                  </li>
                ))}
              </ul>
              <p className="total-value">Total Value: ${totalValue.toFixed(2)}</p>
              <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;





// import React, { useState, useEffect } from 'react';
// import '../styles/ShoppingCart.css';
// import { message } from 'antd';
// import { CloseOutlined } from '@ant-design/icons';

// function ShoppingCart({ cartItems, removeFromCart, updateQuantity }) {
//   const [totalValue, setTotalValue] = useState(0);
//   const [messageApi, contextHolder] = message.useMessage();

//   const handleQuantityChange = (index, quantity) => {
//     updateQuantity(index, quantity);
//     updateTotalValue();
//   };

//   const handleRemoveFromCart = (index) => {
//     const removedItem = cartItems[index].name;
//     removeFromCart(index);
//     // alert(`"${removedItem}" removed from the cart.`);
//     messageApi.info(`${removedItem} removed from the cart.`);
//     updateTotalValue();
//   };

//   const handleCheckout = () => {
//     // alert("You have checked out successfully!");
//     messageApi.info('You have checked out successfully!');
//   };

//   // Calculate total value
//   const calculateTotalValue = () => {
//     let total = 0;
//     cartItems.forEach(item => {
//       total += item.quantity * item.price;
//     });
//     return total;
//   };

//   // Update total value
//   const updateTotalValue = () => {
//     setTotalValue(calculateTotalValue());
//   };

//   useEffect(() => {
//     updateTotalValue();
//   }, [cartItems]);

//   return (
//     <div className="shopping-cart">
//        {contextHolder}
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className='message'>Your shopping cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item, index) => (
//               <li key={index}>
//                 <img src={item.image} alt={item.name} />
//                 <div>
//                   <h4>{item.name}</h4>
//                   <div className="quantity-input">
//                     <label htmlFor={`quantity-${index}`}>Quantity: </label>
//                     <input
//                       type="number"
//                       id={`quantity-${index}`}
//                       value={item.quantity}
//                       onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
//                       min={1}
//                     />
//                   </div>
//                   <p>Price: ${item.price}</p>
//                 </div>
//                 <button className="remove-button" onClick={() => handleRemoveFromCart(index)}><CloseOutlined /></button>
//               </li>
//             ))}
//           </ul>
//           <p className="total-value">Total Value: ${totalValue.toFixed(2)}</p>
//           <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShoppingCart;
