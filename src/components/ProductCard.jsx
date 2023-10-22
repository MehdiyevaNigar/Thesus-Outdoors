import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const ProductCard = ({
  id,
  title,
  price,
  defaultImage,
  hoverImage,
  sizes,
  defaultSize,
  onClick,
}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  useEffect(() => {
    setSelectedSize(defaultSize);
  }, [defaultSize]);

  const { t } = useTranslation();

  return (
    <div className="productCard">
      <Link to={`/products/${id}`}>
        <div className="img-container">
          <img
            className="product-image"
            src={isHovered ? hoverImage : defaultImage}
            alt={title}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </Link>

      <div>
        <h3 className="title">{title}</h3>
        <h4 className="price">{`m.${price}.00 AZN`}</h4>
      </div>

      <select
        className="product-size"
        onChange={handleSizeChange}
        value={selectedSize}
      >
        {sizes?.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      
      <button className="product-btn" onClick={() => onClick(id, selectedSize)}>
        {t("productTitles.add_to_cart")}
      </button>
    </div>
  );
};
