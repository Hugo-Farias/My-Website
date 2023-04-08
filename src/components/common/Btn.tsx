import "./Btn.scss";
import React, { MouseEventHandler } from "react";

interface PropsT {
  link?: string;
  target?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Btn: React.FC<PropsT> = function ({ children, link, onClick, target }) {
  if (link)
    return (
      <a href={link} target={target} className="button">
        {children}
      </a>
    );

  if (onClick)
    return (
      <button onClick={onClick} className="button">
        {children}
      </button>
    );

  return null;
};

export default Btn;
