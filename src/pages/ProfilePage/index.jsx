import React from "react";
import { NavLink, Outlet } from "react-router-dom";
<<<<<<< HEAD

const ProfilePage = () => {
=======
import { useAuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { profile } = useAuthContext();
  const { firstName, introduce, email, phone, website } = profile || {};

>>>>>>> 5597a8e (update)
  return (
    <main className="mainwrapper profilepage">
      <div className="container">
        <div className="wrapper">
          <div className="sidebar">
            <div className="sidebar__info">
              <div className="useravatar">
                <div className="avatar">
                  <div className="img">
<<<<<<< HEAD
                    <img src="img/avatar_nghia.jpg" alt="avatar" />
                  </div>
                </div>
                <h3 className="title --t3">Trần Nghĩa</h3>
=======
                    <img src="/img/avatar_nghia.jpg" alt="avatar" />
                  </div>
                </div>
                <h3 className="title --t3">{firstName || ""}</h3>
>>>>>>> 5597a8e (update)
              </div>
            </div>
            <div className="sidebar__content">
              <h4>Giới thiệu</h4>
<<<<<<< HEAD
              <p className="description">
                Cheerful, cafeful,friendly. I like listening to music, traveling
                and coding, listening to music, traveling and coding.
              </p>
              <ul>
                <li>
                  <img src="img/icon-mail-outline.svg" alt="icon" />
                  <span>trannghia2018@gmail.com</span>
                </li>
                <li>
                  <img src="img/icon-phone-outline.svg" alt="icon" />
                  <span>098 9596 913</span>
                </li>
                <li>
                  <img src="img/icon-link.svg" alt="icon" />
                  <a href="#" target="_blank">
                    https://nghiatran.info
                  </a>
                </li>
              </ul>
              <div className="social">
                <a href="#">
                  <img src="img/icon-facebook-dark.svg" alt />
                </a>
                <a href="#">
                  <img src="img/icon-linkedin-dark.svg" alt />
                </a>
                <a href="#">
                  <img src="img/icon-youtube-dark.svg" alt />
                </a>
              </div>
=======
              <p className="description">{introduce || "--"}</p>
              <ul>
                <li>
                  <img src="/img/icon-mail-outline.svg" alt="icon" />
                  <span>{email || "--"}</span>
                </li>
                <li>
                  <img src="/img/icon-phone-outline.svg" alt="icon" />
                  <span>{phone || "--"}</span>
                </li>
                <li>
                  <img src="/img/icon-link.svg" alt="icon" />
                  {website ? (
                    <a href={website} target="_blank">
                      {website}
                    </a>
                  ) : (
                    "--"
                  )}
                </li>
              </ul>
              {/* <div className="social">
                <a href="#">
                  <img src="/img/icon-facebook-dark.svg" alt />
                </a>
                <a href="#">
                  <img src="/img/icon-linkedin-dark.svg" alt />
                </a>
                <a href="#">
                  <img src="/img/icon-youtube-dark.svg" alt />
                </a>
              </div> */}
>>>>>>> 5597a8e (update)
            </div>
          </div>
          <div className="tabwrap">
            <div className="tab">
              <div className="tab__title">
                <NavLink end to="/profile">
<<<<<<< HEAD
                  Thông tin cá nhânvg
=======
                  Thông tin cá nhân
>>>>>>> 5597a8e (update)
                </NavLink>
                <NavLink to="/profile/my-course">Khóa học của tôi</NavLink>
                <NavLink to="/profile/my-payment">Lịch sử thanh toán</NavLink>
              </div>
              <div className="tab__content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
