import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const HeaderLangs = () => {
  const { t, i18n } = useTranslation();

  function clickLang(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <ul className="headerlangs">
      <li className="headerlangs__li" onClick={() => clickLang("en")}>
        english
      </li>
      <li className="headerlangs__li" onClick={() => clickLang("az")}>
        azərbaycan
      </li>
    </ul>
  );
};

export default HeaderLangs;
