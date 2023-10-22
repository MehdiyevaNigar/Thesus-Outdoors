import { useContext, useEffect, useRef } from "react";
import { CheckoutCard } from "../components/CheckoutCard";
import { CartContext } from "../cartContext";
import { formatImgUrl } from "../utils";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { cart, removeFromCart, addToCart, updateQuantity } =
    useContext(CartContext);

  const findTotalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const scrollToTopRef = useRef();
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const { t } = useTranslation();
  if (cart.length === 0) {
    return (
      <>
        <div className="cart-1" ref={scrollToTopRef}>
          <div className="container">
            <h1>{t("cart.empty-cart.h1")}</h1>
            <Link to="/shop-all" className="cart-btn">
              {t("cart.empty-cart.btn")}
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="cart" ref={scrollToTopRef}>
        <div className="container">
          <div className="title">
            <h1>{t("cart.product-cart.h1")}</h1>
            <Link to="/shop-all" className="shopping">
              {t("cart.product-cart.btn")}
            </Link>
          </div>
          <hr className="line" />
          {cart.map((product) => (
            <CheckoutCard
              key={`${product.id}-${product.selectedSize}`}
              id={product.id}
              title={product.title}
              price={product.price}
              imgUrl={formatImgUrl(product.productImage[0])}
              quantity={product.quantity}
              onClick={() => removeFromCart(product.id, product.selectedSize)}
              onIncrement={() => addToCart(product.id, product.selectedSize)}
              onDecrement={() =>
                updateQuantity(
                  product.id,
                  product.selectedSize,
                  product.quantity - 1
                )
              }
              selectedSize={product.selectedSize}
            />
          ))}
          <hr className="line" />
        </div>
      </div>
      <div className="cart-total">
        <div className="container">
          <p>
            {t("cart.product-cart.total")}: m.{findTotalPrice}.00 AZN
          </p>
          <Link to="/checkout" className="check-btn">
            {t("cart.product-cart.checkout")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
