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
      <div>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} animateOnce>
          <p>
            My name is Tom Smolarczyk, I have master's degree in Automation and
            Robotics, which has equipped me with a strong foundation in
            engineering principles and problem-solving.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Since 2020, continuously expanding my skills in web development. I
            am working on programming user interfaces and creating intuitive and
            functional web applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000} animateOnce>
          <p>
            I am currently working in a company where we develop applications
            for bookmaking.
          </p>
        </ScrollAnimation>
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
      <div style={{ marginLeft: "5rem" }}>
        <img width="auto" height="600px" src={image} alt="" />
      </div>
    </Container>
  );
};

export default About;
