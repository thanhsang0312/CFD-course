import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginModal from "../../components/LoginModal";
import Navbar from "../../components/Navbar";
import Overlay from "../../components/Overlay";
import MainContextProvider from "../../context/MainContext";
import AuthContextProvider from "../../context/AuthContext";

const MainLayout = ({ children }) => {
  return (
    <MainContextProvider>
      {/* <PageLoading /> */}
      <AuthContextProvider>
        <Header />
        <Navbar />
        <Overlay />

        <Outlet />

        <Footer />
        <LoginModal />
      </AuthContextProvider>
    </MainContextProvider>
  );
};

export default MainLayout;
