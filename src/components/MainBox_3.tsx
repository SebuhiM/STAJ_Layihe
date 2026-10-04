import arrowSolImg from "../assets/Arrow_sol.png";
import arrowSagImg from "../assets/Arrow_sag.png";
import camera_icon from "../assets/camera_icon (4).png";
import computer_icon from "../assets/computer_icon (2).png";
import watch_icon from "../assets/watch_icon (1).png";
import phone_icon from "../assets/phone_icon.png";
import headphone_icon from "../assets/headphone_icon (3).png";
import gaming_icon from "../assets/gaming_icon.png";
import { useState } from "react";

const categories = [
  { id: 1, title: "Phones", icon: phone_icon },
  { id: 2, title: "Smart Watches", icon: watch_icon },
  { id: 3, title: "Cameras", icon: camera_icon },
  { id: 4, title: "Headphones", icon: headphone_icon },
  { id: 5, title: "Computers", icon: computer_icon },
  { id: 6, title: "Gaming", icon: gaming_icon },
];

const MainBox_3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const VISIBLE_CARDS = 6;
  const maxIndex = categories.length - VISIBLE_CARDS;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="container_3">
      <div className="sub_container_2">
        <div className="text_arrows">
          <span>Browse By Category</span>

          <div className="arrows">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="arrow_btn"
            >
              <img src={arrowSolImg} alt="Previous" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="arrow_btn"
            >
              <img src={arrowSagImg} alt="Next" />
            </button>
          </div>
        </div>

        <div className="boxes_wrapper">
          <div
            className="boxes"
            style={{
              transform: `translateX(-${currentIndex * (160 + 16)}px)`,
            }}
          >
            {categories.map((item) => (
              <div className="box" key={item.id}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="category_png"
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBox_3;
