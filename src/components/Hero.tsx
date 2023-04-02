import "./Hero.scss";
import { firstName, lastName } from "../data/sharedData.json";
import Separator from "./common/Separator";
import Btn from "./common/Btn";

const Hero = function () {
  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <section className="hero">
        <div className="greeting">
          <h1 className="introduction">
            Hello there,
            <br /> welcome to my site.
            <br /> I'm <span className="name">{fullName}</span>.
          </h1>

          <p className="description">
            I'm a bilingual front-end developer passionate about building web
            apps.
          </p>

          <Btn>Contact Me</Btn>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default Hero;
