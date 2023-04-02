import "./Hero.scss";
import Separator from "./common/Separator";
import Btn from "./common/Btn";

const Hero = function () {
  return (
    <>
      <section className="hero">
        {/*<img src={photoS} alt="Photo of Adam Keyes" className="photo" />*/}
        <div className="photo" />

        <div className="greeting">
          <h1 className="introduction">
            Nice to meet you! I'm <span className="name">Adam Keyes.</span>
          </h1>

          <p className="description">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>

          <Btn>Contact Me</Btn>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default Hero;
