import { Toast } from "react-bootstrap";

const ToastComponent = ({ toast, toggleShow }) => {
  return (
    <Toast className={toast.className} show={toast.show} onClose={toggleShow}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{toast.title}</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>{toast.text}</Toast.Body>
    </Toast>
  );
};

export default ToastComponent;
