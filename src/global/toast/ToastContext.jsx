import { createContext, useContext, useState } from "react";
import { Toast } from "react-bootstrap";

// Create the context
const ToastContext = createContext();

// Create a provider component
export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    show: false,
    title: "",
    text: "",
    className: "",
  });

  const showToast = (title, text, className) => {
    setToast({ show: true, title, text, className });
    setTimeout(() => setToast({ ...toast, show: false }), 3000); // Hide toast after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// Custom hook to use the toast context
export const useToast = () => useContext(ToastContext);
