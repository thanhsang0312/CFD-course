import { createContext, useState } from "react";
import { useContext } from "react";

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const [isShowNavbar, setIsShowNavbar] = useState(false);

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
