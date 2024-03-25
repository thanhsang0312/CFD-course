import React from "react";
<<<<<<< HEAD
import PageLoading from "../../components/PageLoading";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Overlay from "../../components/Overlay";
import Footer from "../../components/Footer";
import LoginModal from "../../components/LoginModal";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <PageLoading />
      <Header />
      <Navbar />
      <Overlay />

      <Outlet />

      <Footer />
      <LoginModal />
    </>
=======
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoginModal from "../../components/LoginModal";
import Navbar from "../../components/NavBar";
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
>>>>>>> 5597a8e (update)
  );
};

export default MainLayout;
