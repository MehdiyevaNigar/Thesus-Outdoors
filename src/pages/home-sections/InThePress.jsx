import oprah from "../../assets/images/oprah.avif";
import timesMagazine from "../../assets/images/magazine.avif";
import patrol from "../../assets/images/patrol.avif";
import outsideMagazine from "../../assets/images/outside-magazine-logo.avif";
import { useTranslation } from "react-i18next";

const InThePress = () => {
  const { t } = useTranslation();
  return (
    <div className="inThePress">
      <h2>{t("home-sections.in-the-press.h2")}</h2>
      <div className="container">
        <div className="row">
          <div className="press">
            <img src={oprah} alt="oprah" />
          </div>
          <div className="press">
            <img src={timesMagazine} alt="magazine" />
          </div>
          <div className="press">
            <img src={patrol} alt="patrol" />
          </div>
          <div className="press">
            <img src={outsideMagazine} alt="magazine" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InThePress;
