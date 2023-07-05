import "./CVSection.scss";
import { useState } from "react";
import Btn from "../common/Btn";
import { CSSTransition } from "react-transition-group";
import Modal from "../common/Modal";
import cvEn from "../../assets/docs/hugo-rodrigues-farias_en.pdf";
import cvPt from "../../assets/docs/hugo-rodrigues-farias_pt.pdf";

interface prop {
  status: boolean;
}

const CVSection = function ({ status }: prop) {
  const [cvModal, setCvModal] = useState<boolean>(false);
  const [cvDoc, setCvDoc] = useState<string>(cvEn);

  const handleCv = function (lang: "en" | "pt") {
    setCvModal(true);

    if (lang === "en") return setCvDoc(cvEn);

    setCvDoc(cvPt);
  };

  return (
    <div className={`cv-section ${status}`}>
      <Btn onClick={handleCv.bind(null, "en")}>En</Btn>
      <Btn onClick={handleCv.bind(null, "pt")}>Pt-Br</Btn>
      <CSSTransition in={cvModal} timeout={300} unmountOnExit>
        <Modal close={() => setCvModal(false)}>
          <embed src={cvDoc} type="application/pdf" />
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default CVSection;
