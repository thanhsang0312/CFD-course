import React from "react";

const Input = ({
  label,
  required,
  error,
  renderInput,
  type = "text",
  placeholder = "",
  ...rest
}) => {
  return (
    <div className="form-group">
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      {renderInput?.({ ...rest, error }) || (
        <input
          {...rest}
          type={type}
          placeholder={placeholder}
          className={`form__input ${error ? "formerror" : ""}`}
        />
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
