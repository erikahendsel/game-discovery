import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
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
      <div>
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
      <div>
        <p className="footer-title">CV</p>
        <ul>
          <li>CV: click here to view/download CV pdf</li>
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
  margin-top: 3em;
  padding-bottom: 3em;
  .footer-title {
    font-size: 1.6em;
    font-weight: bold;
    padding-top: 1em;
  }
  background: #101010;
  a {
    text-decoration: underline;
  }
  ul {
    list-style: none;
    li {
      color: white;
    }
  }
`;

export default Footer;
