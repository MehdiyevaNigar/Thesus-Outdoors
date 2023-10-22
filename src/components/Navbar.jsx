import { Link, NavLink } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/images/logo.avif";
import { useContext } from "react";
import { CartContext } from "../cartContext";
import HamburgerMenu from "./Hamburger";
import { useTranslation } from "react-i18next";
export const Navbar = () => {
  const { cart } = useContext(CartContext);

  const findTotalQuantity = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const { t, i18n } = useTranslation();

  return (
    <div className="heaeder-nav">
      <div className="header">
        <p>{t("header.free_shipping")}</p>
      </div>
      <header className="navbar">
        <div className="container">
          <div className="row">
            <div className="navbarMenu">
              <HamburgerMenu />
            </div>
            <div className="logo">
              <Link to="/" className="thesusLogo">
                <img src={logo} alt="thesusLogo" />
              </Link>
            </div>

            <nav>
              <ul className="navLink">
                <li className="navItem">
                  <NavLink className="ItemLink" to="/new-in">
                    {t("navbar.new_in")}
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="ItemLink" to="/bestsellers">
                    {t("navbar.bestsellers")}
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="ItemLink" to="/weekend-boot">
                    {t("navbar.weekend_boot")}
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="ItemLink" to="/terrus-clog">
                    {t("navbar.terrus_clog")}
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="ItemLink" to="/shop-all">
                    {t("navbar.shop_all")}
                  </NavLink>
                </li>
                <li className="navItem">
                  <NavLink className="ItemLink" to="/values">
                    {t("navbar.values")}
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="rightItems">
              <div className="ItemLink language">
                <button onClick={() => i18n.changeLanguage("en")}>
                  {t("languages.en")}
                </button>
                <button onClick={() => i18n.changeLanguage("az")}>
                  {t("languages.az")}
                </button>
              </div>
              <div className="ItemLink login">
                <NavLink to="/login">
                  <BsPerson className="coloredIcon" />
                </NavLink>
              </div>
              <div className="ItemLink cart">
                <NavLink to="/cart">
                  <AiOutlineShoppingCart className="coloredIcon" />
                  {findTotalQuantity > 0 && (
                    <span className="cart-count">{findTotalQuantity}</span>
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
