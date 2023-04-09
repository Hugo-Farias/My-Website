import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import Separator from "./common/Separator";
import { useQuery } from "@apollo/client";
import { pinnedRepositories } from "../graphql/PinnedRepositories.graphql";
import { projectItem } from "../../typeDefinitions";
import { convertPinnedData } from "../helpers";

const ProjectsSection = function () {
  const { data, loading, error } = useQuery(pinnedRepositories);

  console.log(data);

  const pinnedItems = convertPinnedData(data);

  const contentJSX = loading ? (
    <h2 className="loading">Loading...</h2>
  ) : (
    pinnedItems.map((v: projectItem) => {
      console.log(v);
      return <ProjectCard key={v.id} data={v} />;
    })
  );

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">{contentJSX}</div>
      <Separator hide={true} />
    </div>
  );
};

export default ProjectsSection;
