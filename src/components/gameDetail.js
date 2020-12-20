//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

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
                <p>Rating: {game.rating}</p>
              </div>
              <InfoStyled>
                <h3>Platforms</h3>
                <PlatformsStyled>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
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
  top: 8vh;
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
`;

const InfoStyled = styled.div`
  text-align: center;
`;

const PlatformsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3em;
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
