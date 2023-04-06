import "./ProjectCard.scss";
import React, { useEffect, useState } from "react";
import Btn from "./common/Btn";
import AsyncImg from "./common/AsyncImg";

interface PropsT {
  data: { image: string; imageExt: string; name: string; tech: string[] };
}

const ProjectCard: React.FC<PropsT> = function ({ data }) {
  const { image, imageExt, name, tech } = data;

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
        <AsyncImg
          src={`/../assets/images/${image}.${imageExt}`}
          alt={`Image for "${name}"`}
          className="async-image"
        />
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
