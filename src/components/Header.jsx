import React from "react";
import "../assets/css/header.scss";
import logoSvg from "../assets/images/logo.svg";
import { GrLanguage } from "react-icons/gr";
import MenuDrawer from "./MenuDrawer";
import { useTranslation } from "react-i18next";
import HeaderLangs from "./HeaderLangs";

import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="header__container my-container">
        <div className="header__container__logo">
          <img src={logoSvg} alt="" />
        </div>
        <span className="hamburger__menu d-block d-md-none">
          <MenuDrawer />
        </span>
        <ul className="header__container__navs">
          <li className="header__container__navs__li ">
            {" "}
            <AnchorLink className="default-link" offset="100" href="#mainpage">
              {t("Ana səhifə")}
            </AnchorLink>
          </li>
          <li className="header__container__navs__li ">
            <AnchorLink className="default-link" offset="100" href="#about">
              {t("Haqqımızda")}
            </AnchorLink>
          </li>
          <li className="header__container__navs__li ">
            <AnchorLink className="default-link" offset="100" href="#activity">
              {t("Fəaliyyətimiz")}
            </AnchorLink>
          </li>
          <li className="header__container__navs__li ">
            <AnchorLink className="default-link" offset="100" href="#contact">
              {t("Əlaqə")}
            </AnchorLink>
          </li>
          <li className="header__container__navs__li pos-rel lang__li">
            <GrLanguage />
            <HeaderLangs />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
