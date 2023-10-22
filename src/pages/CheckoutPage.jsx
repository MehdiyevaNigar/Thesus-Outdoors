import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../cartContext";
import { formatImgUrl } from "../utils";
import { useForm } from "react-hook-form";
import SweetAlert from "react-bootstrap-sweetalert";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const scrollToTopRef = useRef();
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = () => {
    reset();
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
    clearCart();
    navigate("/");
  };

  const { t } = useTranslation();

  return (
    <div className="checkout" ref={scrollToTopRef}>
      <div className="container">
        <h1>{t("checkout-page.form.h1")}</h1>
        <div className="row">
          <div className="checkout-form">
            <h3>{t("checkout-page.form.h31")}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-data">
                <label htmlFor="email">{t("checkout-page.form.email")}</label>
                <input
                  type="email"
                  placeholder={t("checkout-page.form.email")}
                  id="email"
                  {...register("email", {
                    required: t("checkout-page.form.required1"),
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: t("checkout-page.form.message1"),
                    },
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>

              <h3>{t("checkout-page.form.h32")}</h3>
              <div className="name">
                <div className="form-data">
                  <label htmlFor="fname">{t("checkout-page.form.fname")}</label>
                  <input
                    type="text"
                    name="fname"
                    placeholder={t("checkout-page.form.fname")}
                    id="fname"
                    {...register("fname", {
                      required: t("checkout-page.form.required2"),
                      minLength: {
                        value: 3,
                        message: t("checkout-page.form.message2"),
                      },
                      maxLength: {
                        value: 15,
                        message: t("checkout-page.form.message3"),
                      },
                    })}
                  />
                  {errors.fname && (
                    <p className="error">{errors.fname.message}</p>
                  )}
                </div>

                <div className="form-data">
                  <label htmlFor="lname">{t("checkout-page.form.lname")}</label>
                  <input
                    type="text"
                    name="lname"
                    placeholder={t("checkout-page.form.lname")}
                    id="lname"
                    {...register("lname", {
                      required: t("checkout-page.form.required3"),
                      minLength: {
                        value: 3,
                        message: t("checkout-page.form.message4"),
                      },
                      maxLength: {
                        value: 15,
                        message: t("checkout-page.form.message5"),
                      },
                    })}
                  />
                  {errors.lname && (
                    <p className="error">{errors.lname.message}</p>
                  )}
                </div>
              </div>

              <div className="form-data">
                <label htmlFor="address">
                  {t("checkout-page.form.address")}
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder={t("checkout-page.form.address")}
                  id="address"
                  {...register("address", {
                    required: t("checkout-page.form.required4"),
                    minLength: {
                      value: 3,
                      message: t("checkout-page.form.message6"),
                    },
                    maxLength: {
                      value: 20,
                      message: t("checkout-page.form.message7"),
                    },
                  })}
                />
                {errors.address && (
                  <p className="error">{errors.address.message}</p>
                )}
              </div>

              <h3>Payment</h3>
              <div className="form-data">
                <label htmlFor="card-num">
                  {t("checkout-page.form.card_num")}
                </label>
                <input
                  type="text"
                  name="card-num"
                  placeholder={t("checkout-page.form.card_num")}
                  maxLength={16}
                  id="card-num"
                  {...register("cardNum", {
                    required: t("checkout-page.form.required5"),
                    minLength: {
                      value: 16,
                      message: t("checkout-page.form.message8"),
                    },
                    maxLength: {
                      value: 16,
                      message: t("checkout-page.form.message9"),
                    },
                  })}
                />
                {errors.cardNum && (
                  <p className="error">{errors.cardNum.message}</p>
                )}
              </div>

              <div className="form-data">
                <label htmlFor="exp-date">
                  {t("checkout-page.form.exp_date")}
                </label>
                <input
                  type="text"
                  name="exp-date"
                  placeholder={t("checkout-page.form.exp_date")}
                  maxLength={5}
                  id="exp-date"
                  {...register("expDate", {
                    required: t("checkout-page.form.required6"),
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: t("checkout-page.form.message10"),
                    },
                  })}
                />
                {errors.expDate && (
                  <p className="error">{errors.expDate.message}</p>
                )}
              </div>

              <button type="submit">{t("checkout-page.form.btn")}</button>
            </form>
          </div>

          <SweetAlert
            success
            show={showAlert}
            title={t("checkout-page.form.sweetalert_title")}
            onConfirm={hideAlert}
          ></SweetAlert>

          <div className="checkout-payload">
            {cart.map((product) => (
              <div key={`${product.id}-${product.selectedSize}`}>
                <div className="left-1">
                  <div className="left">
                    <div className="img-container">
                      <img
                        src={formatImgUrl(product.productImage[0])}
                        alt={product.title}
                      />
                      <span>{product.quantity}</span>
                    </div>
                    <div className="content">
                      <h3>{product.title}</h3>
                      <p>{product.selectedSize}</p>
                    </div>
                  </div>
                  <div className="price">
                    <p>{`₼${product.price}.00`}</p>
                  </div>
                </div>
              </div>
            ))}
            <hr className="line" />
            <div className="total-price">
              <h2>{t("cart.product-cart.total")}</h2>
              <h2>₼{total}.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
