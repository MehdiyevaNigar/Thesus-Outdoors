import { NavLink } from "react-router-dom";
import footwear from "../../assets/images/footwear-img.webp";
import { useTranslation } from "react-i18next";

const FootWear = () => {
  const { t } = useTranslation();
  return (
    <div className="footwear">
      <div className="container">
        <div className="row">
          <div className="footwear-media">
            <img src={footwear} alt="footwear" />
          </div>
          <div className="footwear-content">
            <div className="text">
              <h2>{t("home-sections.footwear.footwear_h2")}</h2>
              <p>{t("home-sections.footwear.footwear_p")}</p>
              <div className="footwear-btn">
                <NavLink to="/values" className="btn">
                  {t("home-sections.footwear.footwear_button")}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootWear;
