import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastData, setToastData] = useState({
    id: null,
    title: "",
    text: "",
    className: "",
    showT: false,
  });

  const location = useLocation();

  const showToast = (title, text, className) => {
    setToastData({ id: Date.now(), title, text, className, showT: true });
  };

  const hideToast = () => {
    setToastData((prev) => ({ ...prev, showT: false }));
  };

  //hide toast automatically so it will be not visible if we navigate back to the same page
  //hide toast just if changes in URL
  useEffect(() => {
    hideToast();
  }, [location.pathname]);

  return (
    <ToastContext.Provider value={{ toastData, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
