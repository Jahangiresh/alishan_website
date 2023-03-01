import React from "react";
import logo from "../assets/images/logoWhite.svg";
const Footer = () => {
  return (
    <div className="footer bg-green">
      <div className="footer__container my-container">
        <div style={{ width: "283px" }} className="footer__container__content">
          <img className="footer__container__content__logo" src={logo} alt="" />
          <p className="text-light">
            <span className="txt-bold">Ünvan</span>: Nərimanov rayonu, Həsən
            Əliyev küçəsi 82F
          </p>{" "}
          <p className="text-light">
            <span className="txt-bold">Mail</span>: alishan_v-asif@gmail.com
          </p>{" "}
          <p className="text-light">
            <span className="txt-bold">Tel</span>: 012 465-42-22
          </p>
        </div>

        <div className="footer__container__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5294.444767100212!2d49.841461144478934!3d40.40133176642226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d612cc1de03%3A0x1ca48c16122aeebe!2s82f%20Academician%20Hasan%20Aliyev%20St%2C%20Baku!5e0!3m2!1sen!2saz!4v1677679921500!5m2!1sen!2saz"
            style={{
              width: "100%",
              height: "100%",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <img className="footer__container__content__logo2" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
