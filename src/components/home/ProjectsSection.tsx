import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import Separator from "../common/Separator";
import Loading from "../common/Loading";
import Error from "../common/Error";
import { githubApiData, projectItem, query } from "../../../typeDefinitions";
import { convertGithubData } from "../../helpers";
import { GITHUB_URL } from "../../config";

interface Prop {
  query: query<githubApiData>;
}

const ProjectsSection = function ({ query }: Prop) {
  const { data, loading, error } = query;

  let contentJSX;

  if (data) {
    contentJSX = convertGithubData(data).map((v: projectItem) => {
      return <ProjectCard key={v.id} data={v} />;
    });
  } else if (error) {
    const errorMsg = `GithubAPI: ${error?.message}`;
    const errorLink = { label: "Check my github page", url: GITHUB_URL };
    contentJSX = <Error msg={errorMsg} link={errorLink} />;
  }

  return (
    <div className="projects">
      <Separator />
      <h1 className="section-title">Projects</h1>
      <div className="project-container">
        {loading ? <Loading /> : contentJSX}
      </div>
    </div>
  );
};

export default ProjectsSection;
