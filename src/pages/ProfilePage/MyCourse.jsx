<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const MyCourse = () => {
  return (
    <div className="tab__content-item">
      <div className="courses__list">
        <div className="courses__list-item">
          <div className="img">
            <Link to="/course/:courseId">
              <img
                src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg"
                alt="Khóa học CFD"
                className="course__thumbnail"
              />
              <span className="course__img-badge badge">Offline | Online</span>
            </Link>
          </div>
          <div className="content">
            <p className="label">Front-End</p>
            <h3 className="title --t3">
              <Link to="/course/:courseId">Frontend Newbie</Link>
            </h3>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="price">
                <strong>4.500.000đ</strong>
              </div>
            </div>
            <div className="content__action">
              <Link to="/course-order" className="btn btn--primary">
                Đăng ký ngay
              </Link>
              <Link to="/course/:courseId" className="btn btn--default">
                <img src="img/icon-paper.svg" alt="icon paper" />
              </Link>
            </div>
          </div>
        </div>
        <div className="courses__list-item">
          <div className="img">
            <Link to="/course/:courseId">
              <img
                src="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg"
                alt="Khóa học CFD"
                className="course__thumbnail"
              />
              <span className="course__img-badge badge">Offline | Online</span>
            </Link>
          </div>
          <div className="content">
            <p className="label">Front-End</p>
            <h3 className="title --t3">
              <a href="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg">
                Web Responsive
              </a>
            </h3>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="price">
                <strong>4.900.000đ</strong>
              </div>
            </div>
            <div className="content__action">
              <Link to="/course-order" className="btn btn--primary">
                Đăng ký ngay
              </Link>
              <Link to="/course/:courseId" className="btn btn--default">
                <img src="img/icon-paper.svg" alt="icon paper" />
              </Link>
            </div>
          </div>
        </div>
=======
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import CourseItem from "../../components/CourseItem";
import { CourseTypes } from "../../const/generals";

const MyCourse = () => {
  const { courseInfo, handleGetProfileCourse } = useAuthContext();

  useEffect(() => {
    if (courseInfo?.length === 0) {
      handleGetProfileCourse();
    }
  }, []);

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {!!!courseInfo.length && <p>Không có dữ liệu.</p>}
        {!!courseInfo.length &&
          courseInfo.map((item, index) => (
            <CourseItem
              key={item.id || new Date().getTime() + index}
              type={CourseTypes.normal}
              {...item?.course}
            />
          ))}
>>>>>>> 5597a8e (update)
      </div>
    </div>
  );
};

export default MyCourse;
