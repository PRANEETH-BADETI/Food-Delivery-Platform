import React, { useState } from 'react';
import './Cart.css';
import { assets } from '../../assets/assets';

const Cart = () => {
  // Mock data - later you'll pull this from your React Context/Redux
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Spicy Dragon Bowl", price: 18.50, quantity: 2, image: assets.Spicy_Dragon_Bowl },
    { id: 2, name: "Green Leaf Sushi", price: 22.00, quantity: 1, image: assets.Green_Leaf_Sushi },
    { id: 1, name: "Spicy Dragon Bowl", price: 18.50, quantity: 2, image: assets.Spicy_Dragon_Bowl },
    { id: 2, name: "Green Leaf Sushi", price: 22.00, quantity: 1, image: assets.Green_Leaf_Sushi },
    { id: 1, name: "Spicy Dragon Bowl", price: 18.50, quantity: 2, image: assets.Spicy_Dragon_Bowl },
    { id: 2, name: "Green Leaf Sushi", price: 22.00, quantity: 1, image: assets.Green_Leaf_Sushi }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // This will eventually be calculated by your AI microservice backend
  const dynamicDeliveryFee = subtotal > 0 ? 3.50 : 0; 

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Order</h2>
        <span className="ai-surge-tag">● Live Pricing Active</span>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {cartItems.map((item) => (
             <div key={item.id} className="cart-items-title cart-items-item">
               <img src={item.image} alt={item.name} />
               <p>{item.name}</p>
               <p>${item.price.toFixed(2)}</p>
               <p className="quantity-badge">{item.quantity}</p>
               <p>${(item.price * item.quantity).toFixed(2)}</p>
               <p className="cross" onClick={() => handleRemove(item.id)}>x</p>
             </div>
          ))}
          {cartItems.length === 0 && <p className="empty-cart-msg">Your cart is empty.</p>}
        </div>

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details dynamic-fee">
                <p>Delivery Fee (Dynamic)</p>
                <p>${dynamicDeliveryFee.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details total">
                <b>Total</b>
                <b>${(subtotal === 0 ? 0 : subtotal + dynamicDeliveryFee).toFixed(2)}</b>
              </div>
            </div>
            <button disabled={cartItems.length === 0}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;