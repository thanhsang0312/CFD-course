import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { REGEX } from "../../const/regex";
import Input from "../Input";
import { message } from "antd";

const FormRegister = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { handleShowModal, handleCloseModal, handleRegister } =
    useAuthContext();
  const register = (registerField) => {
    return {
      name: registerField,
      error: error[registerField],
      value: form[registerField],
      onChange: (e) => setForm({ ...form, [registerField]: e.target.value }),
    };
  };

  const _onSubmit = (e) => {
    e.preventDefault();

    const errorObj = {};

    if (!!!form.name) {
      errorObj.name = "Vui lòng nhập họ và tên!";
    }

    if (!!!form.email) {
      errorObj.email = "Vui lòng nhập địa chỉ email!";
    } else if (!REGEX["email"].test(form.email)) {
      errorObj.email = "Vui lòng nhập đúng định dạng email!";
    }

    if (!!!form.password) {
      errorObj.password = "Vui lòng nhập mật khẩu!";
    }

    if (!!!form.confirmPassword) {
      errorObj.confirmPassword = "Vui lòng xác nhận mật khẩu!";
    } else if (form.password && form.confirmPassword !== form.password) {
      errorObj.confirmPassword = "Mật khẩu xác nhận không đúng!";
    }

    setError(errorObj);

    if (Object.keys(errorObj)?.length > 0) {
      console.log("Submit error", errorObj);
    } else {
      setLoading(true);
      console.log("Submit success", form);
      handleRegister({ ...form }, () => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
    }
  };
  return (
    <div className="modal__wrapper-content mdregister active">
      <div className="form__bottom">
        <p>Bạn đã có tài khoản?</p>
        <div className="color--primary btnmodal" data-modal="mdlogin">
          <strong>Đăng nhập</strong>
        </div>
      </div>
      <span className="line">Hoặc</span>
      <form action="#" className="form" onSubmit={_onSubmit}>
        <Input
          {...register("name")}
          label="fullName"
          required
          placeholder="Full Name"
        />
        <Input
          {...register("email")}
          label="Email"
          placeholder="Email"
          required
        />
        <Input
          {...register("password")}
          label="Mật khẩu"
          placeholder="Mật khẩu"
          required
        />
        <Input
          {...register("confirmPassword")}
          label="Xác nhận mật khẩu"
          placeholder="Xác nhận mật khẩu"
          required
        />
        <p className="form__argee">
          Với việc đăng ký, bạn đã đồng ý
          <a className="color--primary" href="#">
            Chính Sách Điều Khoản
          </a>{" "}
          của CFD
        </p>
        <button className="btn btn--primary form__btn-register" type="submit">
          Đăng ký tài khoản
        </button>
      </form>
    </div>
  );
};

export default FormRegister;
