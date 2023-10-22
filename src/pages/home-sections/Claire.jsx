import { useTranslation } from "react-i18next";
import claire from "../../assets/images/claire.webp";

const Claire = () => {
  const { t } = useTranslation();
  return (
    <div className="claire">
      <div className="container">
        <div className="row">
          <div className="claire-content">
            <h1>*****</h1>
            <em>{t("home-sections.claire.em")}</em>
            <h5>CLAIRE</h5>
          </div>
          <div className="claire-media">
            <img src={claire} alt="claire" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claire;
