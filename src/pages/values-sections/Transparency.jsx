import { useTranslation } from "react-i18next";

const Transparency = () => {
  const { t } = useTranslation();
  return (
    <div className="transparency">
      <div className="container">
        <div className="row">
          <h2>{t("values-sections.transparency.h2")}</h2>
          <p>{t("values-sections.transparency.p1")}</p>
          <p>{t("values-sections.transparency.p2")}</p>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
