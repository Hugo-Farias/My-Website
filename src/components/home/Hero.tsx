import "./Hero.scss";
import Btn from "../common/Btn";
import { FIRST_NAME, LAST_NAME } from "../../config";

const Hero = function () {
  const fullName = `${FIRST_NAME} ${LAST_NAME}`;

  return (
    <>
      <section className="hero">
        <div className="greeting">
          <h1 className="introduction">
            Welcome to my site,
            <br /> I'm <span className="name">{fullName}</span>.
          </h1>

          <p className="description">
            A bilingual front-end developer passionate about building web apps.
          </p>

          <Btn onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
            Contact Me
          </Btn>
        </div>
      </section>
    </>
  );
};

export default Hero;
