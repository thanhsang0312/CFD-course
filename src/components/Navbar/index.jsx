import React from "react";
import { NavLink } from "react-router-dom";
import { useMainContext } from "../../context/MainContext";

const Navbar = () => {
  const { handleShowNavbar, isShowNavbar } = useMainContext();

  return (
    <nav className="navbar">
      <ul className="navbar__main">
        <li className="navbar__link">
          <NavLink
            to={"/"}
            className="navbar__item"
            onClick={() => handleShowNavbar(!isShowNavbar)}
          >
            Trang chủ
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="/about"
            className="navbar__item"
            onClick={() => handleShowNavbar(!isShowNavbar)}
          >
            Về CFD Circle
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="/course"
            className="navbar__item"
            onClick={() => handleShowNavbar(!isShowNavbar)}
          >
            Khóa học
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="/blog"
            className="navbar__item"
            onClick={() => handleShowNavbar(!isShowNavbar)}
          >
            Bài viết
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink
            to="/contact"
            className="navbar__item"
            onClick={() => handleShowNavbar(!isShowNavbar)}
          >
            Liên hệ
          </NavLink>
        </li>
      </ul>
      <div className="navbar__overlay" />
    </nav>
  );
};

export default Navbar;
