import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
  const { t } = useTranslation();
  return (
    <div className="whoWeAre">
      <div className="container">
        <div className="row">
          <h2>{t("values-sections.who-we-are.h2")}</h2>
          <p>{t("values-sections.who-we-are.p1")}</p>
          <p>{t("values-sections.who-we-are.p2")}</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
