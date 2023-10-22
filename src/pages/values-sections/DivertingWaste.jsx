import { useTranslation } from "react-i18next";
import wasting from "../../assets/images/wasting.webp";

const DivertingWaste = () => {
  const { t } = useTranslation();
  return (
    <div className="wasting">
      <div className="container">
        <div className="row">
          <div className="wasting-media">
            <img src={wasting} alt="wasting" />
          </div>
          <div className="wasting-content">
            <h2>{t("values-sections.diverting.h2")}</h2>
            <p>{t("values-sections.diverting.p")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivertingWaste;
