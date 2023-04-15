import "./Hero.scss";
import { firstName, lastName } from "../data/sharedData.json";
import Separator from "./common/Separator";
import Btn from "./common/Btn";

const Hero = function () {
  const fullName = `${firstName} ${lastName}`;

  console.log(document.body.scrollHeight - 1000);

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
      <Separator />
    </>
  );
};

export default Hero;
