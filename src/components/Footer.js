import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-container">
        <p className="footer-title">Contact</p>
        <ul>
          <li>
            E-mail:{" "}
            <a href="mailto:erikahendsel@hotmail.com?subject=Greetings">
              erikahendsel@hotmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/erika-hendsel-67b2111a5/"
              target="_blank"
            >
              Erika Hendsel
            </a>
          </li>
          <li>
            Website:{" "}
            <a href="http://erikahendsel.com/" target="_blank">
              erikahendsel.com
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-container">
        <p className="footer-title">Materials</p>
        <ul>
          <li>
            GitHub:{" "}
            <a href="https://github.com/erikahendsel" target="_blank">
              erikahendsel
            </a>
          </li>
          <li>
            API:{" "}
            <a href="https:/rawg.io/apidocs" target="_blank">
              www.rawg.io/apidocs
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-container">
        <p className="footer-title">CV</p>
        <ul>
          <li>CV: click here to view/download CV pdf (coming soon)</li>
          <li>
            Other projects:{" "}
            <a href="http://erikahendsel.com/" target="_blank">
              erikahendsel@hotmail.com
            </a>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  /* display: flex;
  justify-content: space-between; */
  line-height: 30px;
  width: 100%;
  margin-top: 2em;
  padding: 2em 2em 3em 2em;
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  .footer-title {
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 1em;
    text-transform: uppercase;
  }
  background: #101010;
  a {
    text-decoration: underline;
  }
  ul {
    list-style: none;
    li {
      color: white;
      margin: 12px 0;
    }
  }

  @media only screen and (min-width: 750px) {
    padding-left: 3em;
    padding-right: 3em;
  }
  @media only screen and (min-width: 1150px) {
    padding-left: 7em;
    padding-right: 7em;
  }
  @media only screen and (min-width: 1500px) {
    padding-left: 10em;
    padding-right: 10em;
  }
`;

export default Footer;
