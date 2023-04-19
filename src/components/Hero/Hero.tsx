import React from "react";
import { Container } from "../Header/styles";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Hero = () => {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="animate__fadeIn">
          <p>elo</p>
        </ScrollAnimation>
        <ScrollAnimation>
          <h1>Tom Smolarczyk</h1>
        </ScrollAnimation>
        <ScrollAnimation>jestem front</ScrollAnimation>
        <ScrollAnimation>pracuje w react </ScrollAnimation>
      </div>
    </Container>
  );
};

export default Hero;
