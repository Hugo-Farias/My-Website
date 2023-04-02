import "./SkillsSection.scss";
import Separator from "./common/Separator";

const DUMMY_DATA = [
  { name: "HTML", years: 4 },
  { name: "CSS", years: 4 },
  { name: "Javacript", years: 4 },
  { name: "Accessibility", years: 4 },
  { name: "React", years: 3 },
  { name: "Sass", years: 3 },
];

const SkillsSection = function () {
  const contentJSX = DUMMY_DATA.map((v, i) => {
    return (
      <div key={i} className="skill-card">
        <h2 className="name">{v.name}</h2>
        <h3 className="years">
          {v.years} {`Year${v.years > 1 ? "s" : ""}`} Experience
        </h3>
      </div>
    );
  });

  return (
    <>
      <section className="skills-section">{contentJSX}</section>
      <Separator hide={false} />
    </>
  );
};

export default SkillsSection;
