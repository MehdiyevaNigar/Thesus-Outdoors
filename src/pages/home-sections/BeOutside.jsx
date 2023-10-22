import { BsArrowRight } from "react-icons/bs";
import sun from "../../assets/images/sun.webp";
import rain from "../../assets/images/rain.webp";
import allWeather from "../../assets/images/all-weather.webp";
import snow from "../../assets/images/snow.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BeOutside = () => {
  const { t } = useTranslation();
  return (
    <div className="be-outside">
      <div className="be-outside-content">
        <h2>
          {t("footer.socially")} <br /> {t("footer.progressive")}
          <br /> {t("home-sections.be-outside.be_outside_title")}
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="be-outside-media">
            <Link to="/shop-all" className="boot">
              <div className="boot-media">
                <img src={sun} alt="sun" />
              </div>
              <div className="boot-content">
                <h3>{t("home-sections.be-outside.be_outside_subtitle")}</h3>
                <span>
                  <BsArrowRight />
                </span>
              </div>
            </Link>
            <Link to="/shop-all" className="boot">
              <div className="boot-media">
                <img src={rain} alt="rain" />
              </div>
              <div className="boot-content">
                <h3>{t("home-sections.be-outside.be_outside_subtitle2")}</h3>
                <span>
                  <BsArrowRight />
                </span>
              </div>
            </Link>
            <Link to="/shop-all" className="boot">
              <div className="boot-media">
                <img src={allWeather} alt="allWeather" />
              </div>
              <div className="boot-content">
                <h3>{t("home-sections.be-outside.be_outside_subtitle3")}</h3>
                <span>
                  <BsArrowRight />
                </span>
              </div>
            </Link>
            <Link to="/shop-all" className="boot">
              <div className="boot-media">
                <img src={snow} alt="snow" />
              </div>
              <div className="boot-content">
                <h3>{t("home-sections.be-outside.be_outside_subtitle4")}</h3>
                <span>
                  <BsArrowRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeOutside;
