import React from "react";

const Branches = () => {
  const branches = [
    {
      id: 1,
      name: "Təbib aptek / Mərkəz",
      address: "Həsən Əliyev 82F (264) (Kral Şadlıq sarayının yanı) ",
      tel: "012 465-82-25, 055 302-63-68, 012 555-13-75",
      email: "Tel: 012 465-82-25, 055 302-63-68, 012 555-13-75",
      img: "https://pliki.rynekaptek.pl/i/01/29/21/012921_r2_940.jpg",
    },
    {
      id: 2,
      name: "Təbib aptek / Mərkəz",
      address: "Həsən Əliyev 82F (264) (Kral Şadlıq sarayının yanı) ",
      tel: "012 465-82-25, 055 302-63-68, 012 555-13-75",
      email: "Tel: 012 465-82-25, 055 302-63-68, 012 555-13-75",
      img: "https://banker.az/wp-content/uploads/2021/04/aptek.jpeg",
    },
    {
      id: 3,
      name: "Təbib aptek / Mərkəz",
      address: "Həsən Əliyev 82F (264) (Kral Şadlıq sarayının yanı) ",
      tel: "012 465-82-25, 055 302-63-68, 012 555-13-75",
      email: "Tel: 012 465-82-25, 055 302-63-68, 012 555-13-75",
      img: "https://pliki.rynekaptek.pl/i/01/29/21/012921_r2_940.jpg",
    },
  ];
  return (
    <div id="activity" className="branches">
      <div className="branches__container my-container">
        <div className="branches__container__header">
          <div className="branches__container__header__content">
            <h2 className="txt-title">Fəaliyyətimizdə olan müəssisələr</h2>
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
                    <span className="txt-bold">Ünvan</span>: {branch.address}
                  </p>
                  <p>
                    <span className="txt-bold">Tel</span>: {branch.tel}
                  </p>
                  <p>
                    <span className="txt-bold">Mail</span>: {branch.email}
                  </p>
                </div>
                <div className="branches__container__ul__li__image">
                  <img src={branch.img} alt="asd" />
                </div>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;
