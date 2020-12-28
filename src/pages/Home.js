import { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
  //Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameListStyled variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <GamesStyled>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </GamesStyled>
          </div>
        ) : (
          ""
        )}
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
      </AnimateSharedLayout>
    </GameListStyled>
  );
};

const GameListStyled = styled(motion.div)`
  padding: 0 2em;
  h2 {
    padding: 1em 0;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 750px) {
    padding: 0 3em;
  }
  @media only screen and (min-width: 1150px) {
    padding: 0 7em;
    h2 {
      font-size: 2rem;
    }
  }
  @media only screen and (min-width: 1500px) {
    padding: 0 10em;
  }
`;
const GamesStyled = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  padding-bottom: 3em;
  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

export default Home;
