import "./SkillCard.scss";
import React, { lazy } from "react";
// import useImage from "../hooks/useImage";
import useImportSvg from "../hooks/useImportSvg";
import Loading from "./common/Loading";

interface PropsT {
  data: {
    name: string;
    image: string;
  };
}

const SkillCard: React.FC<PropsT> = function ({ data }) {
  const { SvgIcon } = useImportSvg(data.image);

  if (!SvgIcon) return <Loading />;

  return (
    <div className="skill-card">
      {/*<img src={SvgIcon} alt="" />*/}
      {/*//@ts-ignore*/}
      <SvgIcon />
      <h3 className="name">{data.name}</h3>
    </div>
  );
};

export default SkillCard;
