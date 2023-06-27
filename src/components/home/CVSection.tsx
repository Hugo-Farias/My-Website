import "./CVSection.scss";
import Btn from "../common/Btn";

interface prop {
  status: boolean;
}

const CVSection = function ({ status }: prop) {
  return (
    <div className={`cv-section ${status}`}>
      <Btn onClick={() => {}}>En</Btn>
      <Btn onClick={() => {}}>Pt-Br</Btn>
    </div>
  );
};

export default CVSection;
