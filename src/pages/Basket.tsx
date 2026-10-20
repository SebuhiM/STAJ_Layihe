import React from 'react';
import { useCart } from '../constants/CartContext';
import '../Basket.css'; 

const Basket: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Basket Is Empty 🛒</h2>
        <p>To add a product, go to the 'Shop Now' page.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart ({cart.length})</h2>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p className="cart-item-price">${item.price}</p>
            </div>

            <div className="cart-item-actions">
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button 
                className="remove-btn" 
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total Amount: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout-btn">Complete Order</button>
      </div>
    </div>
  );
};

export default Basket;