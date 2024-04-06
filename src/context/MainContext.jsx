import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { scrollTop } from "../utils/scrollTop";

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    handleShowNavbar(false);
    const myTimeOut = setTimeout(() => {
      scrollTop();
    }, 100);
    return () => {
      clearTimeout(myTimeOut);
    };
  }, [pathname]);

  const handleShowNavbar = (isShow) => {
    setIsShowNavbar(isShow);
  };

  return (
    <MainContext.Provider value={{ isShowNavbar, handleShowNavbar }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMainContext = () => useContext(MainContext);
