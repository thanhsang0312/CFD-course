import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { REGEX } from "../../const/regex";
import Input from "../Input";
import { message } from "antd";

const FormLogin = () => {
  const { handleShowModal, handleCloseModal, handleLogin } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const _onSubmit = async (e) => {
    e.preventDefault();

    const errorObj = {};

    if (!!!form.email) {
      errorObj.email = "Vui long nhap email!";
    } else if (!REGEX["email"].test(form.email)) {
      errorObj.email = "Vui long nhap dung dinh dang email!";
    }

    if (!!!form.password) {
      errorObj.password = "Vui long nhap mat khau!";
    }
    setError(errorObj);

    if (Object.keys(errorObj)?.length > 0) {
      console.log("Submit error", errorObj);
    } else {
      setLoading(true);
      console.log("Submit success", form);
      setLoading(true);
      handleLogin?.({ ...form }, () => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
    }
  };

  const register = (registerField) => {
    return {
      name: registerField,
      error: error[registerField],
      value: form[registerField],
      onChange: (e) => setForm({ ...form, [registerField]: e.target.value }),
    };
  };

  return (
    <div
      className="modal__wrapper-content mdlogin active"
      style={{ position: "relative" }}
    >
      <div className="form__bottom">
        <p>Bạn chưa có tài khoản?</p>
        <div className="color--primary btnmodal" data-modal="mdregister">
          <strong>Đăng ký</strong>
        </div>
      </div>
      <span className="line">Hoặc</span>
      <form action="#" className="form" onSubmit={_onSubmit}>
        <Input
          label="Email"
          required
          placeholder="Email"
          {...register("email")}
        />
        <Input
          label="Password"
          placeholder="Password"
          required
          type="password"
          {...register("password")}
        />
        <button className="btn btn--primary form__btn-register" type="submit">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
