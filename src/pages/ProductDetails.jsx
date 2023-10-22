import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../cartContext";
import { formatImgUrl } from "../utils";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity] = useState(1);

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product.id, selectedSize, quantity);
    }
  };

  const scrollToTopRef = useRef();
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const { t } = useTranslation();
  return (
    <div className="productDetails" ref={scrollToTopRef}>
      <div className="container">
        <div className="row">
          <div className="productDetails-left">
            <div className="product-images">
              {product?.productImage &&
                product?.productImage.map((image, index) => (
                  <img
                    key={index}
                    src={formatImgUrl(image)}
                    alt={`Product ${index}`}
                  />
                ))}
            </div>
          </div>

          <div className="productDetails-right">
            <p className="product-logo">THESUS</p>
            <h1 className="product-title">{product?.title}</h1>
            <p className="product-price">{`m.${product?.price}.00 AZN`}</p>
            <h6>{t("product-details.h6")}</h6>
            <h5>{t("product-details.h5")}</h5>
            
            <select
              className="product-size"
              onChange={(e) => setSelectedSize(e.target.value)}
              value={selectedSize}
            >
              <option value="">{t("product-details.option")}</option>
              {product?.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <button className="product-btn" onClick={handleAddToCart}>
              {t("productTitles.add_to_cart")}
            </button>
            <button className="shop-btn">
              <Link className="btn-2">{t("product-details.shop_btn")}</Link>
            </button>
            <p className="details">{t("product-details.p")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
