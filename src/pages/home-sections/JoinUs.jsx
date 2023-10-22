import { useTranslation } from "react-i18next";
import joinUs1 from "../../assets/images/join-us-1.webp";
import joinUs2 from "../../assets/images/join-us-2.webp";
import joinUs3 from "../../assets/images/join-us-3.webp";
import joinUs4 from "../../assets/images/join-us-4.webp";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const { t } = useTranslation();
  return (
    <div className="joinUs">
      <h2>{t("home-sections.join-us.h2")}</h2>
      <h2>
        <Link to="/">@Thesus_Outdoors</Link>
      </h2>
      <div className="container">
        <div className="row">
          <div className="joinUs-cards">
            <img src={joinUs1} alt="1" />
          </div>
          <div className="joinUs-cards">
            <img src={joinUs2} alt="2" />
          </div>
          <div className="joinUs-cards">
            <img src={joinUs3} alt="3" />
          </div>
          <div className="joinUs-cards">
            <img src={joinUs4} alt="4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
