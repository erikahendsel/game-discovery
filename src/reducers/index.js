import gamesReducer from "./GamesReducer";
import { combineReducers } from "redux";

//Combine all reducers
const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
