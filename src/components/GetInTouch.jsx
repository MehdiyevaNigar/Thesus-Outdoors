import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const GetInTouch = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
  };
  const { t } = useTranslation();

  return (
    <div className="getInTouch">
      <div className="container">
        <div className="row">
          {submitted ? (
            <div className="thanks-message">
              <h2>{t("get-in-touch.touch")}</h2>
              <p>{t("get-in-touch.offers")}</p>
              <h2>{t("get-in-touch.thanks")}</h2>
            </div>
          ) : (
            <>
              <h2>{t("get-in-touch.touch")}</h2>
              <p>{t("get-in-touch.offers")}</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="sign-up">
                  <input
                    placeholder={t("get-in-touch.placeholder")}
                    type="email"
                    {...register("email", {
                      required: t("get-in-touch.required"),
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: t("get-in-touch.message"),
                      },
                    })}
                  />
                  <button type="submit">{t("get-in-touch.send")}</button>
                </div>
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
