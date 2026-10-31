import React, { useState, useEffect } from "react";
import { useWishlist } from "../constants/WishlistContent";
import { useCart } from "../constants/CartContext";
import { useNavigate } from "react-router";
import heartFilled from "../assets/Like copy.png";
import "../shopNow.css";

const Favorite: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "80px", fontSize: "18px", fontFamily: "sans-serif" }}>Loading... </div>;
  }

  if (wishlist.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", fontFamily: "sans-serif" }}>
        <h2>Your Wishlist is Empty</h2>
        <p style={{ color: "#777", marginTop: "10px" }}>You can add products here by clicking the heart icon on any product.</p>
        <button 
          onClick={() => navigate("/")}
          style={{ marginTop: "20px", padding: "12px 25px", background: "#000", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
        >
          Back to Catalog
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <h1 style={{ marginBottom: "30px" }}>My Wishlist ({wishlist.length})</h1>
      
      <div className="product-grid">
        {wishlist.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => navigate(`/details/${product.id}`)}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <button 
              className="wishlist-btn"
              style={{ background: "#ffe6e6" }}
              onClick={(e) => {
                e.stopPropagation();
                removeFromWishlist(product.id);
              }}
              title="Remove from wishlist"
            >
              <img 
                src={heartFilled} 
                alt="wishlist"
                style={{ width: "20px", height: "20px", objectFit: "contain" }} 
              />
            </button>
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
            <h4 className="product-title">{product.title}</h4>
            <p className="product-price">${product.price}</p>
            <button 
              className="buy-btn"
              onClick={(e) => {
                e.stopPropagation();
                addToCart({ ...product, quantity: 1 });
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;