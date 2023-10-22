import { useTranslation } from "react-i18next";
import valuesHero from "../../assets/images/Values-hero.webp";

const ValuesHero = () => {
  const { t } = useTranslation();
  return (
    <div className="valuesHero">
      <div className="valuesHero-media">
        <img src={valuesHero} alt="hero" />
      </div>
      <div className="valuesHero-content">
        <p>THESUS OUTDOORS</p>
        <h2>{t("values-sections.values-hero.h2")}</h2>
      </div>
    </div>
  );
};

export default ValuesHero;
