import { Link } from "react-router-dom";
import lookBook from "../../assets/images/SpringLookbook.webp";
import { useTranslation } from "react-i18next";

const LookBook = () => {
  const { t } = useTranslation();
  return (
    <div className="lookBook">
      <div className="container">
        <div className="row">
          <div className="lookBook-media">
            <img src={lookBook} alt="lookBook" />
          </div>
          <div className="lookBook-content">
            <h2>{t("home-sections.lookbook.lookbook_content_h2")}</h2>
            <p>{t("home-sections.lookbook.lookbook_content_p")}</p>
            <div className="lookBook-btn">
              <Link to="/lookbook" className="btn">
                {t("home-sections.lookbook.lookbook_content_button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookBook;
