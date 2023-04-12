import "./SkillCard.scss";
import React from "react";
import useImage from "../hooks/useImage";

interface PropsT {
  data: {
    name: string;
    image: string;
  };
}

const SkillCard: React.FC<PropsT> = function ({ data }) {
  const { path } = useImage(`../assets/images/skills/${data.image}`, "svg");

  if (!path) return null;

  return (
    <div className="skill-card">
      <img src={path} alt="" />
      <h3 className="name">{data.name}</h3>
    </div>
  );
};

export default SkillCard;
