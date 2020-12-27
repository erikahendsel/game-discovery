//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//Images
import playstationImage from "../img/playstation.svg";
import steamImage from "../img/steam.svg";
import xboxImage from "../img/xbox.svg";
import nintendoImage from "../img/nintendo.svg";
import appleImage from "../img/apple.svg";
import gamepadImage from "../img/gamepad.svg";
import starImage from "../img/star.svg";
import closeBtnImage from "../img/close.svg";

const GameDetail = () => {
  const history = useHistory();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (
      element.classList.contains("shadow") ||
      element.classList.contains("img-container")
    ) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstationImage;
      case "Xbox One":
        return xboxImage;
      case "PC":
        return steamImage;
      case "Nintendo Switch":
        return nintendoImage;
      case "iOS":
        return appleImage;
      default:
        return gamepadImage;
    }
  };

  //Data
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadowStyled className="shadow" onClick={exitDetailHandler}>
          <DetailStyled>
            <CloseButtonStyled onClick={exitDetailHandler}>
              <div className="img-container">
                <img src={closeBtnImage} alt="close button" />
              </div>
            </CloseButtonStyled>
            <ContentStyled>
              <h3 className="game-name">{game.name}</h3>
              <StatsStyled>
                <div className="rating">
                  <div className="rating-stars">
                    <img src={starImage} alt="Rating star" />
                    <p>{game.rating} rating</p>
                  </div>
                </div>
                <InfoStyled>
                  <h3>Platforms</h3>
                  <PlatformsStyled>
                    {game.platforms.map((data) => (
                      <img
                        src={getPlatform(data.platform.name)}
                        alt={data.platform.name}
                        key={data.platform.id}
                      />
                    ))}
                  </PlatformsStyled>
                </InfoStyled>
              </StatsStyled>
              <MediaStyled>
                <img
                  src={smallImage(game.background_image, 1280)}
                  alt="game image"
                />
              </MediaStyled>
              <DescriptionStyled>
                <p>{game.description_raw}</p>
              </DescriptionStyled>
              <div className="gallery">
                {screenshots.results.map((screen) => (
                  <img
                    src={smallImage(screen.image, 1280)}
                    key={screen.id}
                    alt={screen.id}
                  />
                ))}
              </div>
            </ContentStyled>
          </DetailStyled>
        </CardShadowStyled>
      )}
    </>
  );
};

const CardShadowStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7289da;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const ContentStyled = styled.div`
  padding: 2em;
  .game-name {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 750px) {
    padding: 0em 3em 2em 3em;
    .game-name {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 1150px) {
    padding: 0em 7em 2em 7em;
  }
  @media only screen and (min-width: 1500px) {
    padding: 0em 10em 2em 10em;
  }
`;

const DetailStyled = styled.div`
  /* width: 80%; */
  width: 100%;
  background: #252525;
  position: absolute;
  /* left: 10%; */
  left: 0%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
  @media only screen and (min-width: 750px) {
    width: 80%;
    left: 10%;
  }
`;

const CloseButtonStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;

  .img-container {
    background: white;
    padding: 0.5em 0.5em 1.5em 1.5em;
    border-bottom-left-radius: 90%;
    cursor: pointer;
  }
  img {
    width: 2em;
    height: 2em;
    pointer-events: none;
  }
  @media only screen and (min-width: 750px) {
    position: static;
  }
`;

const StatsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 750px) {
    padding-top: 1em;
  }
  .rating-stars {
    display: flex;
    align-items: center;
    margin-top: 0.3em;
    min-width: 100px;
    img {
      width: 1.4em;
      height: 1.4em;
    }
    p {
      margin-left: 0.4em;
      margin-top: 0.2em;
    }
  }
`;

const InfoStyled = styled.div`
  text-align: center;
  @media only screen and (max-width: 750px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

const PlatformsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    margin-left: 1em;
    margin-top: 0.7em;
    width: 1.5em;
    height: 1.5em;
  }
  @media only screen and (min-width: 750px) {
    img {
      width: 2em;
      height: 2em;
    }
  }
`;

const MediaStyled = styled.div`
  margin-top: 3em;
  img {
    width: 100%;
  }
`;

const DescriptionStyled = styled.div`
  margin: 5em 0;
`;

export default GameDetail;
