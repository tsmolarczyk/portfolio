import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  display: flex;

  flex-direction: row;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .skills {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  h3 {
    margin-top: 2rem;
    color: var(--orange);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    margin-top: 1rem;
  }

  .about-description {
    flex: 1;
  }

  .about-photo {
    flex: 1;
    img {
      width: 100%;
      object-fit: contain;
      overflow: hidden;
    }
  }

  .about-image {
    text-align: center;
    img {
      margin-top: 2rem;
      width: 100%;
      filter: grayscale(1);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  // .about-text {
  //   color: red;
  // }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    margin-top: 5rem;
    flex-direction: column;
    text-align: center;

    .about-image {
      display: flex;
    }
    .hard-skills {
      justify-content: center;
    }
  }
`;
