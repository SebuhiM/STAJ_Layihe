import { Col, Row } from "antd";
import { Link } from "react-router";
import saatQulaqliqImg from "../assets/saat_qulaqliq.png";
import samsungZfoldImg from "../assets/SamsungZfold.png";
import macbook100Img from "../assets/Macbook 10000.png";
import iPadProImg from "../assets/iPadTwo.png";

const MainBox_5 = () => {
  return (
    <div className="container_5">
      <Row className="row">
        <Col span={6} style={{ backgroundColor: "#fff" }}>
          <img src={saatQulaqliqImg} alt="Image" />
          <div className="sub_container_4">
            <h1> Popular Products </h1>
            <p>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link to="/shopnow">
                <button> Shop Now </button>
            </Link>
          </div>
        </Col>

        <Col span={6} style={{ backgroundColor: "#F9F9F9" }}>
          <img src={iPadProImg} alt="Image" />
          <div className="sub_container_4">
            <h1> Ipad Pro </h1>
            <p>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link to="/shopnow">
                <button> Shop Now </button>
            </Link>
            </div>
        </Col>

        <Col span={6} style={{ backgroundColor: "#EAEAEA" }}>
          <img src={samsungZfoldImg} alt="Image" />
          <div className="sub_container_4">
            <h1> Samsung Galaxy </h1>
            <p>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link to="/shopnow">
                <button> Shop Now </button>
            </Link>
          </div>
        </Col>

        <Col span={6} style={{ backgroundColor: "#2C2C2C" }}>
          <img src={macbook100Img} alt="Image" />
          <div className="sub_container_4">
            <h1 style={{color: "white"}}> Macbook Pro </h1>
            <p>
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link to="/shopnow">
                <button className="shop_now_btn"> 
                    Shop Now 
                </button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainBox_5;
