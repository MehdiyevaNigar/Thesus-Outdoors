import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import scarlet from "../../assets/images/Bestsellers_-_Scarlet.webp";
import rain from "../../assets/images/Bestsellers_-_Rain.webp";
import farah from "../../assets/images/Bestsellers_-_Farrah.webp";
import sage from "../../assets/images/Bestsellers_-_Sage_Terrus.webp";
import { useTranslation } from "react-i18next";

const BestSellers = () => {
  const { t } = useTranslation();
  return (
    <div className="bestSellers">
      <h2>{t("home-sections.home-bestsellers.home_bestsellers_title")}</h2>
      <div className="container">
        <div className="row">
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="scarlet">
                <img src={scarlet} alt="scarlet" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rain">
                <img src={rain} alt="rain" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="farah">
                <img src={farah} alt="farah" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sage">
                <img src={sage} alt="sage" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
