import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
    }
    p {
      color: var(--orange);
      font-weight: 500;
    }
  }
  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 8rem;
    margin-bottom: 3rem;
    a {
      height:7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      width: 40rem;
      
      gap: 2rem;
      background-color: var(--orange);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      
      .contact-btn{
        display:flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }
      
      img {
        width: 3rem;
        justify-conent
      }
      
      span {
        color: var(--black);
        font-weight: 500;
      }
      
      &:hover {
        background-color: var(--light-green);
        a {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .contacts {
      flex-direction: column;
      
      div {
        width: 100%;
        flex-direction: column;
      } 
    }
    
    .contacts a .contact-btn {
      flex-direction: row;
    }

  
  }
`;
