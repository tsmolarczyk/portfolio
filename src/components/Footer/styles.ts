import styled from "styled-components";

export const Container = styled.footer`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // padding: 1.8rem 10rem;

  // background-color: #2b2b2b;

  // bottom: 0;
  // left: 0;
  // right: 0;
  // width: 100vw;
  // z-index: 99;

  // position: relative;
  // left: 50%;
  // right: 50%;
  // margin-left: -50vw;
  // margin-right: -50vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background-color: #2b2b2b;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  .inner-container {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 2.8rem;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3rem;
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 800px) {
    padding: 2rem 10rem;
    // flex-direction: column;
    gap: 2rem;
    text-align: center;

    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;
