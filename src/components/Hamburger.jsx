import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-button" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div className="menu-items">
          <Link to="/new-in" className="items" onClick={closeMenu}>
            {t("navbar.new_in")}
          </Link>
          <Link to="/bestsellers" className="items" onClick={closeMenu}>
            {t("navbar.bestsellers")}
          </Link>
          <Link to="/weekend-boot" className="items" onClick={closeMenu}>
            {t("navbar.weekend_boot")}
          </Link>
          <Link to="/terrus-clog" className="items" onClick={closeMenu}>
            {t("navbar.terrus_clog")}
          </Link>
          <Link to="/shop-all" className="items" onClick={closeMenu}>
            {t("navbar.shop_all")}
          </Link>
          <Link to="/values" className="items" onClick={closeMenu}>
            {t("navbar.values")}
          </Link>
          <div className="language">
            <button onClick={() => i18n.changeLanguage("en")}>
              {t("languages.en")}
            </button>
            <button onClick={() => i18n.changeLanguage("az")}>
              {t("languages.az")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
