import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyled>
      <Link id="logo" to="/">
        GameDiscovery
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorited</Link>
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #101010;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 5em;
    position: relative;
  }
`;
export default Nav;
