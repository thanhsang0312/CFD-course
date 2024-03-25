<<<<<<< HEAD
import React from "react";

const CourseOrderPage = () => {
=======
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import { courseService } from "../../services/courseSevice";
import FormOrder from "./FormOrder";
import InfoOrder from "./InfoOrder";
import PaymentOrder from "./PaymentOrder";
import { useAuthContext } from "../../context/AuthContext";
import Button from "../../components/Button";
import { orderService } from "../../services/orderService";
import { message } from "antd";
import PATHS from "../../const/paths";

const CourseOrderPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const { data: courseDetailData, execute: executeCourseDetail } = useMutation(
    courseService.getCourseBySlug
  );

  useEffect(() => {
    if (courseId) executeCourseDetail(courseId, {});
  }, []);

  const { teams, price, tags } = courseDetailData || [];

  const InfoOrderProps = {
    ...courseDetailData,
    teacherInfo: teams?.find((item) => item.tags.includes("Teacher")) || {},
    price: price,
  };

  const {
    profile,
    courseInfo,
    handleGetProfileCourse,
    handleGetProfilePayment,
  } = useAuthContext();
  const {
    firstName: profileName,
    email: profileEmail,
    phone: profilePhone,
  } = profile || {};

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
  });

  const [error, setError] = useState({});

  useEffect(() => {
    setForm({
      name: profileName,
      email: profileEmail,
      phone: profilePhone,
      type: "",
    });
  }, [profileName, profileEmail, profilePhone]);

  const register = (registerField) => {
    return {
      name: registerField,
      error: error[registerField],
      value: form[registerField],
      onChange: (e) => setForm({ ...form, [registerField]: e.target.value }),
    };
  };

  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentMethodChange = (payment) => {
    setPaymentMethod(payment);
  };

  const { loading: orderLoading, execute: orderCourse } = useMutation(
    orderService.orderCourse
  );

  const _onOrder = (event) => {
    event.preventDefault();

    // start validate OrderForm
    const errorObject = {};

    if (!!!form.name) {
      errorObject.name = "Vui lòng nhập tên";
    }

    if (!!!form.email) {
      errorObject.email = "Vui lòng nhập email";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errorObject.email = "Vui lòng nhập đúng định dạng email";
    }

    if (!!!form.phone) {
      errorObject.phone = "Vui lòng nhập phone";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObject.phone = "Vui lòng nhập đúng định dạng phone";
    }

    if (!!!form.type) {
      errorObject.type = "Vui lòng chọn phương thức học";
    }

    setError(errorObject);
    // end validate

    if (Object.keys(errorObject).length > 0) {
      console.log("Profile form validate failed", errorObject);
    } else {
      if (paymentMethod) {
        // setup payload
        const payload = {
          name: form?.name,
          phone: form?.phone,
          course: courseDetailData?.id,
          type: form?.type,
          paymentMethod,
        };
        // call api order
        orderCourse(payload, {
          onSuccess: async () => {
            message.success("Đăng ký thành công!");
            await handleGetProfileCourse();
            await handleGetProfilePayment();
            navigate(PATHS.PROFILE.MY_COURSE);
          },
          onFail: () => {
            message.error("Đăng ký thất bại!");
          },
        });
      } else {
        message.error("Vui lòng chọn hình thức thanh toán");
      }
    }
  };

  const alreadyOrderInfo = courseInfo?.find(
    (item) => item?.course?.slug === courseId
  );

  const isAlreadyOrdered = !!alreadyOrderInfo;
  useEffect(() => {
    setPaymentMethod(alreadyOrderInfo?.paymentMethod || "");
    setForm((prev) => ({
      ...prev,
      type: alreadyOrderInfo?.type || "",
    }));
  }, [alreadyOrderInfo]);

>>>>>>> 5597a8e (update)
  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
