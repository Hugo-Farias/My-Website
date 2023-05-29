import "./ProjectCard.scss";
import React, { useState } from "react";
import Btn from "../common/Btn";
import useImage from "../../hooks/useImage";
import { projectItem } from "../../../typeDefinitions";

interface PropsT {
  data: projectItem;
}

// imageExt is only required if using a local image

const ProjectCard: React.FC<PropsT> = function ({ data }) {
  const { image, imageExt, name, tech, projectLink, codeLink, description } =
    data;

  let src = imageExt ? useImage(image, imageExt).path! : image;

  const [isHover, setIsHover] = useState<boolean>(false);

  const buttonsContainer = (
    <div className="buttons">
      <Btn link={projectLink} target="_blank">
        View Project
      </Btn>
      <Btn link={codeLink} target="_blank">
        View Code
      </Btn>
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
        <p className="description">{description}</p>
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
