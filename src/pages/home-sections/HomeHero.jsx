import { useTranslation } from "react-i18next";
import hero from "../../assets/images/Hero_Image.webp";
import { Link } from "react-router-dom";

const HomeHero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={hero} alt="hero" />
      </div>
      <div className="hero-content">
        <h2>{t("home-sections.home-hero.hero_title")}</h2>
        <div className="hero-button">
          <Link to="/shop-all" className="btn">
            {t("home-sections.home-hero.hero_button")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
