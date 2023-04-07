import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import Separator from "./common/Separator";
import DUMMY_DATA from "../data/projects.json";
import { useQuery } from "@apollo/client";
import { pinnedRepositories } from "../graphql/PinnedRepositories.graphql";

const ProjectsSection = function () {
  const { data, loading } = useQuery(pinnedRepositories);

  console.log(loading);
  console.log(data.user.pinnedItems.nodes[0]);

  const contentJSX = DUMMY_DATA.map((v, i) => {
    return <ProjectCard key={i} data={v} />;
  });

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-container">{contentJSX}</div>
      <Separator hide={true} />
    </div>
  );
};

export default ProjectsSection;
