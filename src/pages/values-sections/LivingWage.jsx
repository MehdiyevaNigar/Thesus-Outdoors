import { useTranslation } from "react-i18next";
import livingWage from "../../assets/images/living-wage.webp";

const LivingWage = () => {
  const { t } = useTranslation();
  return (
    <div className="livingWage">
      <div className="container">
        <div className="row">
          <div className="livingWage-content">
            <h2>{t("values-sections.living-wage.h2")}</h2>
            <p>{t("values-sections.living-wage.p")}</p>
          </div>
          <div className="livingWage-media">
            <img src={livingWage} alt="livingWage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingWage;
