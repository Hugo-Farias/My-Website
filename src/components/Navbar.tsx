import "./Navbar.scss";
import { firstName, lastName } from "../data/sharedData.json";
import { ReactComponent as GithubLogo } from "../assets/images/navicon-github.svg";
import { ReactComponent as FrontEndMentorLogo } from "../assets/images/navicon-frontend-mentor.svg";
import { ReactComponent as LinkedinLogo } from "../assets/images/navicon-linkedin.svg";
import { navLinks } from "../data/sharedData.json";

const Navbar = function () {
  const { github, frontEndMentor, linkedIn } = navLinks;

  return (
    <nav className="nav">
      <div className="name">
        <div className="first-name">{firstName}</div>
        <div className="last-name">{lastName}</div>
      </div>
      <div className="socials">
        <a href={github} target="_blank">
          <GithubLogo className="navicon-github" />
        </a>
        {/*<a href={frontEndMentor} target="_blank">*/}
        {/*  <FrontEndMentorLogo className="navicon-frontend-mentor" />*/}
        {/*</a>*/}
        <a href={linkedIn} target="_blank">
          <LinkedinLogo className="navicon-linkedin" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
