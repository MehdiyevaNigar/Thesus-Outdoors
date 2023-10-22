import { useTranslation } from "react-i18next";
import whereWeAre from "../../assets/images/where-we-are.webp";

const WhereWeAre = () => {
  const { t } = useTranslation();
  return (
    <div className="whereWeAre">
      <div className="whereWeAre-media">
        <img src={whereWeAre} alt="where" />
      </div>
      <div className="whereWeAre-content">
        <h2>{t("values-sections.where-we-are.h2")}</h2>
        <p>{t("values-sections.where-we-are.p")}</p>
      </div>
    </div>
  );
};

export default WhereWeAre;
