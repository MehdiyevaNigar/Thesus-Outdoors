import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    if (storedLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const onSubmit = (data) => {
    if (
      data.email === "mehdiyevanigar2004@gmail.com" &&
      data.password === "nigar1234"
    ) {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
    navigate("/");
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { t } = useTranslation();

  if (loggedIn) {
    return (
      <div className="logOut">
        <h2 className="account">{t("login-section.logout.h2")}</h2>
        <p className="details">Nigar Mehdiyeva</p>
        <div className="logOut-btn">
          <button onClick={handleLogout} className="btn">
            {t("login-section.logout.button")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form-title">{t("login-section.login.h2")}</h2>
        <div className="form-input">
          <input
            placeholder={t("login-section.login.email_placeholder")}
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email && (
            <p className="error">{t("login-section.login.email_error")}</p>
          )}
        </div>

        <div className="form-input pw-input">
          <input
            placeholder={t("login-section.login.pw_placeholder")}
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 3,
              pattern: /^(?=.*[a-z])(?=.*\d).+$/,
            })}
          />
          {errors.password && (
            <p className="error">{t("login-section.login.pw_error")}</p>
          )}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="eye-icon-btn"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>

        <div className="form-btn">
          <button type="submit" className="btn">
            {t("login-section.login.button")}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
