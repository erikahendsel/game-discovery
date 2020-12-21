//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
//Icon
/* Helpful article about importing svg: https://dev.to/abachi/how-to-change-svg-s-color-in-react-42g2 */
import { ReactComponent as HeartIcon } from "../img/heart-icon.svg";

const Game = ({ name, released, image, id }) => {
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <GameStyled onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <div className="game-info">
          <h3>{name}</h3>
          <p>{released}</p>
        </div>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
      <FavoriteStyled>
        {/* Helpful article about importing svg: https://dev.to/abachi/how-to-change-svg-s-color-in-react-42g2 */}
        <HeartIcon />
      </FavoriteStyled>
    </GameStyled>
  );
};

const GameStyled = styled.div`
  position: relative;
  min-height: 20vh;
  background: #4a4d54;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  .game-info {
    min-height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

const FavoriteStyled = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 0;
  right: 0;
  background: rgba(47, 49, 54, 0.7);
  padding: 0.3em 0.9em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: ease all 0.2s;
  &:hover {
    background: rgba(47, 49, 54, 1);
    .heart-icon {
      fill: red;
    }
  }
`;
export default Game;
