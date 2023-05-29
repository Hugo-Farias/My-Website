import "./Modal.scss";
import { useLocation } from "react-router-dom";
import { githubApiData } from "../../../typeDefinitions";
import { convertGithubData } from "../../helpers";

interface prop {
  data: githubApiData | undefined;
}

const Modal = function (prop: prop) {
  if (!prop.data) return null;

  const location = useLocation().pathname.slice(1);
  const projectNames = prop.data?.user.pinnedItems.nodes.map((v) => v.name);
  console.log("-> projectNames", projectNames);
  const isValidPath = projectNames.includes(location);
  console.log("-> isValidPath", isValidPath);

  if (!isValidPath) return null;

  const [image] = convertGithubData(prop.data).filter((v) => {
    console.log(v.name);
    return v.name === location;
  });

  console.log(image);

  return (
    <div className="modal">
      {/*<img src={image} className="image" alt="project image" />*/}
      <div className="description">test</div>
    </div>
  );
};

export default Modal;
