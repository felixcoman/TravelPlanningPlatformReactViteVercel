import Toast from "react-bootstrap/Toast";
import { useToast } from "../../global/toast/ToastContext";
import useToastTime from "../../hooks/useToastTime";

const ToastComponent = () => {
  const { toastData, hideToast } = useToast();
  const { id, title, text, className, showT } = toastData;
  const { time } = useToastTime(showT, id);

  return (
    <Toast
      className={className}
      show={showT}
      onClose={hideToast}
      delay={10000}
      autohide
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{title}</strong>
        <small>{time} seconds ago </small>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  );
};

export default ToastComponent;
