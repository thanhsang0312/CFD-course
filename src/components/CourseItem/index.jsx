import React from "react";
import { Link } from "react-router-dom";
import PATHS from "../../const/paths";
import moment from "moment";
import { CourseTypes } from "../../const/generals";
import formatNumber from "../../utils/formatCurrency";

const CourseItem = ({
  image,
  slug,
  name,
  teams,
  startDate,
  tags,
  price,
  title,
  type = CourseTypes.normal,
}) => {
  const teacherInfo = teams?.find((item) => item.tags.includes("Teacher"));
  const detailPath = PATHS.COURSE.INDEX + `/${slug}`;
  const orderPath = "/course-order" + `/${slug}`;
  if (type === CourseTypes.coming) {
    return (
      <div className="coursecoming__item">
        <div className="coursecoming__item-img">
          <Link to={detailPath}>
            <img src={image || ""} alt="Khóa học sắp ra mắt CFD" />
          </Link>
        </div>
        <div className="coursecoming__item-content">
          <p className="category label">Front-end</p>
          <h2 className="title --t2">
            <Link to={detailPath}>{name || ""}</Link>
          </h2>
          {teacherInfo && (
            <div className="user">
              <div className="user__img">
                <img src={teacherInfo.image || ""} alt="Avatar teacher" />
              </div>
              <p className="user__name">{teacherInfo.name || ""}</p>
            </div>
          )}
          <div className="info">
            {startDate && (
              <div className="labeltext">
                <span className="label --blue">Ngày khai giảng</span>
                <p className="title --t2">
                  {moment(startDate).format("DD/MM/YYYY")}
                </p>
              </div>
            )}
            {tags?.length > 0 && (
              <div className="labeltext">
                <span className="label --blue">Hình thức học</span>
                <p className="title --t2">{tags.join(" | ")}</p>
              </div>
            )}
          </div>
          <div className="btnwrap">
            <Link to={orderPath} className="btn btn--primary">
              Đăng Ký Học
            </Link>
            <Link to={detailPath} className="btn btn--border --black">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="courses__list-item">
        <div className="img">
          <Link to={detailPath}>
            <img src={image} alt="Khóa học CFD" className="course__thumbnail" />
            <span className="course__img-badge badge">Offline | Online</span>
          </Link>
        </div>
        <div className="content">
          <p className="label">{name}</p>
          <h3 className="title --t3">
            <Link to={detailPath}>{title}</Link>
          </h3>
          <div className="content__info">
            {teacherInfo && (
              <div className="user">
                <div className="user__img">
                  <img src={teacherInfo.image || ""} alt="Avatar teacher" />
                </div>
                <p className="user__name">{teacherInfo.name || ""}</p>
              </div>
            )}
            <div className="price">
              <strong>{formatNumber(price)}</strong>
            </div>
          </div>
          <div className="content__action">
            <Link to="/course-order" className="btn btn--primary">
              Đăng ký ngay
            </Link>
            <Link to={detailPath} className="btn btn--default">
              <img src="/img/icon-paper.svg" alt="icon paper" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default CourseItem;
