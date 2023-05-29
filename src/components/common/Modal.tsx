import "./Modal.scss";
import { useLocation } from "react-router-dom";
import { githubApiData } from "../../../typeDefinitions";

interface prop {
  data: githubApiData | undefined;
}

const Modal = function (prop: prop) {
  if (!prop.data) return null;
  const { data } = prop;

  const location = useLocation().pathname.slice(1);
  const projectNames = data?.user.pinnedItems.nodes.map((v) => v.name);
  const isValidPath = projectNames.includes(location);

  if (!isValidPath) return null;

  return (
    <div className="modal">
      <div className="image"></div>
    </div>
  );
};

export default Modal;
