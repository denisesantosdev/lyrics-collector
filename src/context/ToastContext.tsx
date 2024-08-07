import React, { createContext, useState } from "react";

import { ToastInterface } from "@models/interfaces";
import {ToastType} from "@models/types"

export const ToastContext = createContext<ToastType | null>(null);

const ToastContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [toastState, setToastState] = useState<ToastInterface>({
    visible: false,
    message: "",
    type: "",
  });

  return (
    <ToastContext.Provider value={{ toastState, setToastState }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextWrapper;
