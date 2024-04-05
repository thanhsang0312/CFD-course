import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { MODAL_TYPE } from "../../const/generals";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const LoginModal = () => {
  const { showModal, handleCloseModal } = useAuthContext();
  return (
    <div className={`modal modallogin ${showModal ? "open" : ""}`}>
      <div className="modal__wrapper">
        <div className="modal__wrapper-close" onClick={handleCloseModal}>
          <img src="/img/close_icon.svg" alt="CFD Register" />
        </div>
        {showModal === MODAL_TYPE.login && <FormLogin />}
        {showModal === MODAL_TYPE.register && <FormRegister />}
      </div>
      <div className="modal__overlay" onClick={handleCloseModal} />
    </div>
  );
};

export default LoginModal;
