<<<<<<< HEAD
import React from "react";

const MyInfo = () => {
=======
import React, { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import { useAuthContext } from "../../context/AuthContext";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

const MyInfo = () => {
  const { profile, handleUpdateProfile } = useAuthContext();
  const { firstName, phone, email, facebookURL, website, introduce } =
    profile || {};

  const initialForm = useRef({
    firstName: "",
    email: "",
    phone: "",
    facebookURL: "",
    website: "",
    introduce: "",
  });
  const [form, setForm] = useState(initialForm.current);

  const [error, setError] = useState({});

  useEffect(() => {
    if (profile) {
      const { firstName, email, phone, facebookURL, website, introduce } =
        profile;
      const newForm = {
        firstName,
        email,
        phone,
        facebookURL,
        website,
        introduce,
      };
      setForm(newForm);
      initialForm.current = newForm;
    }
  }, [profile]);

  const register = (registerField) => {
    return {
      name: registerField,
      error: error[registerField],
      value: form[registerField],
      onChange: (e) => setForm({ ...form, [registerField]: e.target.value }),
    };
  };

  const isFormChanged =
    JSON.stringify(initialForm.current) !== JSON.stringify(form);

  const _onSubmit = (e) => {
    e.preventDefault();
    if (!isFormChanged) return;

    event.preventDefault();

    const errorObject = {};

    if (!!!form.firstName) {
      errorObject.firstName = "Vui lòng nhập tên";
    }

    if (!!!form.phone) {
      errorObject.phone = "Vui lòng nhập phone";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObject.phone = "Vui lòng nhập đúng định dạng phone";
    }

    if (
      form.facebookURL &&
      !/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/.test(
        form.facebookURL
      )
    ) {
      errorObject.facebookURL = "Vui lòng nhập đúng định dạng website";
    }

    if (
      form.website &&
      !/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/.test(
        form.website
      )
    ) {
      errorObject.website = "Vui lòng nhập đúng định dạng website";
    }

    setError(errorObject);

    if (Object.keys(errorObject).length > 0) {
      console.log("Submit error: ", errorObject);
    } else {
      handleUpdateProfile?.(form);
    }
  };

>>>>>>> 5597a8e (update)
  return (
    <div className="tab__content-item">
      <form action="#" className="form">
        <div className="form-container">
<<<<<<< HEAD
          <div className="form-group">
            <label className="label">
              Họ và tên <span>*</span>
            </label>
            <input
              defaultValue="Nghĩa Trần"
              type="text"
              className="form__input formerror"
            />
            <div className="error">Vui lòng nhập họ và tên</div>
          </div>
          <div className="form-group">
            <label className="label">
              Số điện thoại <span>*</span>
            </label>
            <input
              defaultValue={989596913}
              type="text"
              className="form__input"
            />
          </div>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label className="label">
              Email <span>*</span>
            </label>
            <input
              defaultValue="trannghia2018@gmail.com"
              disabled
              type="email"
              className="form__input"
            />
          </div>
          <div className="form-group">
            <div className="form-grouppass">
              <label className="label">
                Mật khẩu <span>*</span>
              </label>
              <div className="textchange btnmodal" data-modal="mdchangepass">
                Đổi mật khẩu
              </div>
            </div>
            <input
              defaultValue={12345568900}
              type="password"
              disabled
              className="form__input"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="label">Facebook URL</label>
          <input
            defaultValue="https://nghiatran.info"
            type="text"
            className="form__input"
            placeholder
          />
        </div>
        <div className="form-group">
          <label className="label">Website</label>
          <input defaultValue type="text" className="form__input" />
        </div>
        <div className="form-container textarea">
          <label className="label">Giới thiệu bản thân</label>
          <textarea className="form__input" name="content" defaultValue={""} />
        </div>
        <p className="noti">Cập nhận thông tin thành công</p>
        <div className="form-group">
          <div className="btnsubmit">
            <button className="btn btn--primary">Lưu lại</button>
          </div>
        </div>
=======
          <Input
            label="Họ và tên"
            required
            placeholder="Họ và tên"
            {...register("firstName")}
          />
          <Input
            label="Số điện thoại"
            required
            placeholder="Số điện thoại"
            {...register("phone")}
          />
        </div>
        <div className="form-container">
          <Input
            label="Email"
            placeholder="Email"
            disabled
            {...register(email)}
          />
          <Input label="Mật khẩu" value={"******"} disabled />
        </div>
        <Input
          label="Facebook URL"
          placeholder="Facebook URL"
          required
          {...register("facebookURL")}
        />
        <Input
          label="Website"
          placeholder="Website"
          required
          {...register("website")}
        />
        <Input
          label="Giới thiệu bản thân"
          required
          renderInput={(inputProps) => {
            return <TextArea {...inputProps} />;
          }}
          {...register("introduce")}
        />
        <Button
          style={{
            width: "100%",
            pointerEvents: isFormChanged ? "all" : "none",
          }}
          variant="primary"
          onClick={_onSubmit}
          disabled={!isFormChanged}
        >
          Gửi
        </Button>
>>>>>>> 5597a8e (update)
      </form>
    </div>
  );
};

export default MyInfo;
