import "./Modal.scss";
import React from "react";

interface prop {
  close: () => void;
  children: React.ReactNode;
}

const Modal = function (prop: prop) {
  const { close, children } = prop;

  return (
    <>
      <div className="modal">
        <span className="close-button" onClick={close}>
          &times;
        </span>
        {children}
      </div>
      <div className="modal-backdrop" onClick={close} />
    </>
  );
};

export default Modal;
