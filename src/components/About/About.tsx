import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import nextjsIcon from "../../assets/nextjs-icon.png";
import muiIcon from "../../assets/mui-logo.png";
import storybookIcon from "../../assets/storybook-icon.png";

import image from "../../assets/tsmolarczyk-photo.jpg";

const About = () => {
  return (
    <Container id="about">
      <div className="about-description">
        <div>
          <h2>About Me</h2>
        </div>
        <div>
          <p>
            My name is Tomek Smolarczyk. Coding has been my passion since I
            remember. I took a detour into robot programming and earned a
            master's degree in Automation and Robotics. However, I finally
            decide to pursue a career in software development.
          </p>
        </div>
        <div>
          <p>
            Currently part of an international team, developing cutting-edge
            applications for the bookmaking industry.
          </p>
        </div>
        <div>
          <p>
            I mainly work with React, but I am eager to explore new technologies
            and approaches.
          </p>
        </div>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000} animateOnce>
          <h3>My skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="skills">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.1 * 1000}
              animateOnce
            >
              <img src={reactIcon} alt="Vue" />
            </ScrollAnimation>
          </div>

          <div className="skills">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.2 * 1000}
              animateOnce
            >
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="skills">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.3 * 1000}
              animateOnce
            >
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="skills">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.4 * 1000}
              animateOnce
            >
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="skills">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.6 * 1000}
              animateOnce
            >
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="skills">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.6 * 1000}
              animateOnce
            >
              <img src={nextjsIcon} alt="nextjs" />
            </ScrollAnimation>
          </div>
          <div className="skills">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.6 * 1000}
              animateOnce
            >
              <img src={muiIcon} alt="materialui" />
            </ScrollAnimation>
          </div>
          <div className="skills">
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={0.6 * 1000}
              animateOnce
            >
              <img src={storybookIcon} alt="storybook" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-photo">
        <img src={image} alt="tsmolarczyk-photo" />
      </div>
    </Container>
  );
};

export default About;
