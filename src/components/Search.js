import styled from "styled-components";
import heroImage from "../img/hollow-knight-hero.png";
import { Link } from "react-scroll";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Animation
import { fadeIn, slideInRight } from "../animations";
import { motion } from "framer-motion";

const Search = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <SearchContainerStyled>
      <header>
        <motion.div
          className="search-bar"
          variants={slideInRight}
          initial="hidden"
          animate="show"
        >
          <p>Search for games</p>
          <form className="search">
            <input value={textInput} onChange={inputHandler} type="text" />
            <Link to="searched" spy={true} smooth={true}>
              <button onClick={submitSearch} type="submit">
                Search
              </button>
            </Link>
          </form>
        </motion.div>
        <motion.div
          className="hero"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          <img src={heroImage} alt="hollow knight" />
        </motion.div>
      </header>
    </SearchContainerStyled>
  );
};

const SearchContainerStyled = styled(motion.div)`
  position: relative;
  height: 50vh;
  header {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .search-bar {
    position: absolute;
    width: 100%;
  }
  p {
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: 1rem;
  }
  input {
    width: 65%;
    font-size: 1rem;
    padding: 0.5em;
    border: 2.5px solid #7289da;
  }
  button {
    font-size: 1rem;
    border: none;
    padding: 0.5em 0;
    background: #7289da;
    border: 2.5px solid #7289da;
    cursor: pointer;
    width: 35%;
  }

  img {
    width: 100%;
    height: auto;
    opacity: 0.1;
    position: absolute;
    z-index: -5;
    top: 5px;
  }
  @media only screen and (min-width: 750px) {
    .search-bar {
      position: static;
      width: 100%;
    }
    img {
      position: static;
      opacity: 1;
    }
  }
  @media only screen and (min-width: 1150px) {
    height: 80vh;
    .search-bar {
      width: 80%;
    }
    p {
      font-size: 1.2rem;
    }
    input {
      width: 60%;
      font-size: 1.5rem;
    }
    button {
      font-size: 1.5rem;
      width: 20%;
    }
  }
  @media only screen and (min-width: 1500px) {
    height: 80vh;
    .search-bar {
      width: 60%;
    }
    input {
      width: 60%;
    }
    button {
      width: 20%;
    }
    img {
      padding-top: 5em;
    }
  }
`;

export default Search;
