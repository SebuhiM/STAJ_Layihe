import React, { useState } from "react";
import { Input, Badge } from "antd";
import logoImg from "../assets/Logo Vector.png";
import { Link, NavLink } from "react-router";
import menuLogoImg from "../assets/Burger.png";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useCart } from "../constants/CartContext";
import { useWishlist } from "../constants/WishlistContent";
import "../css/header.css";

const { Search } = Input;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo_img1">
          <NavLink to="/" onClick={closeMenu}>
            <img src={logoImg} alt="logo" style={{ width: "100%", display: "block" }} />
          </NavLink>
        </div>

        <div className="search_button">
          <Search size="large" placeholder="Search" name="search-fn" />
        </div>

        {/* Əsas Naviqasiya Menyu (Masaüstü və Mobil ümumi) */}
        <ul className={`pages ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopnow" className="nav-link" onClick={closeMenu}>
              Shop Now
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>

          <li className="mobile-only-link">
            <NavLink to="/favorite" className="nav-link" onClick={closeMenu}>
              Favorites ({wishlist.length})
            </NavLink>
          </li>
          <li className="mobile-only-link">
            <NavLink to="/basket" className="nav-link" onClick={closeMenu}>
              Basket ({cart.length})
            </NavLink>
          </li>
          <li className="mobile-only-link">
            <NavLink to="/profile" className="nav-link" onClick={closeMenu}>
              Profile
            </NavLink>
          </li>
        </ul>

        <div className="header-right-group">
          <div className="icons_1">
            <Link to="/favorite" className="nav-link1" onClick={closeMenu}>
              <Badge count={wishlist.length} size="small" offset={[0, 2]}>
                <HeartOutlined style={{ fontSize: "20px", color: "#000" }} />
              </Badge>
            </Link>
            <Link to="/basket" className="nav-link1" onClick={closeMenu}>
              <Badge count={cart.length} size="small" offset={[0, 2]}>
                <ShoppingCartOutlined style={{ fontSize: "20px", color: "#000" }} />
              </Badge>
            </Link>
            <Link to="/profile" className="nav-link1" onClick={closeMenu}>
              <UserOutlined style={{ fontSize: "20px", color: "#000" }} />
            </Link>
          </div>

          <div className="burger_menu" onClick={toggleMenu}>
            <img src={menuLogoImg} alt="Burger Menu" style={{ width: "28px", height: "28px" }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;