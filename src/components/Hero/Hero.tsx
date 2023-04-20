import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>elo</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Tom Smolarczyk</h1>
        </ScrollAnimation>
        <ScrollAnimation>jestem front</ScrollAnimation>
        <ScrollAnimation>pracuje w react </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            Sou um técnico em informática com foco em desenvolvimento Web com
            JavaScript.
          </p>
        </ScrollAnimation>
      </div>
    </Container>
  );
};

export default Hero;
