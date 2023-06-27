import "./Btn.scss";
import React from "react";

interface PropsT {
  link?: string | null;
  onClick?: () => void;
  target?: string;
  status?: string;
  children: React.ReactNode;
}

const Btn: React.FC<PropsT> = function ({
  children,
  link,
  onClick,
  target,
  status,
}) {
  if (link)
    return (
      <a
        href={link}
        target={target}
        className={`button ${status ? status : ""}`}
      >
        {children}
      </a>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={`button ${status ? status : ""}`}>
        {children}
      </button>
    );

  return null;
};

export default Btn;
