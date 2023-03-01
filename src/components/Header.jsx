import React from "react";
import "../assets/css/header.scss";
import logoSvg from "../assets/images/logo.svg";
import { GrLanguage } from "react-icons/gr";
import MenuDrawer from "./MenuDrawer";
const Header = () => {
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
          <li className="header__container__navs__li ">ana səhifə</li>
          <li className="header__container__navs__li ">haqqımızda</li>
          <li className="header__container__navs__li ">fəaliyyətimiz</li>
          <li className="header__container__navs__li ">əlaqə</li>
          <li className="header__container__navs__li ">
            <GrLanguage />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
