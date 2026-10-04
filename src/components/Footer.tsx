import twitterIcon from "../assets/Twitter.png"
import tiktokIcon from "../assets/Vector.png"
import instaIcon from "../assets/Instagram.png"
import facebookIcon from "../assets/Facebook.png"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col brand-col">
          <h2 className="footer-logo">cyber</h2>
          <p className="footer-desc">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
          <div className="social-icons">
            <a href="https://x.com/" target="_blank"><img src={twitterIcon} alt="Image" /></a>
            
            <a href="https://www.facebook.com/?stype=lo&flo=1&deoia=1&jlou=Afmf8KUiT4mi3iSl55qmbw44FGiyE2QJiWlO7HXYRaDWJ096WK8jDJ1MkryxafrwQ6F9QM5aiHdWKd6f__EPv2qcD8pf971xp6toi43yRblHfg&smuh=31222&lh=AdDVlIYOYxwvKGO90IY" target="_blank"><img src={facebookIcon} alt="Image" /></a>

            <a href="https://www.tiktok.com/explore?lang=en" target="_blank"><img src={tiktokIcon} alt="Image" />
            </a>

            <a href="https://www.instagram.com/#" target="_blank"><img src={instaIcon} alt="Image" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Bonus program</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Credit and payment</a></li>
            <li><a href="#">Service contracts</a></li>
            <li><a href="#">Non-cash account</a></li>
            <li><a href="#">Payment</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Assistance to the buyer</h4>
          <ul className="footer-links">
            <li><a href="#">Find an order</a></li>
            <li><a href="#">Terms of delivery</a></li>
            <li><a href="#">Exchange and return of goods</a></li>
            <li><a href="#">Guarantee</a></li>
            <li><a href="#">Frequently asked questions</a></li>
            <li><a href="#">Terms of use of the site</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;