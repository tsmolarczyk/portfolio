import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
// import cv from "../../assets/cv.pdf";
import cv from "../../assets/Smolarczyk Tomasz Resume.pdf";

import { HeaderContainer } from "./styles";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleTheme = () => {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <HeaderContainer className="header-fixed">
      <div className="inner-container">
        <BrowserRouter>
          <HashLink smooth to="#home" className="logo">
            <span>t</span>
            <span>smolarczyk</span>
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
            <NavHashLink smooth to="#home" onClick={closeMenu}>
              Home
            </NavHashLink>
            <NavHashLink smooth to="#about" onClick={closeMenu}>
              About Me
            </NavHashLink>
            <NavHashLink smooth to="#portfolio" onClick={closeMenu}>
              Portfolio
            </NavHashLink>
            <NavHashLink smooth to="#contact" onClick={closeMenu}>
              Contact
            </NavHashLink>
            <a href={cv} className="button" download onClick={closeMenu}>
              CV
            </a>
          </nav>
          <div
            aria-expanded={isActive ? "true" : "false"}
            aria-haspopup="true"
            aria-label={isActive ? "close menu" : "open menu"}
            className={isActive ? "menu active" : "menu"}
            onClick={() => {
              setActive(!isActive);
            }}
          ></div>
        </BrowserRouter>
      </div>
    </HeaderContainer>
  );
};

export default Header;
