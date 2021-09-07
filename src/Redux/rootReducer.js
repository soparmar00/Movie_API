import { combineReducers } from "redux";
import { movie, selectMovie } from "./reducer";
export const rootReducer = combineReducers({
    movie: movie,
    selectMovie: selectMovie
});
