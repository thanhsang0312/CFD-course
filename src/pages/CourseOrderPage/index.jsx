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

  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
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
        </div>
      </section>
    </main>
  );
};

export default CourseOrderPage;
