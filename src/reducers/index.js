import gamesReducer from "./GamesReducer";
import { combineReducers } from "redux";
import detailReducer from "./detailReducer";

//Combine all reducers
const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
