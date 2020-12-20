import { useEffect } from "react";
import GameDetail from "../components/gameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  //Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameListStyled>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <GamesStyled>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesStyled>
      <h2>Popular Games</h2>
      <GamesStyled>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesStyled>
      <h2>New Games</h2>
      <GamesStyled>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesStyled>
    </GameListStyled>
  );
};

const GameListStyled = styled.div`
  padding: 0 10em;
  h2 {
    padding: 1em 0;
  }
`;
const GamesStyled = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 2em;
`;

export default Home;
