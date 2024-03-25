import React from "react";
import { useMainContext } from "../../context/MainContext";

const HeaderHamburger = () => {
  const { handleShowNavbar, isShowNavbar } = useMainContext();
  return (
    <div
      className={`header__humburger ${!!isShowNavbar ? "--close" : ""}`}
      onClick={() => handleShowNavbar(!isShowNavbar)}
    >
      <div className="header__humburger-button">
        <span />
        <span />
        <span />
      </div>
      <div className="header__humburger-text">
        <span>Menu</span>
        <span>Đóng</span>
      </div>
    </div>
  );
};

export default HeaderHamburger;
