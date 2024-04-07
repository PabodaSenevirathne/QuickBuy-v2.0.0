import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';
import { message } from 'antd';
import axios from 'axios'; // Import Axios for making HTTP requests

const ProductDetail = ({ addToCart, cartItems }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const [product, setProduct] = useState(null); // State to hold the product details

  useEffect(() => {
    // Fetch product details based on the product ID
    axios.get(`http://localhost:5001/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? '' : value);
  };

  const handleAddToCart = () => {
    if (product) {
      const updatedProduct = { ...product, quantity: quantity || 1 };
      addToCart(updatedProduct);
      messageApi.info('Product successfully added to cart!');
    }
  };

  return (
    <div className="product-detail">
      {product && (
        <div className="product-detail-container">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>Product Details</h2>
            <p>Canada’s Largest Selection Of Branded Footwear.</p>
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <div className="quantity-input-product-details">
              <label htmlFor="quantity">Quantity: </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min={1}
              />
              {contextHolder}
              <button onClick={handleAddToCart} className="view-details-button">
                {cartItems.findIndex((cartItem) => cartItem.id === product.productId) !== -1
                  ? 'Update Cart'
                  : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;







// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/ProductDetail.css';
// import { message } from 'antd';

// const ProductDetail = ({ products, addToCart, cartItems }) => {
//   const { id } = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const [messageApi, contextHolder] = message.useMessage();

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value);
//     setQuantity(isNaN(value) ? '' : value);
//   };

//   const handleAddToCart = (productId) => {
//     const product = products.find((p) => p.id === parseInt(productId));
//     if (product) {
//       const pro = { ...product, quantity: quantity || 1 };
//       addToCart(pro);
//       // alert('Product successfully added to cart!');
//       messageApi.info('Product successfully added to cart!');
//     }
//   };

//   const product = products.find((p) => p.id === parseInt(id));

//   return (
//     <div className="product-detail">
//       {product && (
//         <div className="product-detail-container">
//           <img src={product.image} alt={product.name} />
//           <div className="product-info">
//             <h2>Product Details</h2>
//             <p>Canada’s Largest Selection Of Branded Footwear.</p>
//             <h4>{product.name}</h4>
//             <p>Price: ${product.price}</p>
//             <div className="quantity-input-product-details">
//               <label htmlFor="quantity">Quantity: </label>
//               <input
//                 type="number"
//                 id="quantity"
//                 value={quantity}
//                 onChange={handleQuantityChange}
//                 min={1}
//               />
//               {contextHolder}
//               <button onClick={() => handleAddToCart(product.id)} className="view-details-button">{cartItems.findIndex(cartItem => cartItem.id === product.id) !== -1 ? "Update Cart" : "Add to Cart"} </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;
