import "./SkillsSection.scss";
import Separator from "./common/Separator";
import SkillCard from "./SkillCard";

const DUMMY_DATA = [
  { name: "HTML", image: "html" },
  { name: "CSS", image: "css" },
  { name: "Javacript", image: "javacript" },
  { name: "Typescript", image: "typescript" },
  { name: "React", image: "react" },
  { name: "SASS/SCSS", image: "sass" },
  { name: "Python", image: "python" },
  { name: "Git", image: "git" },
  { name: "Bash", image: "bash" },
];

const SkillsSection = function () {
  const contentJSX = DUMMY_DATA.map((v, i) => {
    return <SkillCard key={i} data={v} />;
  });

  return (
    <>
      <section className="skills-section">
        <div className="skills-grid">{contentJSX}</div>
      </section>
      <Separator />
    </>
  );
};

export default SkillsSection;
