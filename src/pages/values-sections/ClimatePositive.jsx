import { useTranslation } from "react-i18next";
import climate from "../../assets/images/climate.webp";

const ClimatePositive = () => {
  const { t } = useTranslation();
  return (
    <div className="climatePositive">
      <div className="container">
        <div className="row">
          <div className="climatePositive-content">
            <h2>{t("values-sections.climate-positive.h2")}</h2>
            <p>{t("values-sections.climate-positive.p")}</p>
          </div>
          <div className="climatePositive-media">
            <img src={climate} alt="climate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimatePositive;
