import { Link } from "react-router";
import macBookImg from "../assets/MacBook Pro 14.png"
import playsationImg from '../assets/PlayStation.png'
import airPodsImg from "../assets/hero__gnfk5g59t0qe_xlarge_2x 1.png"
import visionProImf from "../assets/image 36.png"
import responsiveAirPods from "../assets/responsive_ airpods(2).png"
import responsiveVision from "../assets/responsive_visonpro (3).png"
import responsivePS from "../assets/responsive_ PS(4).png"
import responsiveMacBook from "../assets/responsive_ macbook(1) copy.png"


const MainBox_2 = () => {
  return (
    <div className="container_2">
        <div className="box_1">

          <div className="block_1">
            <div className="img">
              <img src={playsationImg} alt="Image" />
              <img src={responsivePS} alt="Image" className="res_img" />
            </div>

            <div className="text">
                <h1> Playstation <span> 5 </span> </h1>
                <p>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                </p>
            </div>
          </div>

          
          <div className="block_2">

            <div className="case_1">
              <div className="img">
                <img src={airPodsImg} alt="image" />
                <img src={responsiveAirPods} alt="Image" className="res_img" />
              </div>
              <div className="text">
                  <h1> Apple AirPods 
                    <span> Max </span>
                </h1>
                <p>
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>


            <div className="case_2">
              <div className="img">
                <img src={visionProImf} alt="Image" />
                <img src={responsiveVision} alt="Image" className="res_img" />
              </div>
              <div className="text">
                <h1 style={{color: "white"}}> Apple Vision 
                   <span> Pro </span>
                </h1>
                <p>
                  An immersive way to experience entertainment
                </p>

              </div>
            </div>

          </div>

        </div>





        <div className="box_2">
          <div className="text">
            <h2> 
              Macbook <span> Air </span>
            </h2>
            <p>
              The new 15‑inch MacBook Air makes room for more 
              of what you love with a spacious Liquid Retina 
              display.
            </p>
            <Link to="/shopnow"><button> Shop Now </button></Link>
          </div>

          <div className="img">
            <img src={macBookImg} alt="Image" />
            <img src={responsiveMacBook} alt="Image" className="res_img" />
          </div>
        </div>

      </div>
  )
}

export default MainBox_2