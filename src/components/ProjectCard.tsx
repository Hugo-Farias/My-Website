import "./ProjectCard.scss";
import React, { useState } from "react";
import Btn from "./common/Btn";
import useImage from "../hooks/useImage";
import { projectItem } from "../../typeDefinitions";

interface PropsT {
  data: projectItem;
}

// imageExt is only required if using a local image

const ProjectCard: React.FC<PropsT> = function ({ data }) {
  const { image, imageExt, name, tech, projectLink, codeLink } = data;

  let src = imageExt ? useImage(image, imageExt).path! : image;

  const [isHover, setIsHover] = useState<boolean>(false);

  const buttonsContainer = (
    <div className="buttons">
      <a href={projectLink} target="_blank">
        <Btn>View Project</Btn>
      </a>
      <a href={codeLink} target="_blank">
        <Btn>View Code</Btn>
      </a>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onFocus={() => setIsHover(true)}
      onBlur={() => setIsHover(false)}
      className={`project-card ${isHover ? "hover" : ""}`}
    >
      <div className="image-wrapper">
        <img src={src} alt={`Image for "${name}"`} className="async-image" />
        {buttonsContainer}
      </div>
      <div className="info">
        <h4 className="name">{name}</h4>
        <div className="tech-container">
          {tech.map((value, index) => (
            <h5 key={index} className="tech">
              {value}
            </h5>
          ))}
        </div>
      </div>
      {buttonsContainer}
    </div>
  );
};

export default ProjectCard;
