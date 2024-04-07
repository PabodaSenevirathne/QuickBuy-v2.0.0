import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link to={`/products/${product.productId}`}>
        <button className="view-details-button">View Details</button>
      </Link>
    </div>
  );
}

export default Product;
