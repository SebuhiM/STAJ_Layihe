import { Link } from 'react-router'
import phoneImg from "../assets/Iphone Image.png";
import phoneResponsiveImg from "../assets/Iphone Imageresponsive.png"

const MainBox1 = () => {
  return (
    <div className="container_1">
        <div className="sub_contanier_1">
          <div className="sub_div_1">
            <div className="text_1">
              <p> Pro.Beyond. </p>
              <h1>
                IPhone 14 <span> Pro </span>
              </h1>
            </div>

            <div className="text_2">
              <p>Created to change everything for the better. For everyone</p>
              <Link to="/shopnow">
                <button> Shop Now </button>
              </Link>
            </div>
            
          </div>

          <div className="sub_div_2">
            <img src={phoneImg} alt="image" />
            <img src={phoneResponsiveImg} alt="Image" className="res_img"/>
          </div>
        </div>
      </div>
  )
}

export default MainBox1