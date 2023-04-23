import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <h2>My projects</h2>
      <div className="projects">
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
