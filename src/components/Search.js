import styled from "styled-components";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import heroImage from "../img/hollow-knight-hero.png";

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
        <div className="search-bar">
          <p>Search for games</p>
          <form className="search">
            <input value={textInput} onChange={inputHandler} type="text" />
            <button onClick={submitSearch} type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="hero">
          <img src={heroImage} alt="hollow knight" />
        </div>
      </header>
    </SearchContainerStyled>
  );
};

const SearchContainerStyled = styled.div`
  padding: 2em 10em;
  header {
    display: flex;
    align-items: center;
  }
  .search-bar {
    width: 60%;
  }
  p {
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: 1.5em;
  }
  input {
    width: 55%;
    font-size: 1.5rem;
    padding: 0.5em;
    border: 2.5px solid #7289da;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.6em 2em;
    background: #7289da;
    cursor: pointer;
  }
  img {
    width: auto;
    height: 500px;
  }
`;

export default Search;
