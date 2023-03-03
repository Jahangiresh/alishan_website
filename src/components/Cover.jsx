import React from "react";
import { useTranslation } from "react-i18next";
import romb from "../assets/images/rombDesign.svg";
const Cover = () => {
  const { t } = useTranslation();


  return (

    <div id="mainpage" className="cover bg-green">
      <div className="cover__container my-container">
        <div className="cover__container__content">
          <h1 className="cover__container__content__title txt-slogan">
          {t("Fərqli xidmətlər tək ünvanda")}.
          </h1>
          <p className="cover__container__content__text txt-text">
          {t(
           "Şirkət əczaçılıq və nəzdnində fəaliyyət göstərən otel, market şəbəkələri ilə sizlərə bir çox xidməti təklif edir"
          )}
          </p>
        </div>
        <img className="romb__img" src={romb} alt="" />
      </div>
    </div>
  );
};

export default Cover;
