import "./Separator.scss";
import React from "react";

interface propsT {
  hide?: boolean;
}

const Separator: React.FC<propsT> = function ({ hide }) {
  return <div className={`separator ${hide ? "hidden" : ""}`} />;
};

export default Separator;
