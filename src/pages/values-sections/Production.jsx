import { useTranslation } from "react-i18next";
import production from "../../assets/images/production.webp";

const Production = () => {
  const { t } = useTranslation();
  return (
    <div className="production">
      <div className="container">
        <div className="row">
          <div className="production-media">
            <img src={production} alt="production" />
          </div>
          <div className="production-content">
            <h2>{t("values-sections.production.h2")}</h2>
            <p>{t("values-sections.production.p")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
