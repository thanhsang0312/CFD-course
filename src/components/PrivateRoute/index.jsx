import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import tokenMethod from "../../utils/token";
import { MODAL_TYPE } from "../../const/generals";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/" }) => {
  const { handleShowModal } = useAuthContext();
  if (!!!tokenMethod.get()) {
    handleShowModal(MODAL_TYPE.login);
    return <Navigate to={redirectPath} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
