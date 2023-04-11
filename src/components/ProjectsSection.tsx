import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import Separator from "./common/Separator";
import Loading from "./common/Loading";
import { useQuery } from "@apollo/client";
import { pinnedRepositories } from "../graphql/PinnedRepositories.graphql";
import { projectItem } from "../../typeDefinitions";
import { convertGithubData } from "../helpers";

const ProjectsSection = function () {
  const { data, loading } = useQuery(pinnedRepositories);

  const contentJSX = convertGithubData(data)?.map((v: projectItem) => {
    return <ProjectCard key={v.id} data={v} />;
  });

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-container">
        {loading ? <Loading /> : contentJSX}
      </div>
      <Separator hide={true} />
    </div>
  );
};

export default ProjectsSection;
