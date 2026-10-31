import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useCart } from "../constants/CartContext";
import { useWishlist } from "../constants/WishlistContent"; 
import "../ProductDetails.css";
import iconImg1 from "../assets/Delivery.png"
import iconImg2 from "../assets/Stock.png"
import iconImg3 from "../assets/Guaranteed.png"
import ipGold from "../assets/Iphone 14 pro 1 GOLD (1).png";
import ipSilver from "../assets/Iphone 14 pro 1 WHITE (2).png";
import ipPurple from "../assets/Iphone 14 pro 1.png";
import ip13 from "../assets/Iphone 13 pro 1 (1).png";
import ipBlack from "../assets/Iphone 14 pro BLACK 1 (1).png";
import ip11 from "../assets/Iphone 14 pro 1 (1).png";
import cpu  from "../assets/cpu.png"
import battery  from "../assets/battery.png"
import  screenSize from "../assets/Screensize.png"


const mockProductsData = [
  { 
    id: 1, 
    title: "Apple iPhone 14 Pro 512GB Gold", 
    price: 1437, 
    oldPrice: 1599, 
    image: ipGold,
    screenSize: "6.1\"",
    cpu: "Apple A16 Bionic",
    battery: "3200 mAh",
    description: "Enhanced capabilities thanks to an enlarged display of 6.1 inches and work without recharging throughout the day. Incredible photos in weak and in bright lighting using the new system."
  },
  { 
    id: 2, 
    title: "Apple iPhone 11 128GB White", 
    price: 510, 
    oldPrice: 599, 
    image: ip11,
    screenSize: "6.1\"",
    cpu: "Apple A13 Bionic",
    battery: "3110 mAh",
    description: "Classic design, powerful chip, and reliable dual-camera system that lets you capture your best moments effortlessly."
  },
  { 
    id: 3, 
    title: "Apple iPhone 11 128GB White", 
    price: 550, 
    oldPrice: 620, 
    image: ip11,
    screenSize: "6.1\"",
    cpu: "Apple A13 Bionic",
    battery: "3110 mAh",
    description: "A reliable device with great battery life and stunning white finish."
  },
  { 
    id: 4, 
    title: "Apple iPhone 14 Pro 1TB Gold", 
    price: 1499, 
    oldPrice: 1650, 
    image: ipGold,
    screenSize: "6.7\"",
    cpu: "Apple A16 Bionic",
    battery: "4323 mAh",
    description: "Maximum storage capacity with professional camera features and stunning gold aesthetic."
  },
  { 
    id: 5, 
    title: "Apple iPhone 14 Pro 1TB Gold", 
    price: 1399, 
    oldPrice: 1499, 
    image: ipGold,
    screenSize: "6.7\"",
    cpu: "Apple A16 Bionic",
    battery: "4323 mAh",
    description: "Ultimate performance, 1TB of storage, and high-end display technology for enthusiasts."
  },
  { 
    id: 6, 
    title: "Apple iPhone 14 Pro 128GB Deep Purple", 
    price: 1600, 
    oldPrice: 1750, 
    image: ipPurple,
    screenSize: "6.1\"",
    cpu: "Apple A16 Bionic",
    battery: "3200 mAh",
    description: "Striking Deep Purple color combined with Dynamic Island and an always-on display."
  },
  { 
    id: 7, 
    title: "Apple iPhone 13 mini 128GB Pink", 
    price: 850, 
    oldPrice: 950, 
    image: ip13,
    screenSize: "5.4\"",
    cpu: "Apple A15 Bionic",
    battery: "2438 mAh",
    description: "Compact size with powerful performance, vibrant pink color, and advanced dual-camera system."
  },
  { 
    id: 8, 
    title: "Apple iPhone 14 Pro 256GB Space Black", 
    price: 1399, 
    oldPrice: 1499, 
    image: ipBlack,
    screenSize: "6.1\"",
    cpu: "Apple A16 Bionic",
    battery: "3200 mAh",
    description: "Sleek Space Black finish, powerful A16 Bionic chip, and 256GB of fast storage."
  },
  { 
    id: 9, 
    title: "Apple iPhone 14 Pro 256GB Silver", 
    price: 1399, 
    oldPrice: 1499, 
    image: ipSilver,
    screenSize: "6.7\"",
    cpu: "Apple A16 Bionic",
    battery: "4323 mAh",
    description: "Elegant silver design with an expansive 6.7-inch display and top-tier specifications."
  },
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist(); 

  const product = mockProductsData.find((p) => p.id === Number(id)) || mockProductsData[0];

  const [mainImage, setMainImage] = useState(product.image);
  const [selectedStorage, setSelectedStorage] = useState("256GB");

  useEffect(() => {
    setMainImage(product.image);
  }, [product]);

  const isFav = isInWishlist(product.id); 
  
  return (
    <div className="product-details-container">
      <div className="breadcrumb">
        Home &gt; Catalog &gt; Smartphones &gt; Apple &gt; <span>{product.title}</span>
      </div>

      <div className="product-details-content">
        <div className="product-images-section">
          <div className="thumbnail-list">
            <img src={product.image} alt="" onClick={() => setMainImage(product.image)} />
            <img src={ipSilver} alt="" onClick={() => setMainImage(ipSilver)} />
            <img src={ipPurple} alt="" onClick={() => setMainImage(ipPurple)} />
            <img src={ipBlack} alt="" onClick={() => setMainImage(ipBlack)} />
          </div>
          <div className="main-image-wrapper">
            <img src={mainImage} alt={product.title} className="main-product-img" />
          </div>
        </div>

        <div className="product-info-section">
          <h1 className="details-title">{product.title}</h1>
          
          <div className="price-box">
            <span className="current-price">${product.price}</span>
            <span className="old-price">${product.oldPrice}</span>
          </div>

          <div className="option-group">
            <p>Select color:</p>
            <div className="color-options">
              <span className="color-dot black" onClick={() => setMainImage(ipBlack)}></span>
              <span className="color-dot purple" onClick={() => setMainImage(ipPurple)}></span>
              <span className="color-dot gold" onClick={() => setMainImage(ipGold)}></span>
              <span className="color-dot silver" onClick={() => setMainImage(ipSilver)}></span>
            </div>
          </div>

          <div className="option-group">
            <p>Storage:</p>
            <div className="storage-options">
              {["128GB", "256GB", "512GB", "1TB"].map((storage) => (
                <button
                  key={storage}
                  className={`storage-btn ${selectedStorage === storage ? "active" : ""}`}
                  onClick={() => setSelectedStorage(storage)}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>


          <div className="specs-grid">
            <div className="spec-card">
              <img src={screenSize} alt="Icon" />
              <span className="spec-label">Screen size</span>
              <span className="spec-value">{product.screenSize}</span>
            </div>
            <div className="spec-card">
              <img src={cpu} alt="Icon" />
              <span className="spec-label">CPU</span>
              <span className="spec-value">{product.cpu}</span>
            </div>
            <div className="spec-card">
              <img src={battery} alt="Icon" />
              <span className="spec-label">Battery capacity</span>
              <span className="spec-value">{product.battery}</span>
            </div>
          </div>


          <p className="product-description">{product.description}</p>

          <div className="details-actions">
            <button 
              className="wishlist-action-btn"
              style={{
                borderColor: isFav ? "red" : "#000",
                color: isFav ? "red" : "#000",
                background: isFav ? "#ffe6e6" : "#fff"
              }}
              onClick={() => addToWishlist(product)}
            >
              {isFav ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
            <button 
              className="cart-action-btn"
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Add to Cart
            </button>
          </div>

          <div className="services-footer">
            <div className="service-item">
              <img src={iconImg1} alt="Image" />
              <div>
                <strong>Free Delivery</strong>
                <p>1-2 day</p>
              </div>
            </div>
            <div className="service-item">
              <img src={iconImg2} alt="Image" />
              <div>
                <strong>In Stock</strong>
                <p>Today</p>
              </div>
            </div>
            <div className="service-item">
              <img src={iconImg3} alt="Image" />
              <div>
                <strong>Guaranteed</strong>
                <p>1 year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;