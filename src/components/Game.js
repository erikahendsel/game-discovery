//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

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
    </GameStyled>
  );
};

const GameStyled = styled.div`
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

export default Game;
