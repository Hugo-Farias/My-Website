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
      <div className="modal-backdrop" onClick={close} />
      <div className="modal">
        <span className="close-button" onClick={close}>
          &times;
        </span>
        {children}
      </div>
    </>
  );
};

export default Modal;
