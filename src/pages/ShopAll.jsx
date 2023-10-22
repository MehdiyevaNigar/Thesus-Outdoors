import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { formatImgUrl } from "../utils";
import { ProductCard } from "../components/ProductCard";
import { CartContext } from "../cartContext";
import { useTranslation } from "react-i18next";

const ShopAll = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const scrollToTopRef = useRef();
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const { t } = useTranslation();
  return (
    <div className="shopAll" ref={scrollToTopRef}>
      <div className="container">
        <h2>{t("shop-all.h2")}</h2>
        <p>
          {products.length} {t("shop-all.p")}
        </p>
        <div className="shopAll-products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              defaultImage={formatImgUrl(product.productImage[0])}
              hoverImage={formatImgUrl(product.productImage[1])}
              sizes={product.sizes}
              defaultSize={product.sizes[0]}
              onClick={(productId, size) => addToCart(productId, size)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
