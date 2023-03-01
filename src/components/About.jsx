import React from "react";
import rombRight from "../assets/images/rombLittle.svg";
import rombLeft from "../assets/images/rombLittleLeft.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h2 className="txt-title about__content__title">haqqımızda</h2>
        <p className="txt-text m-0">
          “Alishan” şirkəti 20.07.1995-ci ildən qeydiyyata alınmışdır.
          Şirkətimizin direktoru Adil İsa Vahid oğludur. “Alishan” şirkətinin
          əsas fəaliyyəti ixtisaslaşdırılmış mağazalarda əczaçılıq mallarının
          pərakəndə satışıdır. Bundan əlavə fəaliyyətimizə ixtisaslaşdırılmış
          mağazalarda pərakəndə satış və otel xidmətləri də daxildir.
        </p>
      </div>
      <div className="about__faq bg-green">
        <img className="romb__img__left" src={rombLeft} alt="" />
        <img className="romb__img__right" src={rombRight} alt="" />
        <div className="about__faq__container my-container">
          <div className="about__faq__container__left">
            <h2 className="txt-title about__faq__container__left__title">
              Biz nə edirik?
            </h2>
            <p className="about__faq__container__left__text txt-text">
              Lorem ipsum dolor sit amet consectetur. Lectus donec lectus nunc
              porta. Ac lacus pharetra morbi felis ante. In porta sem tortor
              quam
            </p>
          </div>
          <div className="about__faq__container__right">
            <h2 className="txt-title about__faq__container__right__title">
              Niyə biz?
            </h2>
            <p className="about__faq__container__right__text txt-text">
              Lorem ipsum dolor sit amet consectetur. Lectus donec lectus nunc
              porta. Ac lacus pharetra morbi felis ante. In porta sem tortor
              quam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
