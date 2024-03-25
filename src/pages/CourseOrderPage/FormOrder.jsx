import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Input from "../../components/Input";
import Select from "../../components/Select";

const FormOrder = ({ register, type, disabled }) => {
  const typeOptions =
    type?.length > 0
      ? [
          { value: "", label: "--" },
          ...type.map((type) => ({ value: type, label: type })),
        ]
      : [{ value: "", label: "--" }];
  return (
    <div className="itemorder formorder">
      <h3 className="title --t3">Thông tin cá nhân</h3>
      <div className="boxorder">
        <form action="#" className="form">
          <div className="form-container">
            <Input
              label="Họ và tên"
              required
              placeholder="Họ và tên"
              disabled={disabled}
              {...register("name")}
            />
            <Input
              label="Email"
              required
              placeholder="Email"
              disabled
              {...register("email")}
            />
          </div>
          <div className="form-container">
            <Input
              label="Số điện thoại"
              required
              placeholder="Số điện thoại"
              {...register("phone")}
              disabled={disabled}
            />
            <Input
              label="Hình thức học"
              required
              renderInput={(inputProps) => {
                return <Select options={typeOptions} {...inputProps} />;
              }}
              {...register("type")}
              disabled={disabled}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOrder;
