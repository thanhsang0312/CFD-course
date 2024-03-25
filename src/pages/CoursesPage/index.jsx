import React from "react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
    <main className="mainwrapper courses --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Tất cả khoá học</h2>
          </div>
        </div>
        <div className="courses__list">
          <div className="courses__list-item">
            <div className="img">
              <Link to="/course/:courseId">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg"
                  alt="Khóa học CFD"
                  className="course__thumbnail"
                />
                <span className="course__img-badge badge">
                  Offline | Online
                </span>
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
                <span className="course__img-badge badge">
                  Offline | Online
                </span>
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
          <div className="courses__list-item">
            <div className="img">
              <Link to="/course/:courseId">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/JUVoVxn36lQtCl20hHoEPMo8JJENBX5qXfI1U13k.jpg"
                  alt="Khóa học CFD"
                  className="course__thumbnail"
                />
                <span className="course__img-badge badge">
                  Offline | Online
                </span>
              </Link>
            </div>
            <div className="content">
              <p className="label">Front-End</p>
              <h3 className="title --t3">
                <a href="#">Frontend Master</a>
              </h3>
              <div className="content__info">
                <div className="user">
                  <div className="user__img">
                    <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                  </div>
                  <p className="user__name">Trần Nghĩa</p>
                </div>
                <div className="price">
                  <strong>14.700.000đ</strong>
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
                  src="https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg"
                  alt="Khóa học CFD"
                  className="course__thumbnail"
                />
                <span className="course__img-badge badge">
                  Offline | Online
                </span>
              </Link>
            </div>
            <div className="content">
              <p className="label">Front-End</p>
              <h3 className="title --t3">
                <Link to="/course/:courseId">ReactJS Master</Link>
              </h3>
              <div className="content__info">
                <div className="user">
                  <div className="user__img">
                    <img src="img/avatar_nghia.jpg" alt="Avatar teacher" />
                  </div>
                  <p className="user__name">Trần Nghĩa</p>
                </div>
                <div className="price">
                  <strong>6.000.000đ</strong>
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
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
