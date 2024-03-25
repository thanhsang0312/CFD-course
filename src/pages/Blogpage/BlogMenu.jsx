import React from "react";
import { Link } from "react-router-dom";
import PATHS from "../../const/paths";

const BlogMenu = ({ categories, categoryId, _onChangeId }) => {
  return (
    <div className="blog__menu">
      <Link
        to={PATHS.BLOG.INDEX}
        className={`blog__menu-item ${categoryId === "" ? "active" : ""}`}
        onClick={() => _onChangeId("")}
      >
        Tất cả
      </Link>
      {categories?.map((item) => (
        <Link
          to={PATHS.BLOG.INDEX}
          className={`blog__menu-item ${
            categoryId == item?.id ? "active" : ""
          }`}
          key={item?.id}
          onClick={(e) => {
            e.preventDefault();
            _onChangeId(item?.id);
          }}
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default BlogMenu;
