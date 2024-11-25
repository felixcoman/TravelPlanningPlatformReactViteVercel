import Toast from "react-bootstrap/Toast";

const ToastComponent = ({
  toastTitle,
  toastText,
  className,
  show,
  toggleShow,
  time,
}) => {
  return (
    <Toast
      className={className}
      show={show}
      onClose={toggleShow}
      delay={10000}
      autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{toastTitle}</strong>
        <small>{time} seconds ago </small>
      </Toast.Header>
      <Toast.Body>{toastText}</Toast.Body>
    </Toast>
  );
};

export default ToastComponent;
