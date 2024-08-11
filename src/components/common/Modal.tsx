import "./Modal.scss";
import React, { useEffect } from "react";

interface prop {
  close: () => void;
  children: React.ReactNode;
  hideCloseBtn?: boolean;
}

const Modal = function (prop: prop) {
  const { close, children, hideCloseBtn } = prop;

  const handleKeyPress = function (e: KeyboardEvent) {
    if (!["Escape", "Enter", "Backspace"].some((v) => v === e.key)) return null;

    close();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

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
