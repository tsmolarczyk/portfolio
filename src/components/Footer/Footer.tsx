import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";

const Footer = () => {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>t</span>
        <span>smolarczyk</span>
      </a>
      <div>
        <p>
          Made in 2022 with <img src={reactIcon} alt="react" />{" "}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/jtsoares/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/joaotuliojt"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
