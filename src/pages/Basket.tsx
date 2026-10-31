import React, { useState, useEffect } from 'react';
import { useCart } from '../constants/CartContext';
import { useNavigate } from 'react-router';
import '../Basket.css'; 

const Basket: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.address || !formData.cardNumber) {
      alert("Please fill in all the required fields!");
      return;
    }

    setOrderCompleted(true);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (loading) {
    return <div className="basket-loading">Loading...</div>;
  }

  if (orderCompleted) {
    return (
      <div className="empty-cart order-success-container">
        <h2 className="success-title">Sifariş göndərildi!</h2>
        <p className="success-desc">
          Təşəkkür edirik! Sifarişiniz uğurla qəbul edildi və tezliklə çatdırılacaq.
        </p>
        <button
          className="success-home-btn"
          onClick={() => {
            setOrderCompleted(false);
            navigate("/");
          }}
        >
          Return to the home page
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Basket Is Empty</h2>
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
                <button type="button" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>

              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button 
                type="button"
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
        <button className="checkout-btn" onClick={() => setIsModalOpen(true)}>
          Complete Order
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            
            <h2 className="modal-title">Checkout Details</h2>

            <form onSubmit={handleOrderSubmit} className="modal-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Delivery Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <input type="text" name="cardNumber" placeholder="4111 2222 3333 4444" value={formData.cardNumber} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label>Expiry Date</label>
                  <input type="text" name="expiryDate" placeholder="MM/YY" value={formData.expiryDate} onChange={handleChange} required />
                </div>
                <div className="form-group flex-1">
                  <label>CVV</label>
                  <input type="password" name="cvv" placeholder="123" value={formData.cvv} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  className="modal-back-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="modal-submit-btn"
                >
                  Confirm and Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;