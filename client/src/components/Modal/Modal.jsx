import { useTodo } from "../../contexts/todo-context";
import classes from "../Modal/Modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const { showModal, dispatch } = useTodo();

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  
  return createPortal(
    <>
      {showModal && (
        <div>
          <div onClick={closeModal} className={classes.overlay}></div>
          <div className={classes.modal}>{children}</div>
        </div>
      )}
    </>,
    document.getElementById("modal")
  );
};

export { Modal };
