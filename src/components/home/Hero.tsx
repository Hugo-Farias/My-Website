import "./Hero.scss";
import Btn from "../common/Btn";
import { FIRST_NAME, LAST_NAME } from "../../config";
import { useState } from "react";
import CVSection from "./CVSection";

const Hero = function () {
  const [cv, setCv] = useState(true);
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

          <div className="buttons">
            <Btn
              status={cv ? "open" : ""}
              onClick={() => setCv((prev) => !prev)}
            >
              Curriculum Vitae
            </Btn>
            {/*{cv ? <CVSection status={cv} /> : ""}*/}
            <CVSection status={cv} />
            <Btn onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
              Contact Me
            </Btn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
