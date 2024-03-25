import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import PATHS from "../../const/paths";

const BlogItem = ({ author, createAt, image, name, slug, category }) => {
  const detailPath = PATHS.BLOG.INDEX + `/${slug}`;
  return (
    <div className="blog__list-item">
      <div className="img">
        <Link to={detailPath}>
          <img src={image} alt="Khóa học CFD" className="course__thumbnail" />
        </Link>
      </div>
      <div className="content">
        <p className="label">{category?.name}</p>
        <h2 className="title --t3">
          <Link to={detailPath}>{name}</Link>
        </h2>
        <div className="content__info">
          <div className="user">
            <div className="user__img">
              <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
            </div>
            <p className="user__name">{author}</p>
          </div>
          <div className="date">{moment(createAt).format("DD/MM/YYYY")}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
