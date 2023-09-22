import styled from "styled-components";

export const HeroContainer = styled.section`
  // margin-top: 20rem;
  margin: 0 auto;
  padding-top: 17%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  .hero-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--orange);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }


  .hero-image {
    img {
      width: 100%;  
      object-fit: cover; 
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    min-height: auto;

    flex-direction: column;
    align-items: center;

    .hero-text {
        flex: 1;
    
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      flex: 1;
      max-width: 40rem;
      img {
        width: 100%;
        object-fit: cover;
      }    
      justify-content: left;
  }

  @media (max-width: 600px) {
    margin-top: 25%;
  }
  @media (max-width: 480px) {
    margin-top: 35%;
  }
`;
