import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import Separator from "./common/Separator";
import Loading from "./common/Loading";
import { useQuery } from "@apollo/client";
import { pinnedRepositories } from "../graphql/PinnedRepositories.graphql";
import { projectItem } from "../../typeDefinitions";
import { convertGithubData } from "../helpers";
import Error from "./common/Error";
import { GITHUB_URL } from "../config";

const ProjectsSection = function () {
  const { data, loading, error } = useQuery(pinnedRepositories);

  const errorMsg = `GithubAPI: ${error?.message}`;
  const errorLink = { label: "Check my github page", url: GITHUB_URL };

  const contentJSX = convertGithubData(data)?.map((v: projectItem) => {
    return <ProjectCard key={v.id} data={v} />;
  });

  return (
    <div className="projects">
      <h1 className="section-title">Projects</h1>
      <div className="project-container">
        {error ? <Error msg={errorMsg} link={errorLink} /> : ""}
        {loading ? <Loading /> : contentJSX}
      </div>
      <Separator hide={true} />
    </div>
  );
};

export default ProjectsSection;
