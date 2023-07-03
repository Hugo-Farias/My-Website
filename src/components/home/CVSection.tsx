import "./CVSection.scss";
import Btn from "../common/Btn";

interface prop {
  status: boolean;
}

const CVSection = function ({ status }: prop) {
  const fileName = "hugo-rodrigues-farias_";
  return (
    <div className={`cv-section ${status}`}>
      <Btn onClick={() => console.log(fileName + "en")}>En</Btn>
      <Btn onClick={() => console.log(fileName + "pt")}>Pt-Br</Btn>
    </div>
  );
};

export default CVSection;