<<<<<<< HEAD
          <div className="itemorder infoorder">
            <h3 className="title --t3">Thông tin đơn hàng</h3>
            <div className="boxorder">
              <div className="boxorder__col">
                <label className="label">Tên khoá học</label>
                <div className="boxorder__col-course">
                  <div className="img">
                    <img
                      src="https://cfdcircle.vn/files/thumbnails/JUVoVxn36lQtCl20hHoEPMo8JJENBX5qXfI1U13k.jpg"
                      alt
                    />
                  </div>
                  <div className="info">
                    <p className="name">
                      <strong>Frontend Master</strong>
                    </p>
                    <p>Trần Nghĩa</p>
                  </div>
                </div>
              </div>
              <div className="boxorder__col">
                <label className="label">Tạm tính</label>
                <p>14,700,000đ</p>
              </div>
              <div className="boxorder__col">
                <label className="label">Giảm giá</label>
                <p>0đ</p>
              </div>
              <div className="boxorder__col">
                <label className="label">thành tiền</label>
                <p>
                  <strong>14,700,000đ</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="itemorder formorder">
            <h3 className="title --t3">Thông tin cá nhân</h3>
            <div className="boxorder">
              <form action="#" className="form">
                <div className="form-container">
                  <div className="form-group">
                    <label className="label">
                      Họ và tên <span>*</span>
                    </label>
                    <input
                      defaultValue="Nghĩa Trần"
                      type="text"
                      className="form__input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">
                      Email <span>*</span>
                    </label>
                    <input
                      defaultValue="nghiatran@2018@gmail.com"
                      disabled
                      type="email"
                      className="form__input"
                    />
                  </div>
                </div>
                <div className="form-container">
                  <div className="form-group">
                    <label className="label">
                      Số điện thoại <span>*</span>
                    </label>
                    <input
                      defaultValue={928338373}
                      type="text"
                      className="form__input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">
                      Hình thức học <span>*</span>
                    </label>
                    <div className="select select-change">
                      <div className="head form__input">Học Offline</div>
                      <div className="sub" style={{ display: "none" }}>
                        <a href="#" data-value="offline">
                          Học Offline
                        </a>
                        <a href="#" data-value="online">
                          Học Online
                        </a>
                      </div>
                      <input
                        type="text"
                        name="type"
                        hidden
                        defaultValue="offline"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="itemorder paymentorder">
            <h3 className="title --t3">Hình thức thanh toán</h3>
            <div className="boxorder">
              <div className="boxorder__pay">
                <label className="radiocontainer">
                  <img src="img/icon-payment-method-atm.svg" alt />
                  Thành toán bằng chuyển khoản
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <div className="boxorder__pay-tooltip">
                  Sau khi bấm đăng ký, mã khoá học &amp; thông tin tài khoản
                  ngân hàng sẽ được gửi đến email của bạn, bạn vui lòng chuyển
                  khoản với nội dung: mã khoá học, họ và tên, số điện thoại, CFD
                  Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học của
                  bạn sau khi giao dịch thành công.
                </div>
              </div>
              <div className="boxorder__pay">
                <label className="radiocontainer">
                  <img src="img/icon-payment-method-mo-mo.svg" alt />
                  Thanh toán bằng ví Momo
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <div className="boxorder__pay-tooltip">
                  Sau khi bấm đăng ký, mã khoá học &amp; thông tin tài khoản
                  MoMo sẽ được gửi đến email của bạn, bạn vui lòng chuyển khoản
                  với nội dung: mã khoá học, họ và tên, số điện thoại, CFD
                  Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học của
                  bạn sau khi giao dịch thành công.
                </div>
              </div>
              {/* Khoá học video và video mentor thì không có thanh toán tiền mặt */}
              <div className="boxorder__pay">
                <label className="radiocontainer">
                  <img src="img/icon-payment-method-cod.svg" alt />
                  Thanh toán bằng tiền mặt
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>
                <div className="boxorder__pay-tooltip">
                  Sau khi bấm đăng ký, thông tin khoá học sẽ được gửi đến email
                  của bạn, bạn vui lòng đến văn phòng CFD Circle vào ngày khai
                  giảng để đóng học phí tại số 11b, Phan Kế Bính, quận 1, TP Hồ
                  Chí Minh.
                </div>
              </div>
            </div>
          </div>
          {/* addclass --processing khi bấm đăng ký */}
          <div className="btn btn--primary">
            <span>Đăng ký khoá học</span>
            <svg
              version="1.1"
              id="L9"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 0 0"
              xmlSpace="preserve"
            >
              <path
                fill="#fff"
                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
=======
          <InfoOrder {...InfoOrderProps} />
          <FormOrder
            register={register}
            type={tags}
            disabled={isAlreadyOrdered}
          />
          <PaymentOrder
            handleChange={handlePaymentMethodChange}
            selectedPayment={paymentMethod}
            disabled={isAlreadyOrdered}
          />
          {/* addclass --processing khi bấm đăng ký */}
          <Button
            style={{ width: "100%" }}
            onClick={_onOrder}
            loading={orderLoading}
            disabled={isAlreadyOrdered}
          >
            <span>{isAlreadyOrdered ? "Đã đăng ký" : "Đăng ký khoá học"}</span>
          </Button>
>>>>>>> 5597a8e (update)
        </div>
      </section>
    </main>
  );
};

export default CourseOrderPage;
