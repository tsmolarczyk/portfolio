import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import image from "../../assets/tsmolarczyk-photo.jpg";

const About = () => {
  return (
    <Container id="about">
      <div>
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            My name is Tom Smolarczyk, I hold a Master's degree in Automation
            and Robotics, which has equipped me with a strong foundation in
            engineering principles.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Since 2020, I have been working in the field of frontend
            development, creating user interfaces for web applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            Currently, I work for a company where we are developing applications
            for sports betting.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>My skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="skills">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="Vue" />
            </ScrollAnimation>
          </div>

          <div className="skills">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="skills">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="skills">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="skills">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="skills">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
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
