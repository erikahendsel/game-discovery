import { Link } from "react-router-dom";
import styled from "styled-components";
//Image
import sadMarioImage from "../img/sad_mario.jpg";

const NotFoundPage = () => {
  return (
    <ContainerStyled>
      <h1>Page not found</h1>
      <ContentStyled>
        <img src={sadMarioImage} alt="Sad mario face" />
        <Link to="/">
          <button>Go to Home page</button>
        </Link>
      </ContentStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  padding: 2em 2em 0 2em;
  h1 {
    margin-bottom: 0.5em;
  }
  @media only screen and (min-width: 750px) {
    padding: 2em 3em 0 3em;
  }
  @media only screen and (min-width: 1150px) {
    padding: 2em 7em 0 7em;
  }
  @media only screen and (min-width: 1500px) {
    padding: 2em 10em 0 10em;
  }
`;

const ContentStyled = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  button {
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    padding: 1em 0;
    background: #7289da;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
  }
  @media only screen and (min-width: 1150px) {
    display: flex;
    align-items: center;
    img {
      width: 50%;
      height: auto;
      margin-right: 3em;
    }
    button {
      font-size: 2rem;
      padding: 1em 2em;
    }
  }
`;

export default NotFoundPage;
