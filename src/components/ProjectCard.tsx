import "./ProjectCard.scss";
import React, { useState } from "react";
import Btn from "./common/Btn";
import useImage from "../hooks/useImage";
import { projectItem } from "../../typeDefinitions";

interface PropsT {
  data: projectItem;
}

const ProjectCard: React.FC<PropsT> = function ({ data }) {
  const { image, imageExt, name, tech } = data;
  // const { path } = useImage(image, imageExt);

  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onFocus={() => setIsHover(true)}
      onBlur={() => setIsHover(false)}
      className={`project-card ${isHover ? "hover" : ""}`}
    >
      <div className="image-wrapper">
        <img src={image} alt={`Image for "${name}"`} className="async-image" />
        <div className="buttons">
          <Btn>View Project</Btn>
          <Btn>View Code</Btn>
        </div>
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

      <div className="buttons">
        <Btn>View Project</Btn>
        <Btn>View Code</Btn>
      </div>
    </div>
  );
};

export default ProjectCard;
