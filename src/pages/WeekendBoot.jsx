import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { formatImgUrl } from "../utils";
import { CartContext } from "../cartContext";
import { useTranslation } from "react-i18next";

const WeekendBoot = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const totalFeaturedProducts = 12;

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        const filteredProducts = res.data.slice(8, totalFeaturedProducts);
        setFeaturedProducts(filteredProducts);
      })
      .catch((err) => console.error(err));
  }, []);

  const scrollToTopRef = useRef();
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const { t } = useTranslation();
  return (
    <div className="new-in" ref={scrollToTopRef}>
      <div className="container">
        <h2>{t("weekend-boot.h2")}</h2>
        <p>
          {featuredProducts.length} {t("weekend-boot.p")}
        </p>
        <div className="featured-products">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              defaultImage={formatImgUrl(product.productImage[0])}
              hoverImage={formatImgUrl(product.productImage[1])}
              sizes={product.sizes}
              defaultSize="36"
              onClick={(productId, size) => addToCart(productId, size)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekendBoot;
