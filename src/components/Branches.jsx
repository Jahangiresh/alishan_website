import React from "react";
import { useSelector } from "react-redux";
import { getAllBranches, getStatus } from "../features/branchSlice";
import LoadingBox from "./LoadingBox";
import { useTranslation } from "react-i18next";

const Branches = () => {
  const branches = useSelector(getAllBranches);
  const status = useSelector(getStatus);
  const { t } = useTranslation();

  return status === "pending" ? (
    <LoadingBox />
  ) : (
    <div id="activity" className="branches">
      <div className="branches__container my-container">
        <div className="branches__container__header">
          <div className="branches__container__header__content">
            <h2 className="txt-title">
              {t("Fəaliyyətimizdə olan müəssisələr")}
            </h2>
            <p className="txt-text">
              Lorem ipsum dolor sit amet consectetur. Lectus donec lectus nunc
              porta. Ac lacus pharetra morbi felis ante. In porta sem tortor
              quam
            </p>
          </div>
        </div>
        <div className="branches__container__ul">
          {branches &&
            branches.map((branch) => (
              <li key={branch.id} className="branches__container__ul__li">
                <div className="branches__container__ul__li__content">
                  <h3 className="txt-title txt-green"> • {branch.name}</h3>
                  <p>
                    <span className="txt-bold">{t("Ünvan")}</span>: {branch.address}
                  </p>
                  <p>
                    <span className="txt-bold">{t("Tel")}</span>: {branch.telephone}
                  </p>
                  <p>
                    <span className="txt-bold">{t("Mail")}</span>: {branch.email}
                  </p>
                </div>
                <div className="branches__container__ul__li__image">
                  <img
                    src={`https://alishancompany.az/images/${branch.imagePath}`}
                    alt={branch && branch.name}
                  />
                </div>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
