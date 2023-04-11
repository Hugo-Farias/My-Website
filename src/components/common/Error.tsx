import "./Error.scss";
import Btn from "./Btn";
import React from "react";

interface PropsT {
  msg: string;
  link?: { label: string; url: string };
}

const Error: React.FC<PropsT> = function ({ msg, link }) {
  return (
    <div className="error">
      <h2 className="section-title">{msg}</h2>
      <br />
      <Btn link={link!.url} target="_blank">
        {link!.label}
      </Btn>
    </div>
  );
};

export default Error;
