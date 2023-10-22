import { useTranslation } from "react-i18next";

const OurValues = () => {
  const { t } = useTranslation();
  return (
    <div className="ourValues">
      <h2>{t("values-sections.our-values.h2")}</h2>
      <div className="container">
        <div className="row">
          <div className="value-card">
            <div className="value-card-title">
              <h3>{t("values-sections.our-values.h31")}</h3>
            </div>
            <div className="value-card-content">
              <p>{t("values-sections.our-values.p1")}</p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-card-title">
              <h3>{t("values-sections.our-values.h32")}</h3>
            </div>
            <div className="value-card-content">
              <p>{t("values-sections.our-values.p2")}</p>
            </div>
          </div>
          <div className="value-card">
            <div className="value-card-title">
              <h3>{t("values-sections.our-values.h33")}</h3>
            </div>
            <div className="value-card-content">
              <p>{t("values-sections.our-values.p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
