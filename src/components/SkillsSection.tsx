import "./SkillsSection.scss";
import Separator from "./common/Separator";

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
    return (
      <div key={i} className="skill-card">
        <img src={`../assets/images/skills${v.image}`} alt="" />
        <h3 className="name">{v.name}</h3>
      </div>
    );
  });

  return (
    <>
      <section className="skills-section">
        <h2 className="skills-section-title">Skills</h2>
        <div className="skills-grid">{contentJSX}</div>
      </section>
      <Separator />
    </>
  );
};

export default SkillsSection;
