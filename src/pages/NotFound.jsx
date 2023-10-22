import { useEffect } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const NotFound = () => {
  const scrollToTopRef = useRef();
  
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const { t } = useTranslation();
  return (
    <div className="notFound" ref={scrollToTopRef}>
      <div className="container">
        <div className="row">
          <h3>404</h3>
          <h2>{t("not-found.h2")}</h2>
          <Link to="/shop-all" className="btn">
            {t("not-found.btn")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
