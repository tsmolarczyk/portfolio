import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import cv from "../../assets/cv.pdf";
import { Container } from "./styles";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleTheme = () => {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  };

  return (
    <Container className="header-fixed">
      <BrowserRouter>
        <HashLink smooth to="#home" className="logo">
          <span>T</span>
          <span>Smolarczyk</span>
        </HashLink>

        <input
          className="container_toggle"
          onChange={toggleTheme}
          type="checkbox"
          name="mode"
          id="switch"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? "active" : ""}>
          <NavHashLink smooth to="#home">
            Home
          </NavHashLink>
          <NavHashLink to="#about">Aboute Me</NavHashLink>
          <NavHashLink to="#portfolio">Portfolio</NavHashLink>
          <NavHashLink to="#contact">Contact</NavHashLink>
          <a href={cv} download>
            CV
          </a>
        </nav>
        <div
          className={isActive ? "menu active" : "menu"}
          onClick={() => {
            setActive(!isActive);
          }}
        ></div>
      </BrowserRouter>
    </Container>
  );
};

export default Header;
