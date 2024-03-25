import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

const ContactForm = ({ handleFormSumit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    content: "",
  });

  const [error, setError] = useState({});

  const _onChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const _onSubmit = () => {
    console.log("submit form", form);
    // Start Validate
    const errorObj = {};

    if (!!!form.name) {
      errorObj.name = "Vui lòng nhập tên!";
    }
    if (!!!form.topic) {
      errorObj.topic = "Vui lòng chọn chủ đề!";
    }
    if (!!!form.content) {
      errorObj.content = "Vui lòng nhập content!";
    }
    if (!!!form.email) {
      errorObj.email = "Vui lòng nhập email!";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email)) {
      errorObj.email = "Vui long nhap dung dinh dang email!";
    }
    if (!!!form.phone) {
      errorObj.phone = "Vui lòng nhập phone!";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(form.phone)) {
      errorObj.phone = "Vui lòng nhập dung dinh dang phone!";
    }
    setError(errorObj);

    if (Object.keys(errorObj).length > 0) {
      console.log("Submit Error", errorObj);
    } else {
      console.log("Submit Success", form);
      handleFormSumit?.(form);
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
    <div className="form">
      <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
      <Input
        label="Họ và tên"
        required
        placeholder="Họ và tên"
        {...register("name")}
      />
      <Input
        label="Email"
        required
        placeholder="Email"
        {...register("email")}
      />
      <Input
        label="Số điện thoại"
        required
        placeholder="Số điện thoại"
        {...register("phone")}
      />
      <Input
        label="Chủ đề cần hỗ trợ"
        required
        onChange={_onChange}
        renderInput={(inputProps) => (
          <Select
            options={[
              { value: "", label: "--" },
              { value: "responsive", label: "Web Responsive" },
              { value: "react", label: "ReactJS" },
            ]}
            {...inputProps}
          />
        )}
        {...register("topic")}
      />
      <Input
        label="Nội dung"
        required
        renderInput={(inputProps) => {
          return <TextArea {...inputProps} />;
        }}
        {...register("content")}
      />
      <div className="btncontrol">
        <Button variant="primary" onClick={_onSubmit}>
          Gửi
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
