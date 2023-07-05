import "./Modal.scss";
import React from "react";

interface prop {
  close: () => void;
  children: React.ReactNode;
  hideCloseBtn?: boolean;
}

const Modal = function (prop: prop) {
  const { close, children, hideCloseBtn } = prop;

  return (
    <>
      <div className="modal">
        {!hideCloseBtn ? (
          <span className="close-button" onClick={close}>
            &times;
          </span>
        ) : (
          ""
        )}
        {children}
      </div>
      <div className="modal-backdrop" onClick={close} />
    </>
  );
};

export default Modal;
