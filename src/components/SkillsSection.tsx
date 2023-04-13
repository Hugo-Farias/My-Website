import "./SkillsSection.scss";
import Separator from "./common/Separator";
import SkillCard from "./SkillCard";

const DUMMY_DATA = [
  { name: "HTML", image: "icon-colored-html" },
  { name: "CSS", image: "icon-colored-css" },
  { name: "Javascript", image: "icon-colored-javascript" },
  { name: "Typescript", image: "icon-colored-typescript" },
  { name: "React", image: "icon-colored-react" },
  { name: "SASS/SCSS", image: "icon-colored-sass" },
  { name: "Python", image: "icon-colored-python" },
  { name: "Git", image: "icon-colored-git" },
  { name: "Bash", image: "icon-colored-bash" },
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
