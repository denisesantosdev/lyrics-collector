import React, { createContext, useState } from "react";

export const ToastContext = createContext({});

const ToastContextProvider = ({ children }) => {
  const [toastState, setToastState] = useState({
    visible: false,
    message: "",
    type: "success",
  });

  return (
    <ToastContext.Provider value={{ toastState, setToastState }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
