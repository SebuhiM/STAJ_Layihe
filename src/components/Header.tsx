import { Flex, Input } from "antd";
import logoImg from "../assets/Logo Vector.png";
import { Link, NavLink } from "react-router";
import menuLogoImg from "../assets/Burger.png";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const stylesFnSearch = () => ({
  root: { color: "#4DA8DA", borderWidth: 0 },
  input: { color: "#4DA8DA", borderColor: "#4DA8DA" },
});

const classNames = {};

const Header = () => {
  return (
    <div style={{ width: "100%", height: "88px" }}>
      <Flex
        gap="70px"
        align="center"
        justify="center"
        style={{ height: "100%" }}
      >
        <div className="responsive_div">
          <div className="logo_img1">
            <NavLink to="/">
              <img src={logoImg} alt="photo" />
            </NavLink>
          </div>
      

          <div className="burger_menu">
            <img src={menuLogoImg} alt="Image" />
          </div>
         </div>

        <div className="search_button">
          <Search
            classNames={classNames}
            styles={stylesFnSearch}
            size="large"
            placeholder="Search"
            name="search-fn"
          />
        </div>

        <div className="pages">
          <li>
            <NavLink to="/" className="nav-link">
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              {" "}
              About{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              {" "}
              Contact Us{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav-link">
              {" "}
              Blog{" "}
            </NavLink>
          </li>
        </div>

        <div className="icons_1">
          <Link to="/favorite" className="nav-link1">
            <HeartOutlined />
          </Link>
          <Link to="/basket" className="nav-link1">
            <ShoppingCartOutlined />
          </Link>
          <Link to="/profile" className="nav-link1">
            <UserOutlined />
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default Header;
