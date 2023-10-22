import { useTranslation } from "react-i18next";
import { RiDeleteBinLine } from "react-icons/ri";

export const CheckoutCard = ({
  id,
  title,
  price,
  imgUrl,
  onClick,
  quantity,
  onDecrement,
  onIncrement,
  selectedSize,
}) => {
  const { t } = useTranslation();
  return (
    <div className="checkoutCard">
      <div className="row">
        <div className="checkoutCard-left">
          <div className="img-container">
            <img src={imgUrl} alt="product" />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <h4>{`m.${price}.00`}</h4>
            <h4>{t("productTitles.sizeLabel", { selectedSize })}</h4>
          </div>
        </div>
        <div className="checkoutCard-right">
          <button
            onClick={onDecrement}
            disabled={quantity === 1}
            className={quantity === 1 ? "disabled-button" : ""}
          >
            -
          </button>
          <h4>{quantity}</h4>
          <p onClick={onIncrement}>+</p>
        </div>
        <h2
          onClick={() => onClick(id, selectedSize)}
          className="checkoutCard-btn"
        >
          <RiDeleteBinLine className="btn" />
        </h2>
      </div>
    </div>
  );
};
