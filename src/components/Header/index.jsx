import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/MainContext";
import HeaderHamburger from "./HeaderHamburger";
import HeaderLogo from "./HeaderLogo";
import HeaderModal from "./HeaderModal";

const Header = () => {
  const { handleShowNavbar, isShowNavbar } = useMainContext();
  useEffect(() => {
    function setBgHeader(scrollY) {
      let header = $("header");
      if (scrollY > header.height()) {
        header.addClass("--bgwhite");
      } else {
        header.removeClass("--bgwhite");
      }
    }
    function scrollBgHeader() {
      let scrollY = $(window).scrollTop();
      if ($(".header").hasClass("--transparent")) {
        setBgHeader(scrollY);
      }
    }

    window.addEventListener("scroll", scrollBgHeader);

    return () => {
      window.removeEventListener("scroll", scrollBgHeader);
    };
  }, []);

  useEffect(() => {
    if (isShowNavbar) {
      $("body").addClass("menu-show");
    } else {
      $("body").removeClass("menu-show");
    }
  }, [isShowNavbar]);

  return (
    <header className="header --transparent">
      <div className="container-fluid">
        <HeaderHamburger />
        <HeaderLogo />
        <HeaderModal />
      </div>
    </header>
  );
};

export default Header;
