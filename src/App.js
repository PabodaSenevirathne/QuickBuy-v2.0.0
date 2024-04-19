import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Header from './components/Header';
import Footer from './components/Footer';
import Account from './pages/Account';
import AboutUs from './pages/AboutUs';
import ProductDetail from './pages/ProductDetail';
import { products } from './utils/ProductInfo';
import OrderSummary from './pages/OrderSummary';
import PaymentForm from './pages/PaymentForm';
import Login from './pages/Login';
import Register from './pages/Register';
import Offers from './pages/Offers';
import OrdersPage from './pages/OrdersPage'; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ? true : false);
  const [totalValue, setTotalValue] = useState(0);

  // Calculate total value based on cart items
  const calculateTotalValue = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  useEffect(() => {
    setTotalValue(calculateTotalValue());
  }, [cartItems]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  const handleProceedToPayment = () => {
    setOrderSubmitted(true);
  };

  // Add item to cart
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.productId);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
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
        <Navbar cartItems={cartItems} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} products={products}/>} />
            <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>} />
            <Route path="/account" element={<Account />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/order-summary" element={<OrderSummary handleProceedToPayment={handleProceedToPayment} />} />
            <Route path="/payment" element={<PaymentForm cartItems={cartItems} />} />
            <Route path="/products/:id" element={<ProductDetail products={products} addToCart={addToCart} cartItems={cartItems}/>} /> 
            <Route  path="/login" element={<Login/>} />
            <Route  path="/register" element={<Register/>} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/my-orders" element={<OrdersPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
