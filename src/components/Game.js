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
//Animation
import { popup } from "../animations";

const Game = ({ name, released, image, id, rating }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <GameStyled
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <div className="game-info">
          <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
          <p>{released}</p>
        </div>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </GameStyled>
  );
};

const GameStyled = styled(motion.div)`
  position: relative;
  min-height: 20vh;
  background: #4a4d54;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: ease 0.2s all;

  :hover {
    box-shadow: 0px 0px 20px #7289da;
  }
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    transition: ease 0.2s all;
  }
  .game-info {
    min-height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3,
    p {
      cursor: pointer;
    }
  }
`;

export default Game;
