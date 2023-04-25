import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import devImage from "../../assets/web-design.png";

import { Zoom } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Container id="home">
      <div className="hero-text">
        <p>Hello 👋, I am</p>

        <h1>Tom Smolarczyk</h1>
        <h3>React Frontend Developer</h3>
        <p className="small-resume">
          I am working with react to build to create attractive and intuitive
          web pages.
        </p>

        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </BrowserRouter>
      </div>
      <div className="hero-image">
        <img src={devImage} alt="web-dev-image" />
      </div>
    </Container>
  );
};

export default Hero;
