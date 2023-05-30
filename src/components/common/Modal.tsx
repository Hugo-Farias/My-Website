import "./Modal.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { githubApiData } from "../../../typeDefinitions";
import { convertGithubData } from "../../helpers";
import Btn from "./Btn";

interface prop {
  data: githubApiData | undefined;
}

const Modal = function (prop: prop) {
  //keep hooks before if statement or react will cry about it
  const navigate = useNavigate();
  const location = useLocation().pathname.slice(1);

  if (!prop.data) return null;

  const projectNames = prop.data?.user.pinnedItems.nodes.map((v) => v.name);
  const isValidPath = projectNames.includes(location);

  if (!isValidPath) return null;

  const resetURL = () => {
    navigate("/");
  };

  const [{ image, description, name, codeLink, projectLink }] =
    convertGithubData(prop.data).filter((v) => {
      return v.name === location;
    });

  return (
    <>
      <div className="modal-backdrop" onClick={resetURL} />
      <div className="modal">
        <span className="close-button" onClick={resetURL}>
          &times;
        </span>
        <img src={image} className="image" alt="project image" />
        <div className="info">
          <h1 className="name">{name.replaceAll("-", " ")}</h1>
          <h2 className="description">{description}</h2>
          <div className="buttons">
            <Btn link={projectLink} target="_blank">
              View Project
            </Btn>
            <Btn link={codeLink} target="_blank">
              View Code
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
