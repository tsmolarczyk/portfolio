import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <Container id="home">
      <div className="hero-text">
        {/* <ScrollAnimation animateIn="fadeInUp"> */}
        <p>Hello 👋, I am</p>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
        <h1>Tom Smolarczyk</h1>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> */}
        <h3>Frontend Developer</h3>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> */}
        <p className="small-resume">
          I am working with react to build to create attractive and intuitive
          web pages.
        </p>
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="fadeInUp"> */}
        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </BrowserRouter>
        {/* </ScrollAnimation> */}
      </div>
    </Container>
  );
};

export default Hero;
