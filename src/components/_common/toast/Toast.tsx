"use client";

import React, { createContext, useContext, useRef } from "react";
import ReactDOM from "react-dom";
import { Toast, ToastContextProps } from "./Toast.type";
import { ToastContainer } from "./ToastContainer";

const ToastContext = createContext<ToastContextProps>({
  showToast: () => {},
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toastRef = useRef<ToastContextProps>(null);

  const showToast = (toast: Toast) => {
    if (toastRef.current) {
      toastRef.current.showToast(toast);
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {ReactDOM.createPortal(<ToastContainer ref={toastRef} />, document.body)}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
