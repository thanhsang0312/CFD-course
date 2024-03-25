import React from "react";
<<<<<<< HEAD

const Overlay = () => {
  return <div className="overlay" />;
=======
import { useMainContext } from "../../context/MainContext";

const Overlay = () => {
  const { handleShowNavbar } = useMainContext();
  return <div className="overlay" onClick={() => handleShowNavbar?.(false)} />;
>>>>>>> 5597a8e (update)
};

export default Overlay;
