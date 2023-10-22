import thesus from "../assets/images/Thesus-white-logo.webp";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { FaCcAmex } from "react-icons/fa";
import { LiaCcApplePay } from "react-icons/lia";
import { FaCcDinersClub } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-top">
            <div className="thesus">
              <div className="logo">
                <img src={thesus} alt="thesus" />
              </div>
              <h2>
                {t("footer.socially")} <br /> {t("footer.progressive")}
              </h2>
              <ul>
                <li className="footerLink">
                  <NavLink>
                    <AiFillFacebook className="media" />
                  </NavLink>
                </li>
                <li className="footerLink">
                  <NavLink>
                    <AiOutlineInstagram className="media" />
                  </NavLink>
                </li>
                <li className="footerLink">
                  <NavLink>
                    <FaTiktok className="media" />
                  </NavLink>
                </li>
                <li className="footerLink">
                  <NavLink>
                    <BsPinterest className="media" />
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="ourShop">
              <h2>{t("footer.our_shop")}</h2>
              <ul>
                <li>
                  <Link to="/shop-all" className="shop-details">
                    {t("footer.all_products")}
                  </Link>
                </li>
                <li>
                  <Link to="/weekend-boot" className="shop-details">
                    {t("footer.the_weekend_boot")}
                  </Link>
                </li>
                <li>
                  <Link to="/weekend-boot" className="shop-details">
                    {t("footer.the_winter_weekend")}
                  </Link>
                </li>
                <li>
                  <Link to="/terrus-clog" className="shop-details">
                    {t("footer.the_terrus")}
                  </Link>
                </li>
                <li>
                  <Link to="/terrus-clog" className="shop-details">
                    {t("footer.accessories")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="help">
              <h2>{t("footer.help")}</h2>
              <ul>
                <li>
                  <Link to="/" className="shop-details">
                    {t("footer.size_guide")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="shop-details">
                    {t("footer.shipping_information")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="shop-details">
                    {t("footer.refund_policy")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="shop-details">
                    {t("footer.wear_and_care")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="aboutUs">
              <h2>{t("footer.about_us")}</h2>
              <ul>
                <li>
                  <Link to="/values" className="shop-details">
                    {t("navbar.values")}
                  </Link>
                </li>
                <li>
                  <Link to="/" className="shop-details">
                    {t("footer.contact_us")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="payment">
              <ul className="listPayment">
                <li>
                  <FaCcAmex className="card" />
                </li>
                <li>
                  <LiaCcApplePay className="card" />
                </li>
                <li>
                  <FaCcDinersClub className="card" />
                </li>
                <li>
                  <FaCcDiscover className="card" />
                </li>
                <li>
                  <FaCcAmazonPay className="card" />
                </li>
                <li>
                  <FaCcMastercard className="card" />
                </li>
                <li>
                  <FaCcPaypal className="card" />
                </li>
                <li>
                  <FaCcVisa className="card" />
                </li>
              </ul>
            </div>
            <div className="small">
              <ul>
                <li>{t("footer.shopify")}</li>
                <li>{t("footer.refund_policy")}</li>
                <li>{t("footer.privacy_policy")} </li>
                <li>{t("footer.terms_of_service")}</li>
                <li>{t("footer.shipping_policy")}</li>
                <li>{t("footer.contact_information")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
