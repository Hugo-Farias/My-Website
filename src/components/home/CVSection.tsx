import "./CVSection.scss";
import { useEffect, useState } from "react";
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
  const [cvLang, setCvLang] = useState<"en" | "pt">("en");

  const handleOpenCv = function (lang: "en" | "pt") {
    setCvModal(true);
    document.body.style.overflow = "hidden";
    setCvLang(lang);
  };

  const handleCloseCv = function () {
    setCvModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={`cv-section ${status}`}>
      <Btn onClick={handleOpenCv.bind(null, "en")}>En</Btn>
      <Btn onClick={handleOpenCv.bind(null, "pt")}>Pt-Br</Btn>
      <CSSTransition in={cvModal} timeout={300} unmountOnExit>
        <Modal close={handleCloseCv}>
          <embed src={cvLang === "en" ? cvEn : cvPt} type="application/pdf" />
        </Modal>
      </CSSTransition>
    </div>
  );
};

export default CVSection;
