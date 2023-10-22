import { useTranslation } from "react-i18next";
import diversity from "../../assets/images/diversity.webp";

const Diversity = () => {
  const { t } = useTranslation();
  return (
    <div className="diversity">
      <div className="container">
        <div className="row">
          <div className="diversity-media">
            <img src={diversity} alt="diversity" />
          </div>
          <div className="diversity-content">
            <h2>{t("values-sections.diversity.h2")}</h2>
            <p>{t("values-sections.diversity.p1")}</p>
            <p>{t("values-sections.diversity.p2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diversity;
