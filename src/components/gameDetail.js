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

const GameDetail = () => {
  const history = useHistory();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
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
            <StatsStyled>
              <div className="rating">
                <h3>{game.name}</h3>
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
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const DetailStyled = styled.div`
  width: 80%;
  padding: 2em 5em;
  background: #252525;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const StatsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .rating-stars {
    display: flex;
    align-items: center;
    margin-top: 0.3em;
    img {
      width: 1.3em;
      height: 1.3em;
    }
    p {
      margin-left: 0.3em;
    }
  }
`;

const InfoStyled = styled.div`
  text-align: center;
`;

const PlatformsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3em;
    margin-top: 0.7em;
    width: 2em;
    height: 2em;
  }
`;

const MediaStyled = styled.div`
  margin-top: 5em;
  img {
    width: 100%;
  }
`;

const DescriptionStyled = styled.div`
  margin: 5em 0;
`;

export default GameDetail;
