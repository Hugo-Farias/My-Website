import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import Separator from "./common/Separator";
import Loading from "./common/Loading";
import Error from "./common/Error";
import { githubApiData, projectItem } from "../../typeDefinitions";
import { convertGithubData } from "../helpers";
import { GITHUB_URL } from "../config";

interface query {
  query: {
    data: githubApiData;
    loading: boolean;
    error?: {
      message: string;
      name: string;
      statusCode?: number;
      response?: any;
    };
  };
}

const ProjectsSection = function ({ query }: query) {
  const { data, loading, error } = query;

  const errorMsg = `GithubAPI: ${error?.message}`;
  const errorLink = { label: "Check my github page", url: GITHUB_URL };

  const contentJSX = convertGithubData(data)?.map((v: projectItem) => {
    return <ProjectCard key={v.id} data={v} />;
  });

  return (
    <div className="projects">
      <Separator />
      <h1 className="section-title">Projects</h1>
      <div className="project-container">
        {error ? <Error msg={errorMsg} link={errorLink} /> : ""}
        {loading ? <Loading /> : contentJSX}
      </div>
    </div>
  );
};

export default ProjectsSection;
