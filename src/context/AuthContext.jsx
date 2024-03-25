import { message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authService";
import tokenMethod from "../utils/token";
import { orderService } from "../services/orderService";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState("");
  const [profile, setProfile] = useState();
  const [courseInfo, setCourseInfo] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);

  useEffect(() => {
    if (tokenMethod.get()) {
      handleGetProfile();
      handleGetProfileCourse();
      handleGetProfilePayment();
    }
  }, []);

  const handleGetProfileCourse = async () => {
    try {
      const res = await orderService.getCourseHistories();
      const orderedCourses = res?.data?.data?.orders || [];
      setCourseInfo(orderedCourses);
    } catch (error) {
      console.log("getCourseHistories error", error);
    }
  };

  const handleGetProfilePayment = async () => {
    try {
      const res = await orderService.getPaymentHistories();
      const payments = res?.data?.data?.orders || [];
      setPaymentInfo(payments);
    } catch (error) {
      console.log("getPaymentHistories error", error);
    }
  };

  const handleShowModal = (modalType) => {
    if (!!!tokenMethod.get()) {
      setShowModal(modalType || "");
    }
  };

  const handleCloseModal = (e) => {
    e?.stopPropagation();
    setShowModal("");
  };

  useEffect(() => {
    if (tokenMethod.get()) {
      // call API get profile
      handleGetProfile();
    }
  }, []);

  const handleLogin = async (loginData, callback) => {
    try {
      const res = await authService.login(loginData);
      const { token: accessToken, refreshToken } = res?.data?.data || {};

      tokenMethod.set({
        accessToken,
        refreshToken,
      });

      if (!!tokenMethod) {
        handleGetProfile();
        message.success("Đăng nhập thành công!");

        handleCloseModal();
      }
    } catch (error) {
      console.log("error", error);
      message.error("Đăng nhập thất bại!");
    } finally {
      callback?.();
    }
  };

  const handleRegister = async (registerData, callback) => {
    try {
      const { name, email, password } = registerData;
      const payload = {
        firstName: name,
        lastName: "",
        email,
        password,
      };
      const res = await authService.register(payload);
      console.log("res", res?.data.data);
      if (res?.data?.data) {
        message.success("Đăng ký thành công!");
        handleLogin({
          email,
          password,
        });
      }
    } catch (error) {
      console.log("error", error);
      if (error?.response?.status === 403) {
        message.error("Email đăng ký đã tồn tại!");
      } else {
        message.error("Đăng ký thất bại!");
      }
    } finally {
      callback?.();
    }
  };

  const handleLogout = () => {
    tokenMethod.remove();
    setProfile(undefined);
  };

  const handleGetProfile = async () => {
    try {
      const profileRes = await authService.getProfile();
      if (profileRes?.data?.data) {
        setProfile(profileRes.data.data);
      }
    } catch (error) {
      console.log("error", error);
      handleLogout();
    }
  };

  const handleUpdateProfile = async (profileData) => {
    try {
      const { firstName, email, facebookURL, introduce, phone, website } =
        profileData;
      const payload = {
        firstName: firstName,
        lastName: "",
        email,
        facebookURL,
        website,
        introduce,
        phone,
      };
      const res = await authService.updateProfile(payload);
      if (res?.data?.data?.id) {
        message.success("Cập nhật thông tin thành công");
        handleGetProfile();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        showModal,
        profile,
        courseInfo,
        paymentInfo,
        handleShowModal,
        handleCloseModal,
        handleLogin,
        handleLogout,
        handleRegister,
        handleGetProfileCourse,
        handleGetProfilePayment,
        handleUpdateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
