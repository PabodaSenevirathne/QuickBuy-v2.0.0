import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';
import Footer from './components/Footer';
import Account from './pages/Account';
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';
import { products } from './utils/ProductInfo';

function App() {
  // Define the state
  const [cartItems, setCartItems] = useState([]);


  // Add item to cart
  const addToCart = (item) => {

    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    console.log(existingItemIndex);

    if (existingItemIndex !== -1) {
      // If item already exists, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
  } else {
      // If item does not exist, add item to the cart
      setCartItems(prevCartItems => [...prevCartItems, item]);
  }
  };

  // Remove items from cart
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Update the quantity
  const updateQuantity = (indexToUpdate, newQuantity) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[indexToUpdate].quantity = newQuantity;
      return updatedItems;
    });
  };

  return (
    <Router>
      <div>
      <Header />
        <Navbar cartItems={cartItems} />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} products={products}/>} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>} />
          <Route path="/account" element={<Account />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products/:id" element={<ProductDetail products={products} addToCart={addToCart} cartItems={cartItems}/>} /> 
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
