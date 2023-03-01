import React from "react";
import romb from "../assets/images/rombDesign.svg";
const Cover = () => {
  return (
    <div id="mainpage" className="cover bg-green">
      <div className="cover__container my-container">
        <div className="cover__container__content">
          <h1 className="cover__container__content__title txt-slogan">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="cover__container__content__text txt-text">
            Lorem ipsum dolor sit amet consectetur. Lectus donec lectus nunc
            porta. Ac lacus pharetra morbi felis ante. In porta sem tortor quam.
            Arcu elit elementum dictum nisi bibendum nec aenean ornare commodo.
          </p>
        </div>
        <img className="romb__img" src={romb} alt="" />
      </div>
    </div>
  );
};

export default Cover;
