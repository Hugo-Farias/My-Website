import "./Btn.scss";
import React from "react";

interface PropsT {
  children: React.ReactNode;
}

const Btn: React.FC<PropsT> = function ({ children }) {
  return <button className="button">{children}</button>;
};

export default Btn;
