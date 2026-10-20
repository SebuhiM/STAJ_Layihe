import iPhoneGOLDImg from "../assets/Iphone 14 pro 1 GOLD (1).png";
import iPhoneWHITEImg from "../assets/Iphone 14 pro 1 WHITE (2).png";
import headPhoneImg from "../assets/qulaqliq.png";
import appleWachImg from "../assets/watchapple.png";
import likeBtn from "../assets/Favorite_duotone.png";
import { useCart } from "../constants/CartContext"; 



const items = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    img: iPhoneGOLDImg,
  },
  {
    id: 2,
    name: "AirPods Max SilverStarlight Aluminium",
    price: 549,
    img: headPhoneImg,
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: 399,
    img: appleWachImg,
  },
  {
    id: 4,
    name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: 1499,
    img: iPhoneWHITEImg,
  },
];

const MainBox_6 = () => {
  const { addToCart } = useCart();

  return (
    <div className="container_6">
      <div className="sub_container_5">
        <span> Discounts up to -50% </span>

        <div className="boxes">
          {items.map((item) => (
            <div key={item.id} className="product_card">
              <button className="like_btn">
                <img src={likeBtn} alt="Image" />
              </button>
              <div className="img_box">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <button 
              className="buy_btn"
              onClick={() =>
                  addToCart({
                    id: item.id,
                    title: item.name,
                    price: item.price,
                    image: item.img,
                    quantity: 1,
                  })
                }>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainBox_6;
