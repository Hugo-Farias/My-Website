import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import Separator from "./common/Separator";

const DUMMY_DATA = [
  {
    name: "design portfolio",
    image: "thumbnail-project-1-large.webp",
    tech: ["html", "css"],
  },
  {
    name: "e-learning landing page",
    image: "thumbnail-project-2-large.webp",
    tech: ["html", "css"],
  },
  {
    name: "todo web app",
    image: "thumbnail-project-3-large.webp",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "entertainment web app",
    image: "thumbnail-project-4-large.webp",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "memory game",
    image: "thumbnail-project-5-large.webp",
    tech: ["html", "css", "javascript"],
  },
  {
    name: "art gallery showcase",
    image: "thumbnail-project-6-large.webp",
    tech: ["html", "css", "javascript"],
  },
];

const ProjectsSection = function () {
  const contentJSX = DUMMY_DATA.map((v, i) => {
    return <ProjectCard key={i} data={v} />;
  });

  return (
    <div className="projects">
      <h2 className="title-name">Projects</h2>

      <div className="project-container">{contentJSX}</div>
      <Separator hide={true} />
    </div>
  );
};

export default ProjectsSection;
