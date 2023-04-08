import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import Separator from "./common/Separator";
import { techList } from "../data/sharedData.json";
import { useQuery } from "@apollo/client";
import { pinnedRepositories } from "../graphql/PinnedRepositories.graphql";
import { PinnedItem, projectItem } from "../../typeDefinitions";

const ProjectsSection = function () {
  const { data, loading } = useQuery(pinnedRepositories);

  console.log(techList);

  const test = data?.user.pinnedItems.nodes.map((pinnedItem: PinnedItem) => {
    const topics = pinnedItem.repositoryTopics.nodes;

    let techArray = ["react", "html", "css"];

    if (topics.length > 0) {
      techArray = topics
        .map((v) => v.topic.name)
        .filter((v) => techList.includes(v));
    }

    return {
      id: pinnedItem.id,
      name: pinnedItem.name.replaceAll("-", " "),
      image: pinnedItem.openGraphImageUrl,
      tech: techArray,
      projectLink: pinnedItem?.homepageUrl,
      codeLink: pinnedItem.url,
    };
  });

  const contentJSX = loading ? (
    <h2 className="loading">Loading...</h2>
  ) : (
    test.map((v: projectItem) => {
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
