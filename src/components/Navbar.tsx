import "./Navbar.scss";
import { ReactComponent as GithubLogo } from "../assets/images/navicon-github.svg";
import { ReactComponent as LinkedinLogo } from "../assets/images/navicon-linkedin.svg";
import { FIRST_NAME, LAST_NAME, GITHUB_URL, LINKEDIN_URL } from "../config";

const Navbar = function () {
  return (
    <nav className="nav">
      <div className="name">
        <div className="first-name">{FIRST_NAME}</div>
        <div className="last-name">{LAST_NAME}</div>
      </div>
      <div className="socials">
        <a href={GITHUB_URL} target="_blank">
          <GithubLogo className="navicon-github" />
        </a>
        <a href={LINKEDIN_URL} target="_blank">
          <LinkedinLogo className="navicon-linkedin" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
