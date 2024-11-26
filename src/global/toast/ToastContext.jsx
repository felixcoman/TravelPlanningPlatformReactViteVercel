import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastData, setToastData] = useState({
    title: "",
    text: "",
    className: "",
    showT: false,
  });

  const showToast = (title, text, className) => {
    setToastData({ title, text, className, showT: true });
  };

  const hideToast = () => {
    setToastData((prev) => ({ ...prev, showT: false }));
  };

  return (
    <ToastContext.Provider value={{ toastData, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
