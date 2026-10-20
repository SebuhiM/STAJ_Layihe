import { useState } from "react";
import likeIconImg from "../assets/Like.png";
import iphoneImg from "../assets/Iphone 14 pro 1.png";
import airdopsImg from "../assets/airdops.png";
import saatImg from "../assets/saat.png";
import iPadImg from "../assets/ipad.png";
import qulaqliqImg from "../assets/qulaqliq.png";
import zfoldImg from "../assets/zfold.png";
import cameraImg from "../assets/camera(1).png";
import appleWatchImg from "../assets/watchapple.png";
import { useCart } from "../constants/CartContext";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: 900,
    img: iphoneImg,
    categories: ["newArrival", "bestseller"],
  },
  {
    id: 2,
    name: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
    img: cameraImg,
    categories: ["newArrival"],
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: 399,
    img: appleWatchImg,
    categories: ["newArrival", "featuredProducts"],
  },
  {
    id: 4,
    name: "AirPods Max Silver Starlight Aluminium",
    price: 549,
    img: qulaqliqImg,
    categories: ["newArrival", "bestseller", "featuredProducts"],
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
    img: saatImg,
    categories: ["newArrival", "bestseller"],
  },
  {
    id: 6,
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: 1799,
    img: zfoldImg,
    categories: ["newArrival"],
  },
  {
    id: 7,
    name: "Galaxy Buds FE Graphite Galaxy Buds Graphite",
    price: 99.99,
    img: airdopsImg,
    categories: ["newArrival", "featuredProducts"],
  },
  {
    id: 8,
    name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
    img: iPadImg,
    categories: ["newArrival", "bestseller"],
  },
];

const MainBox_4 = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("newArrival");

  const filterProducts = products.filter((item) =>
    item.categories?.includes(activeTab),
  );

  return (
    <div className="container_4">
      <div className="sub_container_3">
        <div className="text">
          <p
            className={activeTab === "newArrival" ? "active" : ""}
            onClick={() => setActiveTab("newArrival")}
          >
            New Arrival
          </p>
          <p
            className={activeTab === "bestseller" ? "active" : ""}
            onClick={() => setActiveTab("bestseller")}
          >
            Bestseller
          </p>
          <p
            className={activeTab === "featuredProducts" ? "active" : ""}
            onClick={() => setActiveTab("featuredProducts")}
          >
            Featured Products
          </p>
        </div>

        <div className="boxes">
          {filterProducts.map((item) => (
            <div key={item.id} className="product_card">
              <button className="like_btn">
                <img src={likeIconImg} alt="Image" />
              </button>
              <div className="img_box">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <button
                className="buy-btn"
                onClick={() =>
                  addToCart({
                    id: item.id,
                    title: item.name,
                    price: item.price,
                    image: item.img,
                    quantity: 1,
                  })
                }
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainBox_4;
