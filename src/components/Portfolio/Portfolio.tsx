import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import metaProject from "../../assets/meta-project.png";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <h2>My projects</h2>
      <div
        className="projects"
        onClick={() =>
          window.open("https://explorer-motion.vercel.app", "_blank")
        }
      >
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <button>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </button>
            </div>
          </header>
          <div className="body">
            <h3>Explorer Metavers</h3>
            <p>
              Landing page, written in React, uses Framer Motion for animations.
            </p>
            <div className="project-photo">
              <img src={metaProject} alt="" />
            </div>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>Taildwind</li>
              <li>NextJS</li>
            </ul>
          </footer>
        </div>
        <div className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b "
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </header>
          <div className="body">
            <h3>Project title</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi est cum corporis dolorum? Explicabo delectus
              necessitatibus obcaecati a inventore architecto.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>Taildwind</li>
            </ul>
          </footer>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
