import { BrowserRouter } from "react-router-dom";
import { HeroContainer } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import devImage from "../../assets/web-design.png";

import { Zoom } from "react-awesome-reveal";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <div className="hero-text">
        <p>Hello 👋, I am</p>

        <h1>Tom Smolarczyk</h1>
        <h3>Frontend Developer</h3>
        <p className="small-resume">Making the Web Better, One UI at a Time.</p>

        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </BrowserRouter>
      </div>
      <div className="hero-image">
        <img src={devImage} alt="web-dev-image" />
      </div>
    </HeroContainer>
  );
};

export default Hero;
