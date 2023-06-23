import "./ProjectModal.scss";
import React from "react";
import Btn from "../common/Btn";
import { githubApiData } from "../../../typeDefinitions";
import { convertGithubData } from "../../helpers";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../common/Modal";

interface prop {
  data: githubApiData | undefined;
}

const ProjectModal = function (prop: prop) {
  const navigate = useNavigate();

  const resetURL = () => {
    navigate("/");
  };
  const location = useLocation().pathname.slice(1);

  if (!prop.data) return null;

  const projectNames = prop.data?.user.pinnedItems.nodes.map((v) => v.name);
  const isValidPath = projectNames.includes(location);

  if (!isValidPath) return null;

  const [{ image, description, name, codeLink, projectLink }] =
    convertGithubData(prop.data).filter((v) => {
      return v.name === location;
    });

  return (
    <Modal close={resetURL}>
      <div className="project-modal">
        <img src={image} className="image" alt="project image" />
        <div className="info">
          <h1 className="name">{name.replaceAll("-", " ")}</h1>
          <h2 className="description">{description}</h2>
          <div className="buttons">
            <Btn link={projectLink} target="_blank">
              View Project
            </Btn>
            <Btn link={codeLink} target="_blank">
              View Code
            </Btn>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
