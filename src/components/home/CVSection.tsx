import "./CVSection.scss";
import { useState } from "react";
import Btn from "../common/Btn";
import { CSSTransition } from "react-transition-group";
import Modal from "../common/Modal";

interface prop {
  status: boolean;
}

const CVSection = function ({ status }: prop) {
  const [cvModal, setCvModal] = useState(false);
  const fileName = "hugo-rodrigues-farias_";

  return (
    <div className={`cv-section ${status}`}>
      <Btn onClick={() => setCvModal(true)}>En</Btn>
      <Btn onClick={() => setCvModal(true)}>Pt-Br</Btn>
      <CSSTransition in={cvModal} timeout={300} unmountOnExit>
        <Modal close={() => setCvModal(false)}>
          <div className="cv-content"></div>
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default CVSection;
