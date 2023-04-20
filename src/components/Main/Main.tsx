import React from "react";
import Hero from "../Hero/Hero";
import { Container } from "./styles";

const Main = () => {
  return (
    <>
      <Container>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </Container>
    </>
  );
};

export default Main;
